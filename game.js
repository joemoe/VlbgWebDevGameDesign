var game = new Phaser.Game(800, 450, Phaser.CANVAS, 'game');

var VWDGame = function(game) {
	//defining vars
	this.game = game;
}

VWDGame.prototype = {
	//the game prototype
	
	init: function() {
		//everything that should be done to init phaser comes in here

		console.log('VWDGame inited');
	},

	preload: function() {
		//preload stuff you may need one time

		this.load.baseURL = "http://localhost/p04-Phaser-VlbgWebDev/";

		console.log('VWDGame preloaded');
	},

	create: function() {
		//create sprites for the game


		console.log('VWDGame created');
	},

	update: function() {
		//move, collide, do what ever happens

		console.log('VWDGame updated');
	},

	success: function() {
	}
}

game.state.add('Game', VWDGame, true);

console.log('VWDGame ready');