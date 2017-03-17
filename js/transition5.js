var transition5State = {
    pictureA: '',

    create: function() {
        console.log("State: transition5");
        this.pictureA = game.add.sprite(0, 0, 'tobasketdream');
        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },
    start: function(){
        game.state.start('dreambasket');
    }
};
