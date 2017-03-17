var transition3State = {
    pictureA: '',
    song: '',
    create: function() {
        console.log("State: transition3");
        this.pictureA = game.add.sprite(0, 0, 'tofishdream');

        this.song = game.add.audio('glu');
        this.song.play();

        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },
    start: function(){
        game.state.start('dreamfish');
    }
};
