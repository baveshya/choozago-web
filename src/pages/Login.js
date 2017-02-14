import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../redux/actions/sessionActions';
import Loading from 'react-loading';


class Login extends Component {

constructor(props) {
        super(props);
        this.state = {
            credentials:{
                username:'',
                password:''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
}

onChange(event) {
      const field = event.target.name;
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      return this.setState({ credentials });
}

onSubmit(e){
	e.preventDefault();
	this.props.actions.toggleLoader();
	if(this.props.firstTimeUser)
	{
	  this.props.actions.setNewPassword(this.state.credentials);  
	}
	else {
	  this.props.actions.logInUser(this.state.credentials);
	}

}

  render () {
      
      const { loaderStatus, firstTimeUser } = this.props;
    return (
        <div className='login-container container col-lg-4 col-lg-offset-4 col-xs-10 col-xs-offset-1'>
        	        
            <span className="icon icon-user login-icon" role="login indicator"></span>
            
            <div className="hr-divider">
            <h4 className="hr-divider-content hr-divider-heading">ADMIN LOGIN</h4>
            </div>
        
            <div className="admin-box">
                { firstTimeUser && <div role="alert" className="alert alert-danger m-a"><p>Please set a new password with the following rules : </p><ul> <li>Minimum character Length 8</li> <li>Atleast one uppercase character, lowercase character, special character and a number each</li> </ul> </div> }
                <div className="input-group m-a">
                    <span className="input-group-addon icon icon-users"></span>
                    <input type="text" className="form-control" name="username" placeholder="USERID" onChange={this.onChange}/>
                </div>
                <div className="input-group m-a">
                    <span className="input-group-addon icon icon-lock"></span>
                    <input type="password" className="form-control" name="password" placeholder="PASSWORD" onChange={this.onChange}/>
                </div>
                <button className="btn btn-success-outline admin-btn" type="button" onClick={this.onSubmit}>
                    <span className='login-span'>{ firstTimeUser ? "SET PASSWORD":"LOGIN" } </span> 
                  { loaderStatus  && <Loading type='spin' height='30px' width='30px' color='#d6e5ff' /> }
                </button>
                
      		</div>

        </div>
    )
  }
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {  
  return { loaderStatus: state.session.loginLoader, firstTimeUser: state.session.firstTimeUser };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);