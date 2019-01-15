window.onscroll = function () {
   "use strict";
   if (window.scrollY >= 200 ) {
       document.getElementById('first-topbar').style.display = "none";
       document.getElementById('second-topbar').style.display = "flex";
    }
   else {
       document.getElementById('first-topbar').style.display = "flex";
       document.getElementById('second-topbar').style.display = "none";
   }
};