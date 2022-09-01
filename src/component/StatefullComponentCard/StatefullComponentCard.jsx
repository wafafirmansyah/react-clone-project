import React, {Component} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import TextEditor from "../TextEditor/TextEditor";
import './StatefullComponentCard.scss';

class StatefullComponentCard extends Component{
    render(){
        return(
            <div className="container">
                <div className="bg-statefull-card">
                    <DescriptionCard
                        title='A Statefull Component'
                        pText='In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().'/>
                    <TextEditor/>
                </div>
            </div>
        )
    }
}

export default StatefullComponentCard;