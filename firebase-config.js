// 🔥 КОНФИГУРАЦИЯ FIREBASE - НАСТРОЙТЕ ОДИН РАЗ!
// 
// ⚡ АВТОМАТИЧЕСКАЯ СИСТЕМА: Игроки ничего не настраивают!
// 📱 Все работает из коробки после сканирования QR-кода!

// =====================================================
// 📋 ПОШАГОВАЯ НАСТРОЙКА (выполните ОДИН раз):
// =====================================================

// 1. Создайте проект на https://console.firebase.google.com/
// 2. Добавьте Web App и скопируйте конфигурацию:
// 3. Замените все YOUR_... на реальные данные ниже:

const FIREBASE_CONFIG = {
    // 🔑 Замените на ваш API ключ
    apiKey: "YOUR_API_KEY_HERE",
    
    // 🌐 Замените на ваш домен
    authDomain: "your-project-id.firebaseapp.com",
    
    // 🗄️ Замените на ваш URL базы данных
    databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
    
    // 🏷️ Замените на ваш Project ID
    projectId: "your-project-id",
    
    // 📦 Замените на ваш Storage bucket
    storageBucket: "your-project-id.appspot.com",
    
    // 📧 Замените на ваш Sender ID
    messagingSenderId: "123456789",
    
    // 📱 Замените на ваш App ID
    appId: "1:123456789:web:abcdef123456"
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
}

// =====================================================
// 📤 ЭКСПОРТ КОНФИГУРАЦИИ:
// =====================================================
window.FIREBASE_CONFIG = FIREBASE_CONFIG;