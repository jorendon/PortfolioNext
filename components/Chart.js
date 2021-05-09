import React, {FunctionComponent, useState, useEffect} from "react";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer} from "recharts";
import {scaleOrdinal} from "d3-scale";
import {schemeCategory10} from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();


export default function Chart(props) {
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
            y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
            x + width
        }, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const {fill, x, y, width, height} = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
    };


    const [data, setData] = useState([

    ]);

    const [day,setDay]=useState()

    function getData() {

        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                setData(
                    [
                        {
                            name: "Confirmed",
                            uv: data.Global.TotalConfirmed,
                            pv: data.Global.TotalConfirmed,
                            amt: data.Global.TotalConfirmed
                        },
                        {
                            name: "Recovered",
                            uv: data.Global.TotalRecovered,
                            pv: data.Global.TotalRecovered,
                            amt: data.Global.TotalRecovered
                        },
                        {
                            name: "Deaths",
                            uv: data.Global.TotalDeaths,
                            pv: data.Global.TotalDeaths,
                            amt: data.Global.TotalDeaths
                        }
                    ]
                )

                setDay(data.Date)

            });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="card border-secondary mb-2 animate__animated animate__fadeInRight animate__slower"
             style={{minHeight: 550}}>
            <div className="card-header text-white">Covid 19 cases in the world (Data by https://covid19api.com/)</div>
            <div className="card-body text-center" style={{backgroundColor: 'white'}}>
                <div style={{ width: '100%', height: 300 }}>
                    <h3>Date:{day}</h3>
                <ResponsiveContainer>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 30,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar
                        dataKey="uv"
                        fill="#8884d8"
                        shape={<TriangleBar/>}
                        label={{position: "top"}}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                        ))}
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}