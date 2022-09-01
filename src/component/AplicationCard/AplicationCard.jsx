import React, {Component} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import TextEditor from "../TextEditor/TextEditor";
import './AplicationCard.scss';

class AplicationCard extends Component{
    render(){
        return(
            <div className="container">
                <div className="bg-app-card">
                    <DescriptionCard
                        title='An Application'
                        pText='Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.'/>
                    <TextEditor/>
                </div>
            </div>
        )
    }
}

export default AplicationCard;