'use strict';

$(document).ready(function() {
  setTimeout(function() {
    $("body").removeClass("hidden");
  }, 0);
	setTimeout(()=>{
		$("#title").removeClass("foo");
    $("div").removeClass("unload");
	}, 1000);
});
