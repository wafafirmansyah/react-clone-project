import React, {Component} from "react";
import Hero from "../component/Hero/Hero";
import '../index.css';
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import SimpleComponentCard from "../component/SimpleComponentCard/SimpleComponentCard";
import StatefullComponentCard from "../component/StatefullComponentCard/StatefullComponentCard";
import AplicationCard from "../component/AplicationCard/AplicationCard";
import PluginCard from "../component/PluginCard/PluginCard";
import Layout from "../component/Layout/Layout";

class Home extends Component {
    render(){
        return(
                <Layout>
                    <Hero/>
                    <DescriptionBox/>
                    <SimpleComponentCard/>
                    <StatefullComponentCard/>
                    <AplicationCard/>
                    <PluginCard/>
                </Layout>
        )
    }
}

export default Home;