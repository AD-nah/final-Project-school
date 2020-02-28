import React from 'react';
import MaterialTable from 'material-table';





export default function Chart() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Item id', field: 'Id' },
      { title: 'Description', field: 'Description' },
      { title: 'Colour', field: 'Colour'},
      {title: 'Size',field: 'Size'},
    ],
    data: [
      { Id: '2900', Description: 'Clothe', Colour: 'Blue', Size: 's' },
      {Id: '2800',Description: 'Shoe',Colour: 'Black',Size: 'm',}
    ],
  });

  return (
    <React.Fragment>


    <MaterialTable
      title="Your Items"
      columns={state.columns}
      data={state.data}

      editable={{
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

    </React.Fragment>

  );
}
