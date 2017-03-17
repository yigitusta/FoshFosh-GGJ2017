var creditsState = {
    background: '',
    text: '',
    song: '',
    create: function () {
        console.log("State: credits");
        this.background = game.add.sprite(0, 0, 'credits');
        this.text = game.add.sprite(game.world.centerX, game.world.height, 'credits2');
        this.song = game.add.audio('creditsong');
        this.song.play();
        this.text.anchor.set(0.5);
    },

    update: function () {
        this.text.y-= 1;
    }
};