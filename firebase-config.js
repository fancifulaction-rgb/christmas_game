// 🔥 КОНФИГУРАЦИЯ FIREBASE - PRODUCTION VERSION
// 
// ⚡ ПРОДАКШЕН С QR-КОД ЗАЩИТОЙ: Безопасная система для реального использования!
// 📱 Все работает автоматически после сканирования QR-кода!

// =====================================================
// 📋 ПОШАГОВАЯ НАСТРОЙКА:
// =====================================================

// Ваши реальные данные уже настроены ниже:
const FIREBASE_CONFIG = {
    // 🔑 API ключ
    apiKey: "AIzaSyDVAchLp0xaAqF79A3R36EhrcN_nKDTdyg",
    
    // 🌐 Домен аутентификации
    authDomain: "christmas-game-2025.firebaseapp.com",
    
    // 🗄️ URL базы данных
    databaseURL: "https://christmas-game-2025-default-rtdb.europe-west1.firebasedatabase.app",
    
    // 🏷️ ID проекта
    projectId: "christmas-game-2025",
    
    // 📦 Storage bucket
    storageBucket: "christmas-game-2025.firebasestorage.app",
    
    // 📧 Sender ID
    messagingSenderId: "853797406884",
    
    // 📱 App ID
    appId: "1:853797406884:web:28cdec8fca73946992be31"
};

// =====================================================
// 🔐 НАСТРОЙКА БЕЗОПАСНОСТИ:
// =====================================================

// 🔑 СЕКРЕТНЫЙ КОД ДОСТУПА (ОБЯЗАТЕЛЬНО ИЗМЕНИТЕ!)
const GAME_ACCESS_CODE = "ChristmasGame2025!";

// ⚠️ ПРОВЕРКА КОНФИГУРАЦИИ:
if (FIREBASE_CONFIG.apiKey === "YOUR_API_KEY_HERE") {
    console.error("🔥 FIREBASE НЕ НАСТРОЕН!");
    console.error("📋 Следуйте инструкции в firebase-config.js");
    
    // Для локальной разработки
    FIREBASE_CONFIG.enabled = false;
    FIREBASE_CONFIG.devMode = true;
} else {
    // ✅ Production готов!
    FIREBASE_CONFIG.enabled = true;
    FIREBASE_CONFIG.devMode = false;
    console.log("🎉 PRODUCTION MODE - Система защищена QR-кодом!");
}

// =====================================================
// 📤 ЭКСПОРТ:
// =====================================================
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.GAME_ACCESS_CODE = GAME_ACCESS_CODE;

// Для совместимости с тестами - enabled: true