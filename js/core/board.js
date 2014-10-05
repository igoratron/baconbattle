define(function() {
    "use strict";

    var Board = function(width, height) {
        this.width = width;
        this.height = height;
        this._array = new Array(width * height);
    };

    Board.DIRECTION = {
        HORIZONTAL: 0,
        VERTICAL: 1
    };

    Board.prototype = {
        getAt: function(x, y) {
            return this._array[this.height * x + y];
        },

        setAt: function(x, y, value) {
            this._array[this.height * x + y] = value;
        },

        isSet: function(x, y) {
            return !! this.getAt(x, y);
        },

        isInside: function(x, y) {
            return (0 <= y && y < this.width) &&
                   (0 <= x && x < this.height);
        }
    };

    return Board;

});