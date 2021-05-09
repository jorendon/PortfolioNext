import React, {useState,useEffect} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default function Table(props) {
    const [data, setData] = useState([]);

    const [day,setDay]=useState()

    function getData() {

        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                const newData =data.Countries.map((element)=>{
                    return{
                        country: element.Country,
                        nconfirmed:element.NewConfirmed,
                        ndeaths: element.NewDeaths,
                        nrecovered: element.NewRecovered,
                        tconfirmed: element.TotalConfirmed,
                        tdeaths: element.TotalDeaths,
                        trecovered: element.TotalRecovered
                    }

                })
                setData(newData)


            });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="card border-secondary mb-2 animate__animated animate__fadeInUp animate__slower"
             style={{minHeight: 550}}>
            <div className="card-header text-white">Covid 19 cases by countries</div>
            <div className="card-body text-center">
                <BootstrapTable
                    data={data}
                    pagination striped hover>
                    <TableHeaderColumn dataField='country' isKey>Country</TableHeaderColumn>
                    <TableHeaderColumn dataField='nconfirmed'>New Confirmed</TableHeaderColumn>
                    <TableHeaderColumn dataField='ndeaths'>New Deaths</TableHeaderColumn>
                    <TableHeaderColumn dataField='nrecovered'>New Recovered</TableHeaderColumn>
                    <TableHeaderColumn dataField='tconfirmed'>Total Confirmed</TableHeaderColumn>
                    <TableHeaderColumn dataField='tdeaths'>Total Deaths</TableHeaderColumn>
                    <TableHeaderColumn dataField='trecovered'>Total Recovered</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>

    );
}