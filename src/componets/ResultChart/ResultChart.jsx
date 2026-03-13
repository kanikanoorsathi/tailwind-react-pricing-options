import React from 'react';
import { BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ResultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 72,
    "chemistry": 69,
    "math": 80
  },
  {
    "id": 3,
    "name": "Sakib",
    "physics": 91,
    "chemistry": 88,
    "math": 94
  },
  {
    "id": 4,
    "name": "Nabil",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 5,
    "name": "Tariq",
    "physics": 74,
    "chemistry": 79,
    "math": 82
  },
  {
    "id": 6,
    "name": "Imran",
    "physics": 88,
    "chemistry": 85,
    "math": 87
  },
  {
    "id": 7,
    "name": "Hasan",
    "physics": 59,
    "chemistry": 63,
    "math": 60
  },
  {
    "id": 8,
    "name": "Rafi",
    "physics": 81,
    "chemistry": 77,
    "math": 84
  },
  {
    "id": 9,
    "name": "Arif",
    "physics": 69,
    "chemistry": 72,
    "math": 75
  },
  {
    "id": 10,
    "name": "Jamal",
    "physics": 95,
    "chemistry": 92,
    "math": 96
  }
]

const ResultChart = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <LineChart width={900} height={500} data={ResultData}>
                <BarChart width={600} height={300} data={ResultData}></BarChart>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip ></Tooltip>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultChart;