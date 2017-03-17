var collectfishState = {

    basket: '',
    player: '',
    cursors: '',
    fishes: '',
    score: 0,
    scoreText: '',
    livesText: '',
    lives: 3,
    waves: [],
    hit: '',
    hit1: '',
    hit2: '',
    turn: true,
    song: '',
    collect: '',
    create: function()
    {
        console.log("State: collectfish");
        game.stage.backgroundColor = "#4488AA";
        game.add.sprite(0, 0, 'skybox');

        this.waves[0] = game.add.sprite(-100, game.world.height - 347, '1');
        this.waves[1] = game.add.sprite(-100, game.world.height - 200, '3');
        this.waves[2] = game.add.sprite(-100, game.world.height - 200, '2');

        this.player = game.add.sprite(game.world.width / 2 - 100, game.world.height - 133, 'player');
        this.basket = game.add.sprite(this.player.x, this.player.y - 1, 'basket');

        this.hit = game.add.audio('hit');
        this.hit1 = game.add.audio('hit1');
        this.hit2 = game.add.audio('hit2');
        this.hit1.volume -= 0.4;

        this.song = game.add.audio('bgm');
        this.song.play();

        this.collect = game.add.audio('collect');

        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.basket);
        game.physics.arcade.enable(this.waves[0]);
        game.physics.arcade.enable(this.waves[1]);
        game.physics.arcade.enable(this.waves[2]);

        this.player.body.collideWorldBounds = true;
        this.basket.body.collideWorldBounds = true;

        this.player.body.immovable = true;
        //basket.body.immovable = true;

        this.fishes = game.add.group();

        //  We will enable physics for any fish that is created in this group
        this.fishes.enableBody = true;

        game.time.events.repeat(Math.floor(Phaser.Timer.SECOND / 3 * 2), 1000, this.timerAction, this);

        this.scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#014161' });
        this.livesText = game.add.text(game.world.width - 100, 16, 'Lives: 3', { fontSize: '24px', fill: '#014161' });
        this.scoreText.font = this.livesText.font = 'Indie Flower';

        this.cursors = game.input.keyboard.createCursorKeys();

        this.moveWaves();
    },

    update: function()
    {
        game.physics.arcade.collide(this.player, this.basket);
        game.physics.arcade.collide(this.fishes);
        game.physics.arcade.overlap(this.basket, this.fishes, this.collectFish, null, this);
        game.physics.arcade.collide(this.player, this.fishes, this.loseLife, null, this);
        this.player.body.velocity.x = this.basket.body.velocity.x = 0;
        if (this.cursors.left.isDown)
            this.basket.body.velocity.x = this.player.body.velocity.x = -300;
        else if (this.cursors.right.isDown)
            this.player.body.velocity.x = this.basket.body.velocity.x = 300;
        if (this.basket.x <= 0) {
            this.player.body.velocity.x = this.basket.body.velocity.x = 0;
            this.player.x++;
            this.basket.x++;
        }
        else if(this.basket.x + 200 >= 800)
        {
            this.player.body.velocity.x = this.basket.body.velocity.x = 0;
            this.player.x--;
            this.basket.x--;
        }

        for (var i = 0; i < 3; i++)
        {
            if (this.waves[i].x > 0)
            {
                this.waves[i].x = -1;
                this.waves[i].body.velocity.x *= -1;
            }
            else if ( this.waves[i].x < -100)
            {
                this.waves[i].x = -99;
                this.waves[i].body.velocity.x *= -1;
                if (i == 1)
                    console.log("waves " + i + " " + this.waves[i].x + " " + this.waves[i].body.velocity.x);
            }
        }
    },

    createFish: function() {
    //  Create a fish inside of the 'fishes' group
    //  Create a fish inside of the 'fishes' groupgame.load.image('fish1', 'assets/fish1.png'); game.load.image('fish2', 'assets/fish2.png'); game.load.image('fish3', 'assets/fish3.png'); game.load.image('fish4', 'assets/fish4.png');
    var fish;
    switch (Math.floor(Math.random() * 8) + 1) {
        case 1:
            fish = this.fishes.create(0, Math.floor(Math.random() * 200), 'fish1');
            fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
            break;
        case 2:
            fish = this.fishes.create(0, Math.floor(Math.random() * 200), 'fish2');
            fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
            break;
        case 3:
            fish = this.fishes.create(0, Math.floor(Math.random() * 200), 'fish3');
            fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
            break;
        case 4:
            fish = this.fishes.create(800, Math.floor(Math.random() * 200), 'fish1');
            fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
            break;
        case 5:
            fish = this.fishes.create(800, Math.floor(Math.random() * 200), 'fish2');
            fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
            break;
        case 6:
            fish = this.fishes.create(800, Math.floor(Math.random() * 200), 'fish3');
            fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
            break;
        case 7:
            fish = this.fishes.create(800, Math.floor(Math.random() * 200), 'fish4');

            fish.body.velocity.x = (-Math.random() * 150 - 100) * 1.2;
            break;
        default:
            fish = this.fishes.create(0, Math.floor(Math.random() * 200), 'fish4');
            fish.body.velocity.x = (Math.random() * 150 + 100) * 1.2;
        }
        fish.body.bounce.y = 0.3 + Math.random() * 0.5;
        fish.body.gravity.y = 300;
        fish.events.onOutOfBounds.add(this.deleteFish, this);
        fish.checkWorldBounds = true;
        fish.collideWorldBounds = true;
        //  This just gives each fish a slightly random bounce value
        //fish.body.bounce.y = 0.7 + Math.random() * 0.2;

    },

    deleteFish: function(fish){
        this.score -= 1;
        this.scoreText.text = 'Score: ' + this.score;
        fish.kill();
    },

    collectFish: function(basket, fish) {
        this.collect.play();
        fish.kill();
        this.score += 1;
        this.scoreText.text = 'Score: ' + this.score;
    },

    loseLife: function()
    {
        this.lives -= 1;
        this.livesText.text = 'Lives: ' + this.lives;
        this.hit.play();
        if (this.turn)
            this.hit1.play();
        else
            this.hit2.play();
        this.turn = !this.turn;
        if (this.lives === 0){
            game.state.start('transition1');
            this.song.stop();
        }
    },

    timerAction: function()
    {
        this.createFish();
    },

    moveWaves: function()
    {
        for (var i = 0; i < 3; i++) {
            this.waves[i].body.velocity.x = Math.floor((Math.random() * 30 + 20));
            if (i == 2)
                this.waves[2].body.velocity.x *= - 1;
        }

    }

};