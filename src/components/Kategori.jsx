import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import "./Kategori.css";

export default class Kategori extends React.Component{
    constructor(props){
        super(props);
        this.state={percentage: 60, terkonfirmasi: 0, dirawat: 0, meninggal: 0, sembuh: 0};
    }

    async componentDidMount(){
        let response = await fetch('https://mocki.io/v1/8a02e535-8053-49e6-a8d2-c0a06928dd1b');
        let data = await response.json();
        var statewise = data.statewise[0];
        var konfirmasi = statewise.terkonfirmasi;
        this.setState({terkonfirmasi:konfirmasi});
        this.setState({
            dirawat:statewise.dirawat, 
            meninggal: statewise.meninggal, 
            sembuh: statewise.sembuh});

        console.log(statewise);
    }
    render(){
        return(
        <div>
            <div>
                <span style= {{ color: "gray" }} className="circle">
                    DIRAWAT: {this.state.dirawat}</span>
                <span style= {{ color: "red" }} className="circle">
                    MENINGGAL: {this.state.meninggal}</span>
                <span style= {{ color: "green" }} className="circle">
                    SEMBUH: {this.state.sembuh}</span>
            </div>
        </div>
        );
    }
       
}