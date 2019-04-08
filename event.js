AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        // DOM elements containing each employee
        const employees = document.querySelectorAll(".employee");

        // every click, we make we change the visible model
        document.addEventListener('touch click', function(ev, target){
            
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