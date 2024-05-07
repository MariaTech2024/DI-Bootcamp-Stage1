import React from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, errorDetails }) {
    // If the modal is not open, don't render anything
    if (!isOpen) {
        return null;
    }

    return (
        // Modal background div, used to capture clicks and close the modal
        <div className="modal-background" onClick={onClose}>
            // Modal body div, prevents event propagation to the background
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                // Error message header
                <h3>Error: something went wrong!</h3>
                
                // Details element to display error details
                <details>
                    // Summary text for the details
                    <summary>Details</summary>
                    
                    // List of error details
                    <ul>
                        // Iterate through errorDetails array and render each error as a list item
                        {errorDetails.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </details>
                
                // Suggestion for the user
                <p>Please try it again.</p>
                
                // Close button to close the modal
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

// Define the expected prop types for the Modal component
Modal.propTypes = {
    // isOpen should be a boolean indicating if the modal is open
    isOpen: PropTypes.bool.isRequired,
    // onClose should be a function that closes the modal
    onClose: PropTypes.func.isRequired,
    // errorDetails should be an array of strings with the error messages
    errorDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;