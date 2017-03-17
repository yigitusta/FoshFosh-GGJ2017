var dreambasketState = {
    fishes: '',
    waves: [],
    hit: '',
    turn: true,
    water: '',
    cursors: '',
    portal_gun: '',
    player: '',
    jumpcount: 0,
    jumpkey: '',
    song: '',
    create: function()
    {
        console.log("State: dreambasket");
        game.add.sprite(0, 0, 'dream_bg');

        this.fishes = game.add.group();
        this.platforms = game.add.group();

        this.platforms.enableBody = true;

        var platform = this.platforms.create(0, 75, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(450, 100, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(300, 150, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(600, 200, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(200, 300, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(500, 350, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(100, 500, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(600, 500, 'platform');
        platform.body.immovable = true;
        platform = this.platforms.create(400, 500, 'platform');
        platform.body.immovable = true;
        this.portal_gun = game.add.sprite(650, 50, 'star');
        game.physics.arcade.enable(this.portal_gun);
        this.player = game.add.sprite(game.world.width / 2 - 43, 400, 'basket');
        game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;
        this.fishes.enableBody = true;

        this.song = game.add.audio('bgm2');
        this.song.play();

        game.time.events.repeat(Math.floor(Phaser.Timer.SECOND / 3 * 2), 1000, this.timerAction, this);

        this.cursors = game.input.keyboard.createCursorKeys();
        this.water = game.add.sprite(0, 600, 'tsunami');
        game.physics.arcade.enable(this.water);
        this.water.body.velocity.y = -40;
    },

    update: function()
    {
        game.physics.arcade.collide(this.player, this.platforms);
        //game.physics.arcade.collide(this.player, this.fishes);
        //game.physics.arcade.collide(this.player, this.portal_gun);
        game.physics.arcade.overlap(this.player, this.portal_gun, this.finish, null, this);
        this.player.body.velocity.x = 0;

        if(this.water.y <= 0){
            this.water.body.velocity.y = 0;
        }

        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -150;
            //animation here
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 150;
            //animatin here
        }//else animation stop etc.
        var onTheGround = this.player.body.touching.down || this.player.y >= game.world.height - this.player.body.height;

        if (onTheGround) {
            this.jumps = 2;
            this.jumping = false;
        }
        if (this.jumps > 0 && this.upInputIsActive(5)) {
            this.player.body.velocity.y = -230;
            this.jumping = true;
        }

        if (this.jumping && this.upInputReleased()) {
            this.jumps--;
            this.jumping = false;
        }

        if (this.player.y >= this.water.y)
            this.restart();
    },

    createFish: function() {
        var fish;
        switch (Math.floor(Math.random() * 15) + 1) {
            case 1:
                fish = this.fishes.create(0, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
                break;
            case 2:
                fish = this.fishes.create(0, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
                break;
            case 3:
                fish = this.fishes.create(0, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
                break;
            case 4:
                fish = this.fishes.create(800, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
                break;
            case 5:
                fish = this.fishes.create(800, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
                break;
            case 6:
                fish = this.fishes.create(800, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
                break;
            case 7:
                fish = this.fishes.create(800, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
                break;
            default:
                fish = this.fishes.create(0, Math.floor(Math.random() * 500), 'player2');
                fish.scale.setTo(0.5 , 0.5);
                fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
            }
        fish.body.bounce.y = 0.3 + Math.random() * 0.5;
        fish.events.onOutOfBounds.add(this.deleteFish, this);
        fish.checkWorldBounds = true;
        fish.collideWorldBounds = true;
    },

    deleteFish: function(fish){
        fish.kill();
    },

    timerAction: function()
    {
        this.createFish();
    },

    finish: function () {
        this.song.stop();
        game.state.start('credits');
    },
    upInputIsActive: function(duration) {
        var isActive = false;
        isActive = game.input.keyboard.downDuration(Phaser.Keyboard.UP, duration);

        return isActive;
    },
    upInputReleased: function() {
        var released = false;

        released = game.input.keyboard.upDuration(Phaser.Keyboard.UP);
        return released;
    },
    restart: function(){
        this.song.stop();
        game.state.start('dreambasket');
    }
};