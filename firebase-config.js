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
  apiKey: "AIzaSyDYwGvVTXng1tuZ0ANT9Lngwboi32LCUxM",
  authDomain: "christmas-game-b1913.firebaseapp.com",
  databaseURL: "https://christmas-game-b1913-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "christmas-game-b1913",
  storageBucket: "christmas-game-b1913.firebasestorage.app",
  messagingSenderId: "715177004399",
  appId: "1:715177004399:web:b57c4300ab07e8a7512c9a"
};



// Экспорт конфигурации
window.FIREBASE_CONFIG = firebaseConfig;
