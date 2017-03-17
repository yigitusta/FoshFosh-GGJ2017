var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('collectfish', collectfishState);
game.state.add('transition1', transition1State);
game.state.add('dream', dreamState);
game.state.add('transition2', transition2State);
game.state.add('collectman', collectmanState);
game.state.add('transition3', transition3State);
game.state.add('dreamfish', dreamfishState);
game.state.add('transition4', transition4State);
game.state.add('collectfish2', collectfish2State);
game.state.add('transition5', transition5State);
game.state.add('dreambasket', dreambasketState);
game.state.add('credits', creditsState);



game.state.start('boot');