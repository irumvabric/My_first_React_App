import React, {  useState,useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

function Users() {

  const [products,setUsersList] = useState([])

  useEffect(() => {
    getAllUsers();
  }, []);


  const getAllUsers = async () => {
    try{
      const response = await axios.get('http://localhost:4000/users');
      if(response){
        setUsersList(response.data);
      }
    } catch(e){
    console.error(e);
  }
}

const addressTemplate = (rowData) => {
  const { street, city, state, zip } = rowData.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

  return (
    <div className='users-pages'>
        <h1>
            Welcome to the Users Page!
        </h1>
        <h3>
            Here are some users:
        </h3>

        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="address" header="Address" body={addressTemplate}></Column>
        </DataTable>
    </div>
  )
}

export default Users