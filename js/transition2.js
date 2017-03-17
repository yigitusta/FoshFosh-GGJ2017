var transition2State = {
    background: '',
	song: '',
    create: function() {
        console.log("State: transition2");
        this.background = game.add.sprite(0, 0, 'tocollectman');

        this.song = game.add.audio('alien');
        this.song.play();

        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },

    start: function(){
        game.state.start('collectman');
    }
};