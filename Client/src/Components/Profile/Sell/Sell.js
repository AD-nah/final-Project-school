import React from "react";
import './sell.css';





class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        file: '', imagePreviewUrl: '',
        file2:'',imagePreviewUrl2:'',
        file3:'',imagePreviewUrl3:'',
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file=e.target.files[0];
       
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result, 
            });
        }
        reader.readAsDataURL(file)
    }

    _handleImageChange2(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file2=e.target.files[0];
       
        reader.onloadend = () => {
            this.setState({
                file2: file2,
                imagePreviewUrl2: reader.result, 
            });
        }
        reader.readAsDataURL(file2)
    }


    _handleImageChange3(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file3=e.target.files[0];
       
        reader.onloadend = () => {
            this.setState({
                file3: file3,
                imagePreviewUrl3: reader.result, 
            });
        }
        reader.readAsDataURL(file3)
    }



    render() {
        let {imagePreviewUrl} = this.state;
        let {imagePreviewUrl2} = this.state;
        let {imagePreviewUrl3} = this.state;

        let $imagePreview=null;
        let $imagePreview2=null;
        let $imagePreview3=null;
       

        if (imagePreviewUrl || imagePreviewUrl2 || imagePreviewUrl3 ==='') {
            $imagePreview = (<img  src={imagePreviewUrl} style={{width:"20vw",height:"18vh",padding:"2px",margin:'2px' }} />);
            $imagePreview2 = (<img  src={imagePreviewUrl2} style={{width:"20vw",height:"18vh",padding:"2px",margin:'2px' }} />);
            $imagePreview3 = (<img  src={imagePreviewUrl3} style={{width:"20vw",height:"18vh",padding:"2px",margin:'2px' }} />);
           
           
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="container Sell-container font-weight-bold">

                <div className="row m-2 " style={{ backgroundColor: "#f7f7f7" }}>
               
                    <div className="row m-2">
                        <div className=" row-md-4 img-thumbnail mx-auto d-block ">
                            {$imagePreview}
                            {$imagePreview2}
                            {$imagePreview3}
                            
                        </div>
                        <div className="row-md-6 ml-5">
                            <form onSubmit={(e) => this._handleSubmit(e)}>

                                <label for="product_name">Poduct Name</label>
                                <div class="form-group styled-select">
                                  
                                    <input id="product_name" name="product_name" placeholder="Product Name.." class="form-control input-md" required="" type="text" style={{backgroundColor:""}}/>
                                  
                                </div>


                                <label for="product_categorie">Category</label>
                                <div class="form-group styled-select">
                                    <select>
                                        <option>Select Category</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span class="fa fa-sort-desc"></span>
                                </div>


                                <label for="available_quantity">Quantity</label>
                                <div class="form-group styled-select">
                                    <select>
                                        <option>Select Quantity</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span class="fa fa-sort-desc"></span>
                                </div>


                                <label for="available_quantity">Size</label>
                                <div class="form-group styled-select">
                                    <select>
                                        <option>Select a size</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span class="fa fa-sort-desc"></span>
                                </div>

                                <label for="percentage_discount">Discount</label>
                                <div class="form-group styled-select">
                                    <select>
                                        <option>Percenage</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span class="fa fa-sort-desc"></span>
                                </div>



                                <div class="form-group">
                                    <label for="product_description">Prroduct Description</label>
                                    <textarea class="form-control" id="product_description" name="product_description"></textarea>
                                </div>




                                <div class="form-group">
                                    <label for="filebutton">Image 3</label> 
                                    <input onChange={(e) => this._handleImageChange(e)} id="filebutton" name="filebutton" class="input-file" type="file" />

                                    <label for="filebutton">Image 2</label> 
                                    <input onChange={(e) => this._handleImageChange2(e)} id="filebutton" name="filebutton" class="input-file" type="file" />

                                    <label for="filebutton">Image 3</label> 
                                    <input onChange={(e) => this._handleImageChange3(e)} id="filebutton" name="filebutton" class="input-file" type="file" />
                                </div>


                                <button 
                                    className="submitButton btn btn-outline-transparent"
                                    type="submit"
                                    onClick={(e) => this._handleSubmit(e)}>Save Product
                                </button>


                            </form>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default Sell;