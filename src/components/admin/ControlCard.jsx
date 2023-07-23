import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'
function ControlCard() {
  const [data,setData]=useState([]);
  useEffect(()=>{
      axios.get('http://localhost:8088/api/host/getall')
        .then( (response)=>{
          console.log(response.data);
          setData(response.data)
      })
      .catch(function (error) {
          alert(error.response.data)
          console.log(error);
        });
  },[])
  const columns=[
    {
      field:'company_name',
      headerName:"Company",
      width: 120
    },
    {
    field:'email',
    headerName:"Email",
    width: 120
    },
    {
      field:'phone',
      headerName:"Phone",
      width: 120
    },
    {
      field:'created_at',
      headerName:"Created Date",
      width: 120
    },
      {
        field: 'action',
        headerName: 'Action',
        width: 120,
        renderCell: (params) => (
          params.row.isActive ? <div>Activated</div>:<button onClick={() => handleButtonClick(params.row)}>Activate</button>
          
        ),
      },
      ]
      const handleButtonClick = (rowData) => {
        axios.post('http://localhost:8088/api/host/activate', {
            company_name: rowData.company_name
          })
          .then(function (response) {
            console.log(response)
          })
        .catch(function (error) {
            alert(error.response.data)
            console.log(error);
          });
        console.log('Button clicked for row:', rowData);
      };
      return (
      <>
      <DataGrid rows={data} columns={columns}/>
      </>
      )
  };
  

export default ControlCard
