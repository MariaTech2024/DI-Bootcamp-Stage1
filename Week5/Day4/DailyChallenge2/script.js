//Daily challenge : Show only the letters

const inputField = document.getElementById('letter-input');

        // Event listener for the 'input' event
        inputField.addEventListener('input', function (e) {
            // Use a regular expression to remove non-letter characters
            const value = e.target.value;

            // Replace any non-letter characters with an empty string
            const filteredValue = value.replace(/[^a-zA-Z]/g, '');

            // Update the input value if it has changed
            if (value !== filteredValue) {
                e.target.value = filteredValue;
            }
        });