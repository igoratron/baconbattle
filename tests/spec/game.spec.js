define(function(require) {
    "use strict";

    var Game = require('core/game'),
        Board = require('core/board');

    describe('A game', function() {
        var game,
            board;

        beforeEach(function() {
            board = new Board(10, 10);
            game = new Game(board, []);
        });

        describe('#hasEnoughSpace', function() {

            it('checks if a strip can be placed at the left edge', function() {
                var hasEnoughSpace = game.stripHasEnoughSpace(0, 0, Board.DIRECTION.HORIZONTAL, 4);
                expect(hasEnoughSpace).toBe(true);
            });

            it('checks if a strip can be placed at the right edge', function() {
                var hasEnoughSpace = game.stripHasEnoughSpace(9, 0, Board.DIRECTION.HORIZONTAL, 4);
                expect(hasEnoughSpace).toBe(false);
            });

            it('checks if a strip can be placed at the top right edge vertically', function() {
                var hasEnoughSpace = game.stripHasEnoughSpace(9, 0, Board.DIRECTION.VERTICAL, 4);
                expect(hasEnoughSpace).toBe(true);
            });

            it('checks if a strip can be placed after another strip', function() {
                board.setAt(2, 2, 'some value');

                var hasEnoughSpace = game.stripHasEnoughSpace(2, 3, Board.DIRECTION.VERTICAL, 4);
                expect(hasEnoughSpace).toBe(false);
            });

            it('checks if a strip can be placed after another strip', function() {
                board.setAt(2, 7, 'some value');

                var hasEnoughSpace = game.stripHasEnoughSpace(2, 3, Board.DIRECTION.VERTICAL, 4);
                expect(hasEnoughSpace).toBe(false);
            });

            it('checks if a strip can be placed vertically next to another strip', function() {
                board.setAt(3, 3, 'some value');

                var hasEnoughSpace = game.stripHasEnoughSpace(2, 3, Board.DIRECTION.VERTICAL, 4);
                expect(hasEnoughSpace).toBe(false);
            });

            it('checks if a strip can be placed horizontally next to another strip', function() {
                board.setAt(3, 3, 'some value');

                var hasEnoughSpace = game.stripHasEnoughSpace(0, 2, Board.DIRECTION.HORIZONTAL, 4);
                expect(hasEnoughSpace).toBe(false);
            });
        });
    });
});