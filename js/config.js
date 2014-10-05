(function() {
    "use strict";

    require.config({
        'paths': {
            'lazy': 'lib/lazy/lazy-7a9b0210d9'
        },
        'shim': {
            'lazy': {
                exports: 'Lazy'
            }
        }

    });
}());