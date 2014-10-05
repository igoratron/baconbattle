define(function(require) {
    'use strict';

    var Game = require('core/game'),
        Board = require('core/board');

    var BOARD = {
        width: 10,
        height: 10
    };

    return {
        start: function() {
            var strips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1],
                board = new Board(BOARD.width, BOARD.height),
                game = new Game(board, strips);

            game.start();
        }
    };
});