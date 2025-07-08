import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:audioplayers/audioplayers.dart';
import 'dart:async';
import 'dart:math';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '音樂應用程式',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const StartPage(),
    );
  }
}

class StartPage extends StatefulWidget {
  const StartPage({super.key});
  @override
  State<StartPage> createState() => _StartPageState();
}

class _StartPageState extends State<StartPage> {
  bool _counting = false;
  int _count = 3;
  Timer? _timer;

  void _startCountdown() {
    setState(() {
      _counting = true;
      _count = 3;
    });
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        _count--;
      });
      if (_count == 0) {
        _timer?.cancel();
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => MyHomePage(totalQuestions: 10),
          ),
        );
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _counting
            ? Text(
                _count > 0 ? '$_count' : '',
                style: const TextStyle(
                  fontSize: 80,
                  fontWeight: FontWeight.bold,
                ),
              )
            : ElevatedButton(
                onPressed: _startCountdown,
                child: const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                  child: Text('Start', style: TextStyle(fontSize: 32)),
                ),
              ),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  final int totalQuestions;
  const MyHomePage({super.key, this.totalQuestions = 10});
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final AudioPlayer _audioPlayer = AudioPlayer();
  int _currentGroup = 1; // 0:左, 1:中, 2:右
  int _currentQuestion = 0;
  int _correct = 0;
  int _wrong = 0;
  int _countdown = 30;
  Timer? _timer;
  Timer? _globalTimer;
  bool _showingResult = false;
  late List<String> _questionImages;
  late String _currentScore;
  final Random _random = Random();
  Color? _keyFeedbackColor;
  int? _keyFeedbackIndex;

  // 有音檔的圖片清單
  final Set<String> _hasSoundImages = {
    'A1.png',
    'A2.png',
    'A3.png',
    'A4.png',
    'B1.png',
    'B2.png',
    'B3.png',
    'B4.png',
    'C1.png',
    'C2.png',
    'C3.png',
    'C4.png',
    'C5.png',
    'D1.png',
    'D2.png',
    'D3.png',
    'D4.png',
    'E1.png',
    'E2.png',
    'E3.png',
    'E4.png',
    'F1.png',
    'F2.png',
    'F3.png',
    'F4.png',
    'G1.png',
    'G2.png',
    'G3.png',
    'G4.png',
  };

  // 三組白鍵
  final List<List<String>> groups = [
    [
      'C1.png',
      'D1.png',
      'E1.png',
      'F1.png',
      'G1.png',
      'A1.png',
      'B1.png',
      'C2.png',
      'D2.png',
      'E2.png',
      'F2.png',
      'G2.png',
      'A2.png',
      'B2.png',
      'C3.png',
    ],
    [
      'C2.png',
      'D2.png',
      'E2.png',
      'F2.png',
      'G2.png',
      'A2.png',
      'B2.png',
      'C3.png',
      'D3.png',
      'E3.png',
      'F3.png',
      'G3.png',
      'A3.png',
      'B3.png',
      'C4.png',
    ],
    [
      'C3.png',
      'D3.png',
      'E3.png',
      'F3.png',
      'G3.png',
      'A3.png',
      'B3.png',
      'C4.png',
      'D4.png',
      'E4.png',
      'F4.png',
      'G4.png',
      'A4.png',
      'B4.png',
      'C5.png',
    ],
  ];

  final Map<int, String> _blackKeyMap = {
    0: 'C#',
    1: 'D#',
    3: 'F#',
    4: 'G#',
    5: 'A#',
    7: 'C#',
    8: 'D#',
    10: 'F#',
    11: 'G#',
    12: 'A#',
  };

  @override
  void initState() {
    super.initState();
    // 所有題目圖片（可根據需求調整 pool）
    _questionImages = [...groups.expand((g) => g)];
    _nextQuestion();
    _startGlobalTimer();
  }

  void _startGlobalTimer() {
    _countdown = 30;
    _globalTimer?.cancel();
    _globalTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        _countdown--;
      });
      if (_countdown == 0) {
        _globalTimer?.cancel();
        _timer?.cancel();
        setState(() {
          _showingResult = true;
        });
        Future.delayed(const Duration(milliseconds: 500), () {
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
              builder: (context) =>
                  ResultPage(correct: _correct, wrong: _wrong),
            ),
          );
        });
      }
    });
  }

  void _nextQuestion() {
    if (_showingResult) return;
    setState(() {
      _currentScore = _questionImages[_random.nextInt(_questionImages.length)];
      _currentQuestion++;
    });
  }

  @override
  void dispose() {
    _audioPlayer.dispose();
    _timer?.cancel();
    _globalTimer?.cancel();
    super.dispose();
  }

  Future<void> playSoundAndWait(
    String assetPath, {
    int timeoutMs = 2000,
    double volume = 1.0,
  }) async {
    final player = AudioPlayer();
    final completer = Completer<void>();
    bool completed = false;
    player.onPlayerComplete.listen((event) {
      if (!completed) {
        completed = true;
        completer.complete();
      }
    });
    await player.setVolume(volume);
    await player.play(AssetSource(assetPath));
    await completer.future.timeout(
      Duration(milliseconds: timeoutMs),
      onTimeout: () {
        if (!completed) {
          completed = true;
          completer.complete();
        }
      },
    );
  }

  Future<void> _playSound(String imageName) async {
    try {
      if (_hasSoundImages.contains(imageName)) {
        String soundFile = imageName.replaceAll('.png', '.wav');
        await playSoundAndWait('sounds/$soundFile');
      } else if (imageName == 'A22.png') {
        await playSoundAndWait('sounds/A2.wav');
      }
    } catch (e) {
      print('播放音效時發生錯誤: $e');
    }
  }

  void _onKeyTap(String imageName) async {
    if (_showingResult) return;
    int tappedIndex = groups[_currentGroup].indexOf(imageName);
    if (imageName == _currentScore) {
      setState(() {
        _correct++;
        _keyFeedbackColor = Colors.green.withOpacity(0.4);
        _keyFeedbackIndex = tappedIndex;
      });
      await _playSound(imageName);
      await Future.delayed(const Duration(milliseconds: 200));
      setState(() {
        _keyFeedbackColor = null;
        _keyFeedbackIndex = null;
      });
      _nextQuestion();
    } else {
      setState(() {
        _wrong++;
        _keyFeedbackColor = Colors.red.withOpacity(0.4);
        _keyFeedbackIndex = tappedIndex;
      });
      await _playSound(imageName);
      await playSoundAndWait('sounds/wrong.mp3', volume: 0.3);
      await Future.delayed(const Duration(milliseconds: 200));
      setState(() {
        _keyFeedbackColor = null;
        _keyFeedbackIndex = null;
      });
      _nextQuestion();
    }
  }

  @override
  Widget build(BuildContext context) {
    final List<String> whiteKeys = groups[_currentGroup];
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    final double sideIconWidth = screenWidth * 0.045;
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 2),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'ex${_currentQuestion.toString().padLeft(2, '0')}',
                    style: const TextStyle(fontSize: 28),
                  ),
                  const SizedBox(width: 10),
                  const Expanded(child: SizedBox()),
                  Text(
                    '${_countdown.toString().padLeft(2, '0')}s',
                    style: const TextStyle(fontSize: 28),
                  ),
                ],
              ),
            ),
            // 樂譜區
            Padding(
              padding: const EdgeInsets.only(top: 4, bottom: 12),
              child: SizedBox(
                height: screenHeight * 0.45,
                child: Align(
                  alignment: Alignment.topCenter,
                  child: Image.asset(
                    'assets/images/${_currentScore}',
                    fit: BoxFit.contain,
                    errorBuilder: (context, error, stackTrace) => const Text(
                      '找不到樂譜圖片',
                      style: TextStyle(fontSize: 18, color: Colors.grey),
                    ),
                  ),
                ),
              ),
            ),
            // 鍵盤區
            Expanded(
              flex: 4,
              child: LayoutBuilder(
                builder: (context, constraints) {
                  final double maxKeyboardHeight = constraints.maxHeight;
                  final double totalWidth = constraints.maxWidth;
                  final double arrowWidth = sideIconWidth;
                  final double keyboardWidth = totalWidth - 2 * arrowWidth;
                  final int whiteKeyCount = whiteKeys.length;
                  // 先用floorToDouble避免誤差
                  final double baseWhiteKeyWidth =
                      (keyboardWidth / whiteKeyCount).floorToDouble();
                  // 計算前N-1鍵總寬度
                  final double lastWhiteKeyWidth =
                      keyboardWidth - baseWhiteKeyWidth * (whiteKeyCount - 1);
                  final double whiteKeyHeight = maxKeyboardHeight;
                  final double blackKeyWidth = baseWhiteKeyWidth * 0.6;
                  final double blackKeyHeight = whiteKeyHeight * 0.55;
                  // 白鍵寬度陣列
                  final List<double> whiteKeyWidths = List.generate(
                    whiteKeyCount,
                    (i) => i == whiteKeyCount - 1
                        ? lastWhiteKeyWidth
                        : baseWhiteKeyWidth,
                  );
                  // 白鍵左側累積座標
                  final List<double> whiteKeyLefts = List.generate(
                    whiteKeyCount,
                    (i) => i == 0
                        ? 0
                        : whiteKeyWidths.sublist(0, i).reduce((a, b) => a + b),
                  );
                  return Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      // 左側圖示
                      SizedBox(
                        width: arrowWidth,
                        child: InkWell(
                          onTap: _currentGroup == 0
                              ? null
                              : () => setState(
                                  () => _currentGroup = _currentGroup - 1,
                                ),
                          borderRadius: BorderRadius.circular(8),
                          child: Center(
                            child: Icon(
                              Icons.arrow_left,
                              size: arrowWidth,
                              color: _currentGroup == 0
                                  ? Colors.grey[400]
                                  : Colors.grey,
                            ),
                          ),
                        ),
                      ),
                      // 鍵盤本體
                      SizedBox(
                        width: keyboardWidth,
                        height: whiteKeyHeight,
                        child: Stack(
                          children: [
                            // 白鍵（每個用Positioned）
                            ...List.generate(whiteKeys.length, (i) {
                              String img = whiteKeys[i];
                              String note = img.replaceAll('.png', '');
                              double left = i == 0
                                  ? 0
                                  : whiteKeyWidths
                                        .sublist(0, i)
                                        .reduce((a, b) => a + b);
                              // 最後一鍵直接right:0，保證貼齊右邊
                              if (i == whiteKeys.length - 1) {
                                return Positioned(
                                  left: left,
                                  right: 0,
                                  top: 0,
                                  bottom: 0,
                                  child: GestureDetector(
                                    onTap: () => _onKeyTap(img),
                                    child: Container(
                                      decoration: BoxDecoration(
                                        color:
                                            (_keyFeedbackIndex == i &&
                                                _keyFeedbackColor != null)
                                            ? _keyFeedbackColor
                                            : Colors.white,
                                        border: Border.all(
                                          color: Colors.black,
                                          width: 1,
                                        ),
                                      ),
                                      child: Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Padding(
                                          padding: const EdgeInsets.only(
                                            bottom: 4,
                                          ),
                                          child: Text(
                                            note,
                                            style: const TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              } else {
                                return Positioned(
                                  left: left,
                                  width: whiteKeyWidths[i],
                                  top: 0,
                                  bottom: 0,
                                  child: GestureDetector(
                                    onTap: () => _onKeyTap(img),
                                    child: Container(
                                      decoration: BoxDecoration(
                                        color:
                                            (_keyFeedbackIndex == i &&
                                                _keyFeedbackColor != null)
                                            ? _keyFeedbackColor
                                            : Colors.white,
                                        border: Border.all(
                                          color: Colors.black,
                                          width: 1,
                                        ),
                                      ),
                                      child: Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Padding(
                                          padding: const EdgeInsets.only(
                                            bottom: 4,
                                          ),
                                          child: Text(
                                            note,
                                            style: const TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              }
                            }),
                            // 黑鍵（每個用Positioned）
                            ...List.generate(whiteKeys.length, (i) {
                              // C3 右側補一個黑鍵（C#3/Db3）
                              bool isC3Right = false;
                              if (i < whiteKeys.length - 1 &&
                                  whiteKeys[i].startsWith('C3') &&
                                  whiteKeys[i + 1].startsWith('D3')) {
                                isC3Right = true;
                              }
                              if (_blackKeyMap.containsKey(i) || isC3Right) {
                                double left;
                                if (isC3Right) {
                                  // C3右側黑鍵位置：C3的left+寬度-0.5*黑鍵寬度
                                  left =
                                      whiteKeyLefts[i] +
                                      whiteKeyWidths[i] -
                                      blackKeyWidth / 2;
                                } else {
                                  left = (i + 1 < whiteKeyLefts.length)
                                      ? whiteKeyLefts[i + 1] - blackKeyWidth / 2
                                      : keyboardWidth - blackKeyWidth / 2;
                                }
                                return Positioned(
                                  left: left,
                                  width: blackKeyWidth,
                                  height: blackKeyHeight,
                                  top: 0,
                                  child: GestureDetector(
                                    onTap: () {
                                      String blackNote;
                                      if (isC3Right) {
                                        blackNote = 'C3sharp'; // 或Db3
                                      } else {
                                        blackNote = _blackKeyMap[i]!;
                                      }
                                      String soundFile =
                                          blackNote.replaceAll('#', 'sharp') +
                                          '.wav';
                                      _playSound(soundFile);
                                    },
                                    child: Container(
                                      decoration: BoxDecoration(
                                        color: Colors.black,
                                        borderRadius: BorderRadius.circular(4),
                                        border: Border.all(
                                          color: Colors.black,
                                          width: 1,
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              } else {
                                return const SizedBox.shrink();
                              }
                            }),
                            // 最右側額外一個黑鍵（如C4sharp）
                            if (whiteKeys.isNotEmpty)
                              Positioned(
                                right: 0,
                                width: blackKeyWidth,
                                height: blackKeyHeight,
                                top: 0,
                                child: GestureDetector(
                                  onTap: () {
                                    String soundFile = 'C4sharp.wav';
                                    _playSound(soundFile);
                                  },
                                  child: Container(
                                    decoration: BoxDecoration(
                                      color: Colors.black,
                                      borderRadius: BorderRadius.circular(4),
                                      border: Border.all(
                                        color: Colors.black,
                                        width: 1,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                          ],
                        ),
                      ),
                      // 右側圖示
                      SizedBox(
                        width: arrowWidth,
                        child: InkWell(
                          onTap: _currentGroup == 2
                              ? null
                              : () => setState(
                                  () => _currentGroup = _currentGroup + 1,
                                ),
                          borderRadius: BorderRadius.circular(8),
                          child: Center(
                            child: Icon(
                              Icons.arrow_right,
                              size: arrowWidth,
                              color: _currentGroup == 2
                                  ? Colors.grey[400]
                                  : Colors.grey,
                            ),
                          ),
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ResultPage extends StatelessWidget {
  final int correct;
  final int wrong;
  const ResultPage({super.key, required this.correct, required this.wrong});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '答對：$correct',
              style: const TextStyle(fontSize: 32, color: Colors.green),
            ),
            const SizedBox(height: 16),
            Text(
              '答錯：$wrong',
              style: const TextStyle(fontSize: 32, color: Colors.red),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () {
                Navigator.pushAndRemoveUntil(
                  context,
                  MaterialPageRoute(builder: (context) => const StartPage()),
                  (route) => false,
                );
              },
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                child: Text('再玩一次', style: TextStyle(fontSize: 28)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
