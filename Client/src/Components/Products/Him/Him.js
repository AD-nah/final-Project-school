
import React,{Component} from 'react';



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

import { Dropdown, Input } from 'semantic-ui-react'
import "../style.css"

// the style of the cards
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
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




//  the toggle search
const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]


export default function Him() {

  const classes = useStyles();



 



  return (
    <React.Fragment>
    <CssBaseline />

      
      {/* START THE TOGGLE INFO */}
      
                    <div
                role="listbox"
                aria-expanded="false"
                aria-multiselectable="true"
                class="ui multiple dropdown"
                tabindex="0"
              >
                <div class="text" role="alert" aria-live="polite" aria-atomic="true">Filter Posts</div>
                <i aria-hidden="true" class="filter icon"></i>
                <div class="menu transition">
                  <div class="ui left icon input search">
                    <input type="text" />
                    <i aria-hidden="true" class="search icon"></i>
                  </div>
                  <div class="divider"></div>
                  <div class="header">
                    <i aria-hidden="true" class="tags icon"></i>
                    Tag Label
                  </div>
                  <div class="scrolling menu transition">
                    <div role="option" class="item">
                      <div class="ui red circular empty label"></div>
                      <span class="text">Important</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui blue circular empty label"></div>
                      <span class="text">Announcement</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui black circular empty label"></div>
                      <span class="text">Cannot Fix</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui purple circular empty label"></div>
                      <span class="text">News</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui orange circular empty label"></div>
                      <span class="text">Enhancement</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui circular empty label"></div>
                      <span class="text">Change Declined</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui yellow circular empty label"></div>
                      <span class="text">Off Topic</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui pink circular empty label"></div>
                      <span class="text">Interesting</span>
                    </div>
                    <div role="option" class="item">
                      <div class="ui green circular empty label"></div>
                      <span class="text">Discussion</span>
                    </div>
                  </div>
                </div>
              </div>
      {/*End of the toggle Inf  */}
      

       {/* the cards contents */}
     <div className={classes.heroContent}>
       <Container maxWidth="sm">
         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
           Products for Him layout
         </Typography>
         <Typography variant="h5" align="center" color="textSecondary" paragraph>
           Something short and leading about the collection below—its contents, the creator, etc.
           Make it short and sweet, but not too short so folks don&apos;t simply skip over it
           entirely.
         </Typography>
         <div className={classes.heroButtons}>
           <Grid container spacing={2} justify="center">
             <Grid item>
               <Button variant="outlined" color="primary">
                 Filter
               </Button>
             </Grid>
           </Grid>
         </div>
       </Container>
     </div>


     <Container className={classes.cardGrid} maxWidth="lg">
       {/* End hero unit */}
       <Grid container spacing={4}>
         {cards.map(card => (
           <Grid item key={card} xs={12} sm={6} md={4}>
             <Card className={classes.card}>
               <CardMedia
                 className={classes.cardMedia}
                 image="https://source.unsplash.com/random"
                 title="Image title"
               />
               <CardContent className={classes.cardContent}>
                 <Typography gutterBottom variant="h5" component="h2">
                   Heading
                 </Typography>
                 <Typography>
                   This is a media card. You can use this section to describe the content.
                 </Typography>
                 <hr/>

                 <Typography gutterBottom variant="h7" >
                         <Typography variant="h5" component="h3">&#36;</Typography>
                 </Typography>

               </CardContent>


               <CardActions>
                 <Button size="small" color="primary">
                   View
                 </Button>


                 <Button size="small" color="primary">
                   Favorite +
                 </Button>
                

                 <Button size="small" color="primary">
                   Chart +
                 </Button>

               </CardActions>
             </Card>
           </Grid>
         ))}
       </Grid>
     </Container>
         {/* end of the old contents */}
\
  
  </React.Fragment>
  )
}


