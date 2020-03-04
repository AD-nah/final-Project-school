import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button/Button'


import { connect } from 'react-redux'



// import DropDown from ANTD Library
import { Menu, Dropdown } from 'antd';





 function Chart({item}) {
   
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
    ]
  });

console.log(item)

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

    <div>
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

    <div>
        <Button variant="contained"  style={{position:"absolute",right:"10px",top:"350px",backgroundColor:"green"}}>
            <Dropdown overlay={menu} >
              <Button style={{color:"white"}}>Payment Methode</Button>
            </Dropdown>
        </Button>
      </div>

   

    </React.Fragment>

  );
}

function mapStateToProps(state){
  return{
    item:state.basketReducer
  }
}

export default connect(mapStateToProps)(Chart)









// class OverlayVisible extends React.Component {
//   state = {
//     visible: false,
//   };

//   handleMenuClick = e => {
//     if (e.key === '3') {
//       this.setState({ visible: false });
//     }
//   };

//   handleVisibleChange = flag => {
//     this.setState({ visible: flag });
//   };

//   render() {
//     const menu = (
//       <Menu onClick={this.handleMenuClick}>
//         <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
//         <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
//         <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
//       </Menu>
//     );
//     return (
//       <Dropdown
//         overlay={menu}
//         onVisibleChange={this.handleVisibleChange}
//         visible={this.state.visible}
//       >
//         <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//           Hover me <DownOutlined />
//         </a>
//       </Dropdown>
//     );
//   }
// }
  

