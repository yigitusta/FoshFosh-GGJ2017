var transition1State = {
    pictureA: '',
    song: '',
    create: function() {
        console.log("State: transition1");
        this.pictureA = game.add.sprite(0, 0, 'todream');

        this.song = game.add.audio('glu');
        this.song.play();

        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },

    start: function(){
        game.state.start('dream');
    }
};