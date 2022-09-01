import React, {Component} from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import './DescriptionBox.scss'; 

class DescriptionBox extends Component {
    render(){
        return(
            <div className="bg-box container">
                <div className="box">
                    <DescriptionCard 
                        title='Declarative' 
                        pText='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
                        p2Text='Declarative views make your code more predictable and easier to debug.'/>
                </div>
                <div className="box">
                    <DescriptionCard 
                        title='Component-Based'
                        pText='Build encapsulated components that manage their own state, then compose them to make complex UIs.'
                        p2Text='Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'/>
                </div>
                <div className="box">
                    <DescriptionCard 
                        title='Learn Once, Write Anywhere'
                        pText='We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
                        p2Text='React can also render on the server using Node and power mobile apps using React Native.'/>
                </div>
            </div>
        )
    }
}

export default DescriptionBox;