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
        <h2 className="h1-responsive font-weight-bold my-4">
        still not finished ...
          </h2>
                <div className="row m-2 " style={{ backgroundColor: "#f7f7f7" }}>
               
                    <div className="row m-2">
                        <div className=" row-md-4 img-thumbnail mx-auto d-block ">
                            {$imagePreview}
                            {$imagePreview2}
                            {$imagePreview3}
                            
                        </div>
                        <div className="row-md-6 ml-5">
                            <form onSubmit={(e) => this._handleSubmit(e)}>

                                <label htmlFor="product_name">Poduct Name</label>
                                <div className="form-group styled-select">
                                  
                                    <input id="product_name" name="product_name" placeholder="Product Name.." className="form-control input-md" required="" type="text" style={{backgroundColor:""}}/>
                                  
                                </div>


                                <label htmlFor="product_categorie">Category</label>
                                <div className="form-group styled-select">
                                    <select>
                                        <option>Select Category</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span className="fa fa-sort-desc"></span>
                                </div>


                                <label htmlFor="available_quantity">Quantity</label>
                                <div className="form-group styled-select">
                                    <select>
                                        <option>Select Quantity</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span className="fa fa-sort-desc"></span>
                                </div>


                                <label htmlFor="available_quantity">Size</label>
                                <div className="form-group styled-select">
                                    <select>
                                        <option>Select a size</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span className="fa fa-sort-desc"></span>
                                </div>

                                <label htmlFor="percentage_discount">Discount</label>
                                <div className="form-group styled-select">
                                    <select>
                                        <option>Percenage</option>
                                        <option>The second option</option>
                                        <option>The thrid option</option>
                                    </select><span className="fa fa-sort-desc"></span>
                                </div>



                                <div className="form-group">
                                    <label htmlFor="product_description">Prroduct Description</label>
                                    <textarea className="form-control" id="product_description" name="product_description"></textarea>
                                </div>




                                <div className="form-group">
                                    <label htmlFor="filebutton">Image 3</label> 
                                    <input onChange={(e) => this._handleImageChange(e)} id="filebutton" name="filebutton" className="input-file" type="file" />

                                    <label htmlFor="filebutton">Image 2</label> 
                                    <input onChange={(e) => this._handleImageChange2(e)} id="filebutton" name="filebutton" className="input-file" type="file" />

                                    <label htmlFor="filebutton">Image 3</label> 
                                    <input onChange={(e) => this._handleImageChange3(e)} id="filebutton" name="filebutton" className="input-file" type="file" />
                                </div>


                                <button 
                                    className="submitButton btn btn-outline-transparent"
                                    type="submit"
                                    // onClick={(e) => this._handleSubmit(e)}
                                    onClick={()=> alert('working on it ...')}
                                    >Save Product
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