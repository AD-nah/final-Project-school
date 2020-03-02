import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button/Button';

// import DropDown from ANTD Library
import { Menu, Dropdown } from 'antd';

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



  // Antd Dropdown Menu
  const menu = (
    <Menu style={{textAlign:"center"}}>
      <Menu.Item >
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Paybal
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Visa
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          Maestro
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
   <br/>
   <br/>

    <div className = 'container'>
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
    </div>
    <div className = 'container'>
        <Button variant="contained"  style={{position:"absolute",right:"10px",top:"350px",backgroundColor:"green"}}>
            <Dropdown overlay={menu} >
              <Button style={{color:"white"}}>Payment Methode</Button>
            </Dropdown>
        </Button>
      </div>

   <br/>
   <br/>


    </React.Fragment>

  );
}




