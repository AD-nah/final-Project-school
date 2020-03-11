import React, { Component } from 'react';
import kleidung from './newsPhoto/kleidung.jpg';
import kleidung1 from './newsPhoto/kleidung1.jpg';
import kleidung2 from './newsPhoto/kleidung2.jpg';
import kleidung3 from './newsPhoto/kleidung3.jpg';
import { BackTop } from 'antd';
import api from '../../APIs/AuthApi';

       

   
export default class News extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newsURL : `http://newsapi.org/v2/everything?q=fashion&from=${this.formatDate(Date())}&sortBy=publishedAt&apiKey=54ab4e9ca5d94879a3f3c8b0995b4482`,
             news : [],
             isLoading : false
        }
    }
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    componentDidMount = async () => {
        this.setState({
            isLoading : true
        })
        await api.newApi.getNews(this.state.newsURL).then(res => {
            this.setState({
                news : res.data.articles,
                isLoading : false
            })
        }).catch(err => {
            console.log(err);
        })
    }

      
    
    render() {
        console.log(this.state.news)
        let news1 = null
        
        if(this.state.news.length > 0){
            news1 = this.state.news.slice(0,10).map(item => {
                return <div key={item.title} className="container-fluid mb-5">
                <h1 className="font-weight-bold ">{item.title}</h1>
                <p>{item.content }...<a className="bg-info font-weight-bold text-dark" target="_blank" href={item.url}>See more...</a></p>
                    <img className="w-100" src={item.urlToImage}/>
                    <h2>{item.publishedAt}</h2>
                    
            </div>
            })
        }
           
        return (
            <React.Fragment>
                <div className="container-fluid mb-5">
                  
                    <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                        {/* <h1 className="text-center bg-danger">Hallo in the new Page</h1> */}

                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner mt-4" role="listbox" style={{ height: "80vh" }}>

                            <div className="carousel-item active">
                                <img className="d-block w-100 h-auto" src={kleidung}
                                    alt="First slide" />
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100 h-auto" src={kleidung1}
                                    alt="Second slide" />
                            </div>

                            <div className="carousel-item h-auto">
                                <img className="d-block w-100" src={kleidung2}
                                    alt="Third slide" />
                            </div>
                            <div className="carousel-item h-auto">
                                <img className="d-block w-100" src={kleidung3}
                                    alt="Third slide" />
                            </div>

                        </div>



                            {/* Back to top btn */}
                            <div>
                                    <BackTop>
                                    
                                    <i className="fas fa-angle-double-up" style={{color:"orange",fontSize:"40px"}}></i>
               
                                    </BackTop>
                            </div>

                        
                        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                       
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                       
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>

                </div>
                {/*news Started*/}
                <div className="container">
                    {news1}

                </div>
            </React.Fragment>
        )
    }
}

// 54ab4e9ca5d94879a3f3c8b0995b4482 key for the Api

// http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-04&sortBy=publishedAt&apiKey=54ab4e9ca5d94879a3f3c8b0995b4482
