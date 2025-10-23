// 🔥 ИНСТРУКЦИЯ ПО НАСТРОЙКЕ FIREBASE
// 
// 1. Создайте БЕСПЛАТНЫЙ проект Firebase:
//    - Перейдите на https://console.firebase.google.com/
//    - Нажмите "Добавить проект"
//    - Введите название проекта (например: "christmas-game")
//    - Отключите Google Analytics (не обязательно для игры)
//    - Нажмите "Создать проект"
//
// 2. Настройте Realtime Database:
//    - В меню слева выберите "Build" → "Realtime Database"
//    - Нажмите "Создать базу данных"
//    - Выберите регион (например: europe-west1)
//    - Режим безопасности: "Начать в тестовом режиме" (можно настроить позже)
//    - Нажмите "Включить"
//
// 3. Получите конфигурационные данные:
//    - Нажмите на иконку ⚙️ рядом с "Обзор проекта"
//    - Выберите "Настройки проекта"
//    - Прокрутите вниз до раздела "Ваши приложения"
//    - Нажмите на иконку </> (Web)
//    - Введите название приложения (например: "game-app")
//    - Скопируйте конфигурацию firebaseConfig
//
// 4. Вставьте ваши данные ниже:

const firebaseConfig = {
  // ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ!
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ❗ ВАЖНО: После настройки Firebase удалите этот блок проверки:
if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
  console.warn(
    "⚠️ Firebase не настроен! \n\n" +
    "Следуйте инструкциям в файле firebase-config.js для настройки облачного хранилища.\n\n" +
    "Сейчас приложение работает в ЛОКАЛЬНОМ режиме (localStorage).\n\n" +
    "Данные НЕ будут синхронизироваться между устройствами."
  );
}

// Экспорт конфигурации
window.FIREBASE_CONFIG = firebaseConfig;
