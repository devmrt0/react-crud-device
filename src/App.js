import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { connect } from 'react-redux';
import { createBrowserHistory as history } from 'history';
import { PrivateRoute } from './components/IsLogin/IsLogin';
import { Layouts } from './components/Layout/Layout';
import { LoginPage as Login } from './components/Login/LoginPage';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">

        <Router history={history}>
          <div className="App-body">
            <Routes>
              <Route exact path="/" element={<PrivateRoute><Layouts></Layouts></PrivateRoute>} component={<span>users</span>}></Route>
              <Route exact path="/login" element={<Login></Login>} component={<span>login</span>}></Route>
              <Route exact path="/users" element={<PrivateRoute><Layouts></Layouts></PrivateRoute>} component={<span>users</span>}></Route>
              <Route exact path="/devices" element={<PrivateRoute><Layouts></Layouts></PrivateRoute>} component={<span>devices</span>}></Route>

            </Routes>

          </div>
        </Router>


      </div>
    );
  }
}

export default App;
