var transition4State = {
    background: '',
	song: '',
    create: function() {
        console.log("State: transition4");
        this.background = game.add.sprite(0, 0, 'tocollectfish2');

        this.song = game.add.audio('alien');
        this.song.play();

        var startkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        startkey.onDown.addOnce(this.start, this);
    },

    start: function(){
        game.state.start('collectfish2');
    }
};