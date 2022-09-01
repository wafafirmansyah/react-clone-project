import React, {Component} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import TextEditor from "../TextEditor/TextEditor";
import './PluginCard.scss';

class PluginCard extends Component{
    render(){
        return(
            <div className="container">
                <div className="bg-plugin-card">
                    <DescriptionCard
                        title='a Component Using External Plugins'
                        pText='React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.'/>
                    <TextEditor/>
                </div>
            </div>
        )
    }
}

export default PluginCard;