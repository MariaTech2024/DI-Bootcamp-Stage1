//EXERCISE 1 : React Error Boundary Simulation
import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        //Initialize the state
        this.state = {
            error: null,        // Store the error object, if any
            errorInfo: "",      // Store additional error information
            hasError: false,    // Track whether an error has occurred
        };
    }

    //Lifecycle method to catch errors in child components
    componentDidCatch(error, errorInfo) {
        //Set the state with the error and errorInfo
        this.setState({
            error: error,
            errorInfo: errorInfo,
            hasError: true,
        });
    }

    render() {
        //If an error occurred, display a fallback UI
        if (this.state.hasError) {
            return (
                <div>
                    <h2>OOPS... Something went wrong!</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <summary>Error Details:</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        //If no error, render children components normally
        return this.props.children;
    }
}

export default ErrorBoundary;