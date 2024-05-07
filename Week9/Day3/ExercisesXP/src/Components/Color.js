//EXERCISE 2 and 3: Lifecycle

import React from 'react';

//Color component maintains state and handles interactions
class Color extends React.Component {
    constructor() {
        super();
        //Initialize state with favoriteColor and show flags
        this.state = {
            favoriteColor: 'red',
            show: true,
        };
    }

    //Determines whether the component should update based on changes
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //Return true if you want to allow updates, false otherwise
        return true;  // Return false if you want to prevent updates

        //Return false here for part 1-2 if you want to prevent updates
        //return false;
    }

    //Called after component updates; logs previous props and state
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    //Called before component updates; logs previous props and state
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    //Changes the favorite color to blue when the button is clicked
    changeFavoriteColorToBlue = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    //Handles the deletion of the child component
    deleteButtonHandler = () => {
        this.setState({ show: false });
    };

    //Renders the component
    render() {
        return (
            <>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeFavoriteColorToBlue}>
                    Change Favorite Color
                </button>
                {this.state.show ? (
                    <Child deleteButtonHandler={this.deleteButtonHandler} />
                ) : (
                    //Render an empty fragment if show is false
                    <></>
                )}
            </>
        );
    }
}

export default Color;

//Child component that receives a delete button handler from parent
class Child extends React.Component {
    //Lifecycle method called before component unmounts
    componentWillUnmount() {
        console.log('componentWillUnmount ', this);
        //Alert the user that the Child component is about to be unmounted
        alert('The component named Child is about to be unmounted');
    }

    //Renders the child component
    render() {
        const { deleteButtonHandler } = this.props;
        return (
            <>
                <h1>Hello, World!</h1>
                <button onClick={deleteButtonHandler}>Delete Header</button>
            </>
        );
    }
}

