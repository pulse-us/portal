(function() {
    'use strict';

    describe('prettyprint.filter', function() {
        var $log, $filter;

        beforeEach(function () {
            module('portal');
            inject(function(_$log_, _$filter_) {
                $log = _$log_;
                $filter = _$filter_;
            });
        });

        afterEach(function () {
            if ($log.debug.logs.length > 0) {
                //console.debug("\n Debug: " + $log.debug.logs.join("\n Debug: "));
            }
        });

        it('should HTML Encode "<" and ">"', function () {
            var xmlString = "<ccda version='1.1'>\n<item>1</item>\n<item>2</item>\n<item>3</item>\n</ccda>";
            var result = $filter('prettyprint')(xmlString);
            expect(result).not.toEqual(xmlString);
        });
    });
})();
