import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { userActions } from '../../actions/userActions';
import { setCookie } from '../../utils/cookies';
import "./login.css";

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }


    componentDidMount() {
        document.title = 'Device Login';
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let username = event.target.text.value;
        let password = event.target.password.value;

        const data = {
            username, password
        };

       

        //this.props.dispatch(
        userActions.login(data)
       
        
        //);
    }

    render() {
        let isSuccess, message;

        /*if (this.props.response.login.hasOwnProperty('response')) {
            isSuccess = this.props.response.login.response.success;
            message = this.props.response.login.response.message;

            if (isSuccess) {
                setCookie('token', this.props.response.login.response.token, 1);
            }
        }*/

        return (
            <div className='logg'>
                <div className='logg2' style={{height:"100px"}}>

                </div>
                <h3 style={{ marginTop: "10%" }}>Login Page Device & User</h3>
                {!isSuccess ? <div>{message}</div> : <Navigate to='/' />}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="text">Email</label>
                        <input type="text" name="text" id="text" />
                    </div>
                    <div style={{ marginRight: "23px" }}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <Button primary>Login</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage)