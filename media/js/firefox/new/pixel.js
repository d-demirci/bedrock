/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // pixel status bug https://bugzilla.mozilla.org/show_bug.cgi?id=1311423
    function addPixel() {
        if (!window._dntEnabled()) {
            var $pixel = $('<img />', {
                width: '1',
                height: '1',
                src: 'https://ad.doubleclick.net/ddm/activity/src=6417015;type=deskt0;cat=mozil0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?&_dc_ck=try'
            });
            $('body').append($pixel);
        }
    }

    addPixel();

})();
