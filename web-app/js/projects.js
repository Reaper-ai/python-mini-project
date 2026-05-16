// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

function getProjectHTML(projectName) {
    const projects = {
        'tic-tac-toe': getTicTacToeHTML(),
        'rock-paper-scissor': getRockPaperScissorHTML(),
        'dice-rolling': getDiceRollingHTML(),
        'coin-flip': getCoinFlipHTML(),
        'number-guessing': getNumberGuessingHTML(),
        'hangman': getHangmanHTML(),
        'flames': getFlamesHTML(),
        'emoji-memory': getEmojiMemoryGameHTML(),
        'fibonacci': getFibonacciHTML(),
        'progression-recognizer': getProgressionRecognizerHTML(),
        'pascal-triangle': getPascalTriangleHTML(),
        'armstrong': getArmstrongHTML(),
        'calculator': getCalculatorHTML(),
        'collatz': getCollatzHTML(),
        'prime-analyzer': getPrimeAnalyzerHTML(),
        'projectile-motion': getProjectileMotionHTML(),
        'coordinate-polar-transform': getCoordinatePolarTransformHTML(),
        'derivative-calculator': getDerivativeCalculatorHTML(),
        'morse-code': getMorseCodeHTML(),
        'tower-of-hanoi': getTowerOfHanoiHTML(),
        'number-converter': getNumberConverterHTML(),
        'typing-speed-tester': getTypingSpeedTesterHTML(),
        'snake-game': getsnakeGameHTML(),
        'password-forge': getPasswordForgeHTML(),
        'spot-the-difference': getSpotTheDifferenceHTML(),
        'whack-a-mole': getWhackaMoleHTML(),
    };

    return projects[projectName] || '<h2>Project Coming Soon!</h2>';
}

function initializeProject(projectName) {
    const initializers = {
        'tic-tac-toe': typeof initTicTacToe !== 'undefined' ? initTicTacToe : () => { },
        'rock-paper-scissor': typeof initRockPaperScissor !== 'undefined' ? initRockPaperScissor : () => { },
        'dice-rolling': typeof initDiceRolling !== 'undefined' ? initDiceRolling : () => { },
        'coin-flip': typeof initCoinFlip !== 'undefined' ? initCoinFlip : () => { },
        'number-guessing': typeof initNumberGuessing !== 'undefined' ? initNumberGuessing : () => { },
        'hangman': typeof initHangman !== 'undefined' ? initHangman : () => { },
        'flames': typeof initFlames !== 'undefined' ? initFlames : () => { },
        'emoji-memory': typeof initEmojiMemoryGame !== 'undefined' ? initEmojiMemoryGame : () => { },
        'fibonacci': typeof initFibonacci !== 'undefined' ? initFibonacci : () => { },
        'progression-recognizer': typeof initProgressionRecognizer !== 'undefined' ? initProgressionRecognizer : () => { },
        'pascal-triangle': typeof initPascalTriangle !== 'undefined' ? initPascalTriangle : () => { },
        'armstrong': typeof initArmstrong !== 'undefined' ? initArmstrong : () => { },
        'calculator': typeof initCalculator !== 'undefined' ? initCalculator : () => { },
        'collatz': typeof initCollatz !== 'undefined' ? initCollatz : () => { },
        'prime-analyzer': typeof initPrimeAnalyzer !== 'undefined' ? initPrimeAnalyzer : () => { },
        'projectile-motion': typeof initProjectileMotion !== 'undefined' ? initProjectileMotion : () => { },
        'coordinate-polar-transform': typeof initCoordinatePolarTransform !== 'undefined' ? initCoordinatePolarTransform : () => { },
        'derivative-calculator': typeof initDerivativeCalculator !== 'undefined' ? initDerivativeCalculator : () => { },
        'morse-code': typeof initMorseCode !== 'undefined' ? initMorseCode : () => { },
        'tower-of-hanoi': typeof initTowerOfHanoi !== 'undefined' ? initTowerOfHanoi : () => { },
        'number-converter': typeof initNumberConverter !== 'undefined' ? initNumberConverter : () => { },
        'typing-speed-tester': typeof initTypingSpeedTester !== 'undefined' ? initTypingSpeedTester : () => { },
        'snake-game': typeof initSnakeGame !== 'undefined' ? initSnakeGame : () => { },
        'spot-the-difference': typeof initSpotTheDifference !== 'undefined' ? initSpotTheDifference : () => { },
        'whack-a-mole': typeof initWhackaMole !== 'undefined' ? initWhackaMole : () => { },
    };
    
    if (initializers[projectName]) {
        initializers[projectName]();
    }
}

//Removed Redundant game and project Logics and seperated them to different individual files located at (web-app/js/projects/)

// ============================================================================
// ARCHITECTURAL NOTE: INDIVIDUAL PROJECT MODULES
// ============================================================================
// All specific HTML templates, inline CSS styles, and interactive game/tool 
// logic have been extracted from this registry file to enforce a clean, 
// modular design patterns.
//
// If you are looking to modify, fix, or understand how a specific project works:
// 1. Do NOT add game logics, event listeners, or variables to this file.
// 2. Open the dedicated script file under the 'js/projects/' directory.
//    - e.g., For Rock Paper Scissors, see: js/projects/rock-paper-scissor.js
//    - e.g., For FLAMES, see: js/projects/flames.js
//    - e.g., For the Calculator, see: js/projects/calculator.js
//
// Each individual script file globally registers exactly two hooks:
//    - get[ProjectName]HTML() : Returns the structural layout and specific styles.
//    - init[ProjectName]()    : Sets up localized states, scopes, and event listeners.
// ============================================================================