import React from 'react';
import SuccessMessage from '../Messages/SuccessMessage';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm';

import { connect } from 'react-redux';
import {forgotPasswordAction} from '../../Redux/Actions/auth';
class ForgotPasswordPage extends React.Component {

    state = {
        success:false
    };

    submit = (data) => {
        return this.props.forgotPasswordAction(data).then(res => {
            this.setState({success : true})
        })
    }

    render(){
        return ( 
            <div className = 'container'>

                <div className = 'row'>  
                    <div className="col-md-9 mx-auto">

                        {this.state.success ? (<SuccessMessage text = 'Email has been send.'/>)  :
                        ( <ForgotPasswordForm submit = {this.submit} /> 
                        )
                        }
                    </div>
                </div>
            </div>        
        );
    }
}

export default connect(null, {forgotPasswordAction})(ForgotPasswordPage);