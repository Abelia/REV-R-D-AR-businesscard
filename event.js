AFRAME.registerComponent('markerhandler', {

    init: function () {
        const animatedMarker = document.querySelector("#animated-marker");
        // DOM elements containing each employee
        const employees = document.querySelectorAll(".employee");

        // every click, we make we change the visible model
        document.addEventListener('touchstart', function (ev, target) {

            // KNOWN ISSUE on AFRAME/AR.js -> events get fired 2 times if clicked on animated-marker, so we have to check if clicked element is canvas to only handle these events.
            if (!ev.target.classList.contains('a-canvas')) return;

            // Class visible is only used to query Selector active item
            // Retrieve actual visible item/employee
            let visibleItem = animatedMarker.querySelector('.visible');

            // Get the index of the visible employee, this will help retrieving the next employee by index.
            let index = -2;
            employees.forEach((item, id) => {
                if (item === visibleItem) {
                    index = id;
                }
            })

            // Find next employee to display: if actual employee is the last of the list -> get the first one.
            let nextItemId = 0;
            if (index !== employees.length - 1) nextItemId = index + 1;

            // Toggle classes and visibility for both employees => actual visible item gets hidden, and next item gets visible
            visibleItem.classList.remove('visible');
            visibleItem.setAttribute('visible', false);
            const nextItem = employees[nextItemId];
            nextItem.classList.add('visible');
            nextItem.setAttribute('visible', true);
        });
    }
});

var blink_speed = 500; // every 1000 == 1 second, adjust to suit
var blink_end = 10000;
setInterval(function () {
    var ele = document.querySelector('.blinking');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

setTimeout(function () {
    var ele = document.querySelector('.blinking');
    ele.style.opacity = '0';
}, blink_end);

window.addEventListener('load', function () {
    console.log("//////////EVERYTHING HAS LOADED////////////////")
    var ele = document.querySelector('.loading');
    ele.style.visibility = 'hidden';
    ele.style.height = '0vh';
})
