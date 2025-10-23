// 🔥 КОНФИГУРАЦИЯ FIREBASE - НАСТРОЙТЕ ОДИН РАЗ!
// 
// ⚡ АВТОМАТИЧЕСКАЯ СИСТЕМА: Игроки ничего не настраивают!
// 📱 Все работает из коробки после сканирования QR-кода!

// =====================================================
// 📋 ПОШАГОВАЯ НАСТРОЙКА (выполните ОДИН раз):
// =====================================================

// 1. Создайте проект на https://console.firebase.google.com/
// 2. Добавьте Web App и скопируйте конфигурацию:
// 3. Ваши реальные данные уже внесены ниже:

const FIREBASE_CONFIG = {
    // 🔑 Ваш API ключ
    apiKey: "AIzaSyDVAchLp0xaAqF79A3R36EhrcN_nKDTdyg",
    
    // 🌐 Ваш домен
    authDomain: "christmas-game-2025.firebaseapp.com",
    
    // 🗄️ Ваш URL базы данных
    databaseURL: "https://christmas-game-2025-default-rtdb.europe-west1.firebasedatabase.app",
    
    // 🏷️ Ваш Project ID
    projectId: "christmas-game-2025",
    
    // 📦 Ваш Storage bucket
    storageBucket: "christmas-game-2025.firebasestorage.app",
    
    // 📧 Ваш Sender ID
    messagingSenderId: "853797406884",
    
    // 📱 Ваш App ID
    appId: "1:853797406884:web:28cdec8fca73946992be31"
};

// =====================================================
// ⚠️ ПРОВЕРКА НАСТРОЙКИ:
// =====================================================
if (FIREBASE_CONFIG.apiKey === "YOUR_API_KEY_HERE") {
    console.warn(
        "🔥 FIREBASE НЕ НАСТРОЕН!\n\n" +
        "📋 Следуйте инструкции в firebase-config.js\n" +
        "🎮 Игра будет работать в ЛОКАЛЬНОМ режиме\n" +
        "⚠️ Результаты НЕ будут синхронизироваться!"
    );
    
    // Режим для разработки/тестирования
    FIREBASE_CONFIG.enabled = false;
} else {
    // ✅ Firebase настроен корректно
    FIREBASE_CONFIG.enabled = true;
    console.log("✅ Firebase настроен корректно - система активирована!");
}

// =====================================================
// 📤 ЭКСПОРТ КОНФИГУРАЦИИ:
// =====================================================
window.FIREBASE_CONFIG = FIREBASE_CONFIG;