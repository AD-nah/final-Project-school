import React,{Component} from 'react';



// ------------------------------------------------------------------

//MATERIAL-UI Library for React packages
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../style.css"




// ----------------------------------------------------------------------

// Import Antd  library
import "antd/dist/antd.css";
import { Menu, Icon,Popconfirm, message,Rate  } from "antd";
const { SubMenu } = Menu;
const desc = ['Ugly', 'Works', 'Ok', 'Very Good', 'Beautiful'];

// confirm on click or error on cancel
function confirm(e) {
  console.log(e);
  message.success('Added successfuly..');
}
function cancel(e) {
  console.log(e);
  message.error('Item deleted..');
}


// --------------------------------------------------------------






// Cards style from Material-ui
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  side:{
    maxWidth:"100px",
    float:"left"
  }
}));
const  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];















export default class Him extends React.Component {
 
  //for the rate stars
  state = {
    value: 3,
  };
  // for the  rate chages
  handleChange = value => {
    this.setState({ value });
  };

  handleClick = e => {
    console.log("click ", e);
  };




  render() {

    // for the rates
    const { value } = this.state;

    return (

      <React.Fragment>
        <CssBaseline /> 

        {/* start side */}
          <Container>
             <div style={{maxWidth:"550px", float:"left"}}>
                  <Menu
                    onClick={this.handleClick}
                    style={{ width: 180 }}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                  
                  >


                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="search" />
                          <span>  Search </span>
                        </span>
                      }
                    >
                      
                        <Menu.Item key="1">
                            <Icon type="skin" />Clothe
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="yuque" />Shoes
                        </Menu.Item>
                
                      
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="appstore" />
                          <span>Else</span>
                        </span>
                      }
                    >
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                    
                    </SubMenu>
                   
                  </Menu>
                  </div>

                    {/* the header */}
            <div className={useStyles.heroContent} >
          
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                  Products for Him layout
                </Typography>

                <div style={{wordWrap:"break-word"}}>
                  <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
                  </Typography>
                </div>
            </div>
          </Container>
       {/* end Aside */}




     
     



            <Container className={useStyles.cardGrid} maxWidth="lg" >
            
              <Grid container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={useStyles.card}>
                      <CardMedia
                        className={useStyles.cardMedia}
                        image="https://picsum.photos/200/300"
                        title="Image title"
                      />
                      <CardContent className={useStyles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>

                        <hr/>
                        <span>
                          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        </span>
                        <hr/>

                        <Typography gutterBottom variant="h7" >
                                <Typography variant="h5" component="h3">&#36;</Typography>
                        </Typography>

                      </CardContent>


                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>


                        <Popconfirm
                              title="Are you sure?"
                              onConfirm={confirm}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No">
                              <a href="#" style={{fontSize:"18px"}}>Favorite +</a>
                        </Popconfirm>

                        
                        <Popconfirm
                              title="Are you sure ?"
                              onConfirm={confirm}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No">
                              <a href="#"  style={{fontSize:"18px"}}>Chart +</a>
                        </Popconfirm>
                     

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </React.Fragment>        
     
   

    );
  }
}