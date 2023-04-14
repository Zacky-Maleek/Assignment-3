import React from "react";
import "./Main.css"
import Grafik from "../components/Kategori";
import Provinsi from "../components/Provinsi";


export default class Main extends React.Component{
    render(){
        return(
            <div>
            <div className="float-left header">
              <h2 style={{margin: "30px"}}>ANALISIS DATA COVID-19 INDONESIA</h2>
            </div>
            <div>
                <div>
                <Grafik></Grafik>
                </div>
                <Provinsi></Provinsi>
            </div>
            </div>
        );
    }
}