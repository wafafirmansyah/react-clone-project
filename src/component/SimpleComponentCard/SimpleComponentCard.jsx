import React, {Component} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import TextEditor from "../TextEditor/TextEditor";
import './SimpleComponentCard.scss';

class SimpleComponentCard extends Component {
    render(){
        return(
            <div className="container">
                <div className="bg-simple-card">
                    <DescriptionCard 
                        title='A Simple Component' 
                        pText='React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.' 
                        p2Text='JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'/>
                    <TextEditor/>
                </div>
            </div>
        )
    }
}

export default SimpleComponentCard;