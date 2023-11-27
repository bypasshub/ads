 
        // Get the overlay and popup elements
        var overlay = document.getElementById('overlay');
        var popup = document.getElementById('popup');

        // Display the overlay
        overlay.style.display = 'flex';

        // Function to update the timer and status
        function updatePopup(timer) {
            var timerElement = document.getElementById('timer');
            var statusElement = document.getElementById('status');

            if (timer > 0) {
                // Update the timer and status dynamically
                timerElement.textContent = timer + ' seconds';

                if (timer <= 15) {
                    statusElement.textContent = timer <= 5 ? 'Almost done' : 'Generating links';
                }

                // Update every second
                setTimeout(function () {
                    updatePopup(timer - 1);
                }, 1000);
            } else {
                // Display the final message
                timerElement.textContent = 'Now you can use the links on the page';
                statusElement.textContent = 'Done!';
                // Allow the user to close the popup after 3 seconds
                setTimeout(function () {
                    overlay.style.display = 'none';
                }, 4000);
            }
        }

        // Start the timer with a 20-second duration
        updatePopup(20);

        // Disable the ability to close the popup by clicking on the overlay
        overlay.addEventListener('click', function (event) {
            event.stopPropagation();
        });
 
