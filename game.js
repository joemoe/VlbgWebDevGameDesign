var game = new Phaser.Game(450, 450, Phaser.CANVAS, 'game');

var VWDGame = function(game) {
	//defining vars
	this.game = game;
	this.bg = null;
	this.floor = null;
	this.cursors = null;
	this.platforms = null;
	this.cross = null;
}

VWDGame.prototype = {
	//the game prototype
	
	init: function() {
		//everything that should be done to init phaser comes in here

		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.startSystem(Phaser.Physics.ARCADE);

		console.log('VWDGame inited');
	},

	preload: function() {
		//preload stuff you may need one time

		this.load.baseURL = "http://localhost/p04-Phaser-VlbgWebDev/";

		this.load.image('bg', 'assets/bg.png');
		this.load.image('floor', 'assets/floor.png');
		this.load.image('player', 'assets/player.png');
		this.load.spritesheet('player-animation', 'assets/player-animation.png', 30, 60);
		this.load.image('platform', 'assets/platform.png');
		this.load.image('cross', 'assets/cross.png');

		console.log('VWDGame preloaded');
	},

	create: function() {
		//create sprites for the game

		this.world.setBounds(0, 0, 800, 450);

		this.bg = this.add.sprite(0, 0, 'bg');
		this.floor = this.add.sprite(0, 440, 'floor');
		this.platforms = this.add.group();
		this.cross = this.add.sprite(295, 160, 'cross');
		this.player = this.add.sprite(750, this.world.height - 70, 'player-animation');

		this.platforms.enableBody = true;

		var platform = this.platforms.create(280, 420, 'platform');
		platform.body.immovable = true;
		var platform = this.platforms.create(180, 350, 'platform');
		platform.body.immovable = true;
		var platform = this.platforms.create(330, 300, 'platform');
		platform.body.immovable = true;

		this.physics.arcade.enable(this.floor);
		this.physics.arcade.enable(this.player);
		this.physics.arcade.enable(this.platforms);
		this.physics.arcade.enable(this.cross);

		this.floor.body.immovable = true;
		this.cross.body.immovable = true;
		this.player.body.bounce.y = 0.2;
		this.player.body.gravity.y = 1000;
		this.player.body.collideWorldBounds = true;
		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);

		this.camera.follow(this.player);


		console.log('VWDGame created');
	},

	update: function() {
		//move, collide, do what ever happens

		this.physics.arcade.collide(this.player, this.floor);
		this.physics.arcade.collide(this.player, this.platforms);

		this.physics.arcade.overlap(this.player, this.cross, function(player, cross) { this.success(); }, null, this);



		this.player.body.velocity.x = 0;

	    if (this.cursors.left.isDown) {
	        this.player.body.velocity.x = -150;
	        this.player.animations.play('left');
	    } else if (this.cursors.right.isDown) {
	        this.player.body.velocity.x = 150;
	        this.player.animations.play('right');
	    } else {
	        this.player.animations.stop();
	        this.player.frame = 4;
	    }

	    if (this.cursors.up.isDown && this.player.body.touching.down) {
	        this.player.body.velocity.y = -400;
	    }

		console.log('VWDGame updated');
	},

	success: function() {
		this.cross.kill();
		var info = this.add.text(this.camera.x + 16, 16, 'score: 0', { fontSize: '12px', fill: '#000' });
		info.text = "Winner - with a broken leg.";
		this.game.paused = true;
	}
}

game.state.add('Game', VWDGame, true);

console.log('VWDGame ready');