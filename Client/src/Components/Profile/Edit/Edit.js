import React from "react";







class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    
    render() {
        return (<div>
            <div class="container bootstrap snippet">


                <div class="row">
                    <div class="col-sm-10 m-4">
                        <h1>User name</h1>
                    </div>

                </div>


                <div class="row">
                    <div class="col-sm-3">

                        <div class="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" class="text-center center-block file-upload" />
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">Website <i class="fa fa-link fa-1x"></i></div>
                            <div class="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
                        </div>
                    </div>





                    <div class="col-sm-9">


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
        </div >

        );
    }
}

export default Edit;


