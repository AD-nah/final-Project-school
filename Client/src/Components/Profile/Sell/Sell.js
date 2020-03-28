import React from "react";
import './sell.css';
import sellImg from './sellImg/sell.jpeg';
import percent from './sellImg/50-percent.jpg';
import s from './sellImg/s.webp'
class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="halloImage m-2" src={imagePreviewUrl} style={{ width: "20vw", height: "40vh" }} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);

        }

        return (
            <div className="container regFormContainer font-weight-bold">
                <div className="row m-3" /*style={{ backgroundColor: "orange" }}*/>
                    <div className="col-md-4" /*style={{ backgroundColor: "#ddd" }}*/>
                        <h3 className="row-md-2 font-whigt-bold text-center font-weight-bold">Big brands, small prices</h3>
                        <img className="img-fluid row-md-2 row-sm-2" src={sellImg} style={{ width: "15vw", height: "30vh" }} />
                    </div>
                    <div className="col-md-4" style={{ backgroundColor: "" }}>

                    <h2 className="text-center font-whigt-bold">    Exclusive offers:
                                Register Login below</h2>
                        <img src={percent} style={{ width: "20vw" }} />
                       
                    </div>
                    <div className="col-md-4" style={{ width: "30vw" }}>
                        <img src={s} style={{ width: "20vw"}}/>
                        
                         </div>

                </div>
                <div className="row m-2 " style={{backgroundColor:"#d5d4d3"}}>
                    {/* <div className="row-md-2">

                </div> */}
                <div className="row m-2">
                    <div className=" row-md-4 img-thumbnail mx-auto d-block ">
                        {$imagePreview}
                    </div>
                    <div className="row-md-6 ml-5">
                        <form onSubmit={(e) => this._handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Product Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="product name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Price</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Inter your Price" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Write your product description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>




                            <input className="fileInput" style={{ backgroundColor: "#a1a8a5" }}
                                type="file"
                                onChange={(e) => this._handleImageChange(e)} />
                            {/* <button className="submitButton"
                                type="submit"
                                onClick={(e) => this._handleSubmit(e)}>Upload Image</button> */}





                        </form>
                    </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default Sell;