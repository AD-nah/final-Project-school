import React from "react";







class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
        
                <div className="container">
                            <h2 className="h1-responsive font-weight-bold my-4">
        still not finished ...
          </h2>
                        <div className="row  m-2 ">
                        <div className="col-sm-10 m-4">
                            <h1>User name</h1>

                        </div>

                            <div className="col-sm-3">

                                <div className="text-center">
                                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                                    <h6>Upload a different photo...</h6>
                                    <input type="file" className="text-center center-block file-upload  p-4" />
                                </div>

                            </div>



                            <div className="col-sm-9 p-4">

                                <div className="tab-content">
                                    <div className="tab-pane active" id="home">

                                        <form className="form" action="##" method="post" id="registrationForm">
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label htmlFor="first_name"><h4>First name</h4></label>
                                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label htmlFor="last_name"><h4>Last name</h4></label>
                                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                                </div>
                                            </div>

                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label htmlFor="phone"><h4>Phone</h4></label>
                                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-xs-6">
                                                    <label htmlFor="mobile"><h4>Mobile</h4></label>
                                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label htmlFor="email"><h4>Email</h4></label>
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label htmlFor="email"><h4>Location</h4></label>
                                                    <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-xs-12">


                                                    <button
                                    onClick={()=> alert('working on it ...')}
                                                    
                                                    className="btn btn-lg btn-outline-dark" type="button"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div >
                            </div >
                        </div >
                </div>
        )
    }
}

export default Edit;


