require(['../../js/config'], function() {
    require.config({
        baseUrl: '../js/'
    });
    require([
        '../tests/spec/board.spec',
        '../tests/spec/game.spec',
    ], function() {
        window.executeTests();
    });
});
