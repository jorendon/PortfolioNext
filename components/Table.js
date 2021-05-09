import React, {useState,useEffect} from 'react';
import {BootstrapTable, TableHeaderColumn,ExportCSVButton,SearchField  } from 'react-bootstrap-table';



export default function Table(props) {
   const handleExportCSVButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('This is my custom function for ExportCSVButton click event');
        onClick();
    }
  const  createCustomExportCSVButton = (onClick) => {
        return (
            <ExportCSVButton
                btnText='Down CSV'
                onClick={ () => handleExportCSVButtonClick(onClick) }/>
        );
    }
    const createCustomSearchField = (props) => {
        return (
            <SearchField
                className='my-custom-class'
                defaultValue=''
                placeholder='Input a country name'/>
        );
    }
    const options = {
        exportCSVBtn: createCustomExportCSVButton,
        searchField: createCustomSearchField
    };
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
                setDay(data.Date)



            });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="card border-secondary mb-2 animate__animated animate__fadeInUp animate__slower"
             style={{minHeight: 550}}>
            <div className="card-header text-white">Covid 19 cases by countries</div>
            <div className="card-body">
                <h3 className="text-white">Date:{day}</h3>
                <BootstrapTable
                    data={data}
                    pagination striped hover options={options} exportCSV search >
                    <TableHeaderColumn className="text-white" dataField='country' isKey>Country</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='nconfirmed'>New Confirmed</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='ndeaths'>New Deaths</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='nrecovered'>New Recovered</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='tconfirmed'>Total Confirmed</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='tdeaths'>Total Deaths</TableHeaderColumn>
                    <TableHeaderColumn className="text-white" dataField='trecovered'>Total Recovered</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>

    );
}