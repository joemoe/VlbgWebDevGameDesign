var game = new Phaser.Game(800, 450, Phaser.CANVAS, 'game');

var VWDGame = function(game) {
	//defining vars

}

VWDGame.prototype = {
	//the game prototype
	
	init: function() {
		//everything that should be done to init phaser comes in here

		console.log('VWDGame inited');
	},

	preload: function() {
		//preload stuff you may need one time

		console.log('VWDGame preloaded');
	},

	create: function() {
		//create sprites for the game

		console.log('VWDGame created');
	},

	update: function() {
		//move, collide, do what ever happens

		console.log('VWDGame updated');
	}
}

game.state.add('Game', VWDGame, true);

console.log('VWDGame ready');