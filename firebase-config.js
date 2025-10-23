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

const firebaseConfig = {
  apiKey: "AIzaSyDVAchLp0xaAqF79A3R36EhrcN_nKDTdyg",
  authDomain: "christmas-game-2025.firebaseapp.com",
  databaseURL: "https://christmas-game-2025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "christmas-game-2025",
  storageBucket: "christmas-game-2025.firebasestorage.app",
  messagingSenderId: "853797406884",
  appId: "1:853797406884:web:28cdec8fca73946992be31"
};
 
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
