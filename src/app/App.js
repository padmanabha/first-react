import React, { Component } from 'react';
import './App.css';
import SideBar from './common/SideBar';
import Header from './common/Header';
import Main from './Main';

class App extends React.Component {
  render() {

    return (
       <div className="wrapper">
        <div className="box">
          <div className="row row-offcanvas row-offcanvas-left">
            <SideBar />
            <div className="column col-sm-10 col-xs-11" id="main">
              <Header />
              <div className="main-content" id="router">
                <Main />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

