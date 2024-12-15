if (Array.isArray(Game.Achievements)) {
    Game.Achievements.push({
        name: 'Super Cookie Maker',
        description: 'Zdobądź 1 bilion ciasteczek!',
        icon: 'path_to_icon.png',
        unlocked: function() {
            return Game.cookies >= 1000000000000; // Warunek: 1 bilion ciasteczek
        },
        unlockedFunc: function() {
            alert("Gratulacje! Zdobiles nowe osiągnięcie!");
        }
    });
}
