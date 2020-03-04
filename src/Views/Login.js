import React from 'react';
import {InputComponent} from '../Components/InputComponent';
import { makeStyles } from '@material-ui/core/styles';
import {ButtonComponent} from '../Components/Button';
import SampleCard from '../Components/Card';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const cardStyle = {
    color: "#000",
    width:'22%',
    height:'60%',
    backgroundColor: "#e1eeef",
    border: "2px solid #7ad1e8"
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userName:'',
            password:''
        }
    }

    handleUserNameChange = (evt) => {
        this.setState({
            userName: evt.target.value
        })
    }

    handlePasswordChange = (evt) => {
        this.setState({
            password: evt.target.value
        })
    }

    onLoginClick = async () => {
        const {userName, password}=this.state;
        let userObj={
            userName: userName,
            password: password
        }
        if(userName && password) {
            try {
                let response = await fetch('http://localhost:4000/login', {
                method  : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(userObj)
            })
            let responseJson = await response.json();
            console.log(responseJson); 
            this.props.history.push('/itemlist/');
            // return <Redirect  to="/itemlist/" />
            // this.setState({
            //     usersArr: responseJson.user
            // })
        } catch (err) {
            console.error(err);
        }
        } else {
            alert('please enter the details');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Login">
                    <SampleCard
                        cardStyle={cardStyle}
                        loginCard={true}
                        handleUserNameChange={this.handleUserNameChange}
                        handlePasswordChange={this.handlePasswordChange}
                        onLoginClick={this.onLoginClick} />
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
