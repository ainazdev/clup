

import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";

$('.mobileNavToggle').on('click', function(){
    var $this = $(this);

    $this.toggleClass('is-active');
})