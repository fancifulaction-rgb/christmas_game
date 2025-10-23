// Конфигурация игры - ЦЕНТРАЛЬНЫЙ ФАЙЛ
// Этот файл загружается первым и управляет версионированием

const GAME_CONFIG = {
    // Версия игры (увеличивайте при каждом обновлении)
    version: '3.0.0',
    
    // Timestamp для принудительного обновления кэша
    timestamp: Date.now(),
    
    // GitHub настройки (заполняются из админ-панели)
    github: {
        username: 'fancifulaction-rgb',
        repo: 'christmas_game',
        branch: 'main'
    },
    
    // URL для загрузки данных (с автоматическим cache-busting)
    getDataUrl: function() {
        return `game-data.json?v=${this.version}&t=${this.timestamp}`;
    },
    
    getResultsUrl: function() {
        return `https://${this.github.username}.github.io/${this.github.repo}/results.json?t=${Date.now()}`;
    },
    
    // Проверка и обновление версии
    checkAndUpdate: function() {
        const savedVersion = localStorage.getItem('gameVersion');
        
        if (savedVersion !== this.version) {
            console.log(`🔄 Обновление: ${savedVersion || 'нет'} → ${this.version}`);
            
            // Сохраняем только настройки GitHub
            const githubSettings = localStorage.getItem('githubSettings');
            
            // Очищаем весь localStorage
            localStorage.clear();
            
            // Восстанавливаем настройки
            if (githubSettings) {
                localStorage.setItem('githubSettings', githubSettings);
            }
            
            // Сохраняем новую версию
            localStorage.setItem('gameVersion', this.version);
            
            // Очищаем Service Worker кэш если есть
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                });
            }
            
            return true; // Обновление произошло
        }
        
        return false; // Версия не изменилась
    }
};

// Немедленная проверка версии при загрузке
if (typeof window !== 'undefined') {
    GAME_CONFIG.checkAndUpdate();
}
