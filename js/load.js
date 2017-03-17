var loadState = {
    preload: function(){
        console.log("State: load");
        var loadingLabel = game.add.text(80, 150, 'loading...',
            {font: '30px Courier', fill: '#ffffff'});

        game.load.image('startscreen', 'assets/start.png');

        game.load.image('skybox', 'assets/skybox.png');
        game.load.image('1', 'assets/1.png');
        game.load.image('2', 'assets/2.png');
        game.load.image('3', 'assets/3.png'); //waves

        game.load.image('player', 'assets/player.png');
        game.load.image('basket', 'assets/basket.png');

        game.load.image('todream', 'assets/todream.png');
        game.load.image('tofishdream', 'assets/tofishdream.png');
        game.load.image('tocollectman', 'assets/tocollectman.png');
        game.load.image('tocollectfish2', 'assets/tocollectfish2.png');
        game.load.image('tobasketdream', 'assets/tobasketdream.png');

        game.load.image('fish1', 'assets/fish1.png');
        game.load.image('fish2', 'assets/fish2.png');
        game.load.image('fish3', 'assets/fish3.png');
        game.load.image('fish4', 'assets/fish4.png');

        game.load.audio('hit', ['assets/catsesi.mp3', 'assets/catsesi.ogg']);
        game.load.audio('hit1', ['assets/krdskfamagldi.mp3', 'assets/krdskfamagldi.ogg']);
        game.load.audio('hit2', ['assets/kafamabiseygeldisesi.mp3', 'assets/kafamabiseygeldisesi.ogg']);
        game.load.audio('bgm', ['assets/bgm.mp3', 'assets/bgm.ogg']);
        game.load.audio('bgm2', ['assets/bgm2.mp3', 'assets/bgm2.ogg']);
        game.load.audio('alien', ['assets/alien.mp3', 'assets/alien.ogg']);
        game.load.audio('glu', ['assets/glu.mp3', 'assets/glu.ogg']);
        game.load.audio('collect', ['assets/collect.mp3', 'assets/collect.ogg']);
        game.load.audio('creditsong', ['assets/credits.mp3', 'assets/credits.ogg']);

        game.load.image('dream_bg', 'assets/dream_bg.png');
        game.load.image('platform', 'assets/platform.png');
        game.load.image('tsunami', 'assets/water_rising.png');
        game.load.image('portal_gun', 'assets/portal_gun.png');
        game.load.image('player2', 'assets/player2.png');
        game.load.image('portal_gun_screen', 'assets/portal_gun_screen.png');
        game.load.image('star', 'assets/star.png');

        game.load.image('credits', 'assets/credits.png');
        game.load.image('credits2', 'assets/credits2.png');
    },

    create: function (){
        game.state.start('menu');
    }
};