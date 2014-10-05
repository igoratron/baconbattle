define(['core/board'], function(Board) {
    "use strict";

    describe('Board', function() {
        var board;

        beforeEach(function() {
            board = new Board(10, 10);
        });

        it('sets and gets the values', function() {
            board.setAt(5, 5, 'some value');
            expect(board.getAt(5, 5)).toBe('some value');
        });

        it('checks if a point is inside the boundaries', function() {
            expect(board.isInside(5,5)).toBe(true);
        });

        it('checks if a point is outside the boundaries', function() {
            expect(board.isInside(10, 10)).toBe(false);
        });

        it('checks if a position outside the boundaries has a value', function() {
            expect(board.isSet(11, 23)).toBe(false);
        });

    });
});