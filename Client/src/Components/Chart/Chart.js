import React from 'react';
import MaterialTable from 'material-table';

export default function Chart() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Item id', field: 'Id' },
      { title: 'Description', field: 'Description' },
      { title: 'Colour', field: 'Colour'},
      {title: 'Birth Place',field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
    ],
    data: [
      { Id: '2900', Description: 'Clothe', Colour: 'Blue', birthCity: 63 },
      {
        Id: '2800',
        Description: 'Shoe',
        Colour: 'Black',
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Your Products"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
      
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
