import React, { Component } from "react";

// ------------------------------------------------------------------

//MATERIAL-UI Library for React packages
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// ----------------------------------------------------------------------

// Import Antd  library
import "antd/dist/antd.css";
import { Menu, Icon, Popconfirm, message, Rate, Input } from "antd";
import PlusCircleTwoTone from 'antd/es/icon'
const { SubMenu } = Menu;
const desc = ["Ugly", "Works", "Ok", "Very Good", "Beautiful"];
const { Search } = Input;

// confirm on click or error on cancel
function confirm(e) {
  console.log(e);
  message.success("Added successfuly..");
}
function cancel(e) {
  console.log(e);
  message.error("Item deleted..");
}

// --------------------------------------------------------------

// Cards style from Material-ui
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  side: {
    maxWidth: "100px",
    float: "left"
  }
}));
const cards      = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let init_value   = [3, 3, 3, 3, 3, 3, 3, 3, 3]

export default class Her extends React.Component {
  //for the rate stars
  state = {
    value: init_value
  };
  // for the  rate chages
  handleChange = (id,newValue) => {
    let tempValue = [...this.state.value]
    tempValue[id-1] = newValue; 
    this.setState({ value:tempValue });
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

        
          <Grid container>
            <Grid item xs={12} sm={4} md={2}>
              <main>
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
                        <span> Search </span>
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Icon type="skin" />
                      Clothe
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="yuque" />
                      Shoes
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
              </main>
            </Grid>

            <Grid item xs={12} sm={7} md={10}>
              {/* Hero unit */}
              <div className={useStyles.heroContent}>
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Men's Album
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                  >
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don&apos;t simply skip over it entirely.
                  </Typography>
                  <div className={useStyles.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Main call to action
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Secondary action
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
              <Container className={useStyles.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={useStyles.card}>
                        <CardMedia
                          className={useStyles.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                        <CardContent className={useStyles.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Heading
                          </Typography>
                          <Typography>
                            This is a media card. You can use this section to
                            describe the content.
                          </Typography>
                        </CardContent>

                        <hr />
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={(newValue)=>this.handleChange(card,newValue)}
                            value={value[card-1]}
                          />
                          {value ? (
                            <span className="ant-rate-text">
                              {desc[value - 1]}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                        <hr />

                        <Typography gutterBottom variant="h8">
                          <span>
                                <i class="fas fa-euro-sign" style={{fontSize:"17px",marginLeft:"30px"}}></i>
                          </span>
                        </Typography>

                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>

                          <Popconfirm
                            title="Are you sure?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <a href="#" style={{ fontSize: "20px" }}>
                                <i class="fas fa-heart"></i>
                            </a>
                          </Popconfirm>



                          <Popconfirm
                            title="Are you sure ?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <a href="#" style={{ fontSize: "20px",marginLeft:"20px" }}>
                                <i class="fas fa-cart-plus"></i>
                            </a>
                          </Popconfirm>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
          </Grid>
      </React.Fragment>
    );
  }
}
