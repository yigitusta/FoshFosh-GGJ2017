var bootState = {
    create: function() {
        console.log("State: boot");
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    }

};