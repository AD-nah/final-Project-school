import React from "react";
import './sell.css';
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
            $imagePreview = (<img className="halloImage m-2" src={imagePreviewUrl} style={{width:"20vw", height:"40vh"}}/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
            
        }

        return (
            <div class="container-fluid row regFormContainer font-weight-bold">
                <div className=" row-md-2">
                            {$imagePreview}
                        </div>
                <div className="col-md-8">
                <form  onSubmit={(e) => this._handleSubmit(e)}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Product Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="your name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Price</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email" />

                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write your product description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                 

                   
                      
                            <input className="fileInput"
                                type="file"
                                onChange={(e) => this._handleImageChange(e)} />
                            {/* <button className="submitButton"
                                type="submit"
                                onClick={(e) => this._handleSubmit(e)}>Upload Image</button> */}
                        
                      
                   


                </form>
                </div>

                
            </div>

        );
    }
}

export default Sell;