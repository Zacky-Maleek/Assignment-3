import React from 'react';

export default class Provinsi extends React.Component{

    constructor(props){
        super(props);
        this.state={data:[]};
    }

    async componentDidMount(){
        let response = await fetch('https://mocki.io/v1/8a02e535-8053-49e6-a8d2-c0a06928dd1b');
        let data = await response.json();
        var statewise = data.statewise;
        this.setState({data: statewise});
            
        console.log(statewise);
    }

    render(){
          var data = this.state.data;
        return(
        <div>
            <table className= "table table-bordered table-striped mb-0">
              <thead>
                <tr>
                    <th scope="col">PROVINSI</th>
                    <th scope="col">TERKONFIRMASI</th>
                    <th scope="col">DIRAWAT</th>
                    <th scope="col">SEMBUH</th>
                    <th scope="col">MENINGGAL</th>
                </tr>
              </thead>
              <tbody>
                  {data.map(element => (
                    <tr>
                     <td>{element.provinsi}</td>
                     <td>{element.terkonfirmasi}</td>
                     <td>{element.dirawat}</td>
                     <td>{element.sembuh}</td>
                     <td>{element.meninggal}</td>
                   </tr>  
                  ))}
              </tbody>
            </table>
            
        </div>

        );
    }
}