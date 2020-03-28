import React from "react";







class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <div class="container" style={{backgroundColor:' beige'}}>

                <div class="row ml-5">
                    <div class="col-sm-10 m-4 text-center">
                        <h1>User name</h1>
                    </div>





                    <div class="col-sm-3">

                        <div class="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-thumbnail" alt="avatar" />
                            <h6>Upload a photo...</h6>
                            <input type="file" className=" ml-2" />
                        </div>

                    </div>





                    <div class="col-sm-9 col-md-6 ml-5">


                        <div class="tab-content">
                            <div class="tab-pane active" id="home">

                                <form class="form" action="##" method="post" id="registrationForm">
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="first_name"><h4>First name</h4></label>
                                            <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="last_name"><h4>Last name</h4></label>
                                            <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="phone"><h4>Phone</h4></label>
                                            <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-6">
                                            <label for="mobile"><h4>Mobile</h4></label>
                                            <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="email"><h4>Email</h4></label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="email"><h4>Location</h4></label>
                                            <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-12">

                                            <button class="btn btn-lg btn-outline-dark" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                            <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div >


                    </div >
                </div >
            </div >

        );
    }
}

export default Edit;


