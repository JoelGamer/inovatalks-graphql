import React from 'react';
import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { gql, useQuery } from '@apollo/client';
// import './App.css';

const graphqlQuery = gql`
  query GetItems {
    items {
      id
      name
      price
      user {
        fullName
      }
    }
  }
`;


function App() {
  const { loading, data } = useQuery(graphqlQuery);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ flex: 1 }}>
          {(!loading) &&
          <div className="card">
            <DataTable value={data.items} sortMode="multiple" removableSort>
              <Column field="id" header="ID do Item" sortable></Column>
              <Column field="name" header="Nome do Item" sortable></Column>
              <Column field="price" header="Preço do Item" sortable></Column>
              <Column field="user.fullName" header="Nome do Vendedor" sortable></Column>
            </DataTable>
          </div>}
        </div>
      </header>
    </div>
  );
}

export default App;
