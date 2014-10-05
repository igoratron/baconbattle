define(function(require) {
    "use strict";

    var Lazy = require('lazy'),
        Board = require('core/board');

    var Game = function(board, strips) {
        this.board = board;
        this.strips = strips;
    };

    Game.prototype = {
        start: function() {
        },

        stripHasEnoughSpace: function(x, y, direction, stripLength) {
            var self = this;
            var stripPositions = Lazy
                .range(0, stripLength)
                .map(curry(positionTransform, x, y, direction));

            var hasInvalidPositions = stripPositions.any(function(position) {
                return ! self.board.isInside(position.x, position.y);
            });

            if(hasInvalidPositions) {
                return false;
            }

            var stripArea = Lazy
                .range(-1, stripLength + 1)
                .map(curry(positionTransform, x, y, direction))
                .map(function(position) {
                    var perpendicular =  direction ^ 1;
                    return [
                        positionTransform(position.x, position.y, perpendicular, -1),
                        position,
                        positionTransform(position.x, position.y, perpendicular, 1),
                    ];
                })
                .flatten();

            var areaContainsStrips = stripArea.any(function(position) {
                return self.board.isSet(position.x, position.y);
            });

            return ! areaContainsStrips;
        }
    };

    function positionTransform(x, y, direction, offset) {
        if(direction === Board.DIRECTION.HORIZONTAL) {
            return {
                x: x + offset,
                y: y
            };
        }
        return {
            x: x,
            y: y + offset
        };
    }

    function curry(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            var additionalArgs = Array.prototype.slice.call(arguments);
            return fn.apply(null, args.concat(additionalArgs));
        };
    }

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return Game;
});