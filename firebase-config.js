// 🎄 КОНФИГУРАЦИЯ FIREBASE ДЛЯ НОВОГОДНЕЙ ИГРЫ
// Версия v5.3.5 - ПОЛНАЯ РАБОЧАЯ ВЕРСИЯ

// 🔥 FIREBASE КОНФИГУРАЦИЯ
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDVAchLp0xaAqF79A3R36EhrcN_nKDTdyg",
    authDomain: "christmas-game-2025.firebaseapp.com", 
    databaseURL: "https://christmas-game-2025-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "christmas-game-2025",
    storageBucket: "christmas-game-2025.firebasestorage.app",
    messagingSenderId: "853797406884",
    appId: "1:853797406884:web:28cdec8fca73946992be31"
};

// 🔑 ИГРОВЫЕ НАСТРОЙКИ
const GAME_ACCESS_CODE = "ChristmasGame2025!";
const GAME_SETTINGS = {
    maxGameTime: 30 * 60 * 1000, // 30 минут в миллисекундах
    hintPenalty: 10, // Штраф за подсказку в очках
    easyTaskPoints: 10, // Очки за легкое задание
    mediumTaskPoints: 20, // Очки за среднее задание
    hardTaskPoints: 30, // Очки за сложное задание
    timeBonus: true, // Бонус за скорость
    timeBonusThreshold: 15 * 60 * 1000 // Бонус если завершено за 15 минут
};

// 🎮 НАСТРОЙКИ ДЛЯ РЕЗУЛЬТАТОВ
const RESULTS_CONFIG = {
    tableName: 'gameResults', // Название таблицы в Firebase
    autoSort: true, // Автоматическая сортировка по рейтингу
    maxResults: 100, // Максимальное количество результатов для хранения
    anonymizeData: false // Анонимизировать данные игроков
};

// 📊 НАСТРОЙКИ СТАТИСТИКИ
const STATISTICS_CONFIG = {
    trackDifficultyStats: true, // Отслеживать статистику по сложности
    trackTimeStats: true, // Отслеживать статистику по времени
    trackHintStats: true, // Отслеживать статистику по подсказкам
    calculateRatings: true // Рассчитывать рейтинг
};

// 🔗 GITHUB ИНТЕГРАЦИЯ
const GITHUB_CONFIG = {
    defaultOwner: 'fancifulaction-rgb',
    defaultRepo: 'christmas_game',
    autoSaveEnabled: true, // Автосохранение изменений
    backupEnabled: true, // Создание резервных копий
    validationEnabled: true // Валидация данных перед сохранением
};

// 🌐 ДОСТУПНОСТЬ ГЛОБАЛЬНО
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.GAME_ACCESS_CODE = GAME_ACCESS_CODE;
window.GAME_SETTINGS = GAME_SETTINGS;
window.RESULTS_CONFIG = RESULTS_CONFIG;
window.STATISTICS_CONFIG = STATISTICS_CONFIG;
window.GITHUB_CONFIG = GITHUB_CONFIG;

console.log('🎄 Firebase конфигурация загружена - v5.3.5 ПОЛНАЯ РАБОЧАЯ ВЕРСИЯ');