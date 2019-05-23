import React from 'react';
import ClothingButtons from './CategorizedButtons/ClothingButtons.js';
import DrinkButtons from './CategorizedButtons/DrinkButtons.js';
import SnackButtons from './CategorizedButtons/SnackButtons.js';
import FrozenButtons from './CategorizedButtons/FrozenButtons.js';


class ButtonLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    //Maybe put function call in curly braces.

    render() {
        console.log(this.props.activeTab);
        switch(this.props.activeTab) {
            case 0:
                return (
                    <div>
                        <ClothingButtons/>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <SnackButtons/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <DrinkButtons/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <FrozenButtons/>
                    </div>
                );
            default:
                return <div/>;
        }
    }
}

export default ButtonLoader;