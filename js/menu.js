var menuState = {
    create: function () {
        console.log("State: menu");

        game.add.sprite(0, 0, 'startscreen');

        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },

    start: function(){
        game.state.start('collectfish');
    }
};