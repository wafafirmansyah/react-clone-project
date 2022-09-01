import React, {Component} from "react";
import DescriptionCard from "../component/DescriptionCard/DescriptionCard";
import SidebarLayout from "../component/Layout/SidebarLayout/SidebarLayout";

class Docs extends Component {
    render(){
        return(
            <SidebarLayout>
                <div className='main-comp container'>
                    <DescriptionCard title='(test getting started)'/>
                </div>
            </SidebarLayout>
        )
    }
}

export default Docs;