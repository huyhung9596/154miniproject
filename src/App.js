import React, { Component } from 'react';
import './css/App.css';
import Heading from './components/Heading'
import Breadcrumb from './components/Breadcrumb'
import Search from './components/Search';
import Table from './components/Table';

class App extends Component {
  render() {
    return ( 
      <div className="container">
        <div className="row">
          <div className="panel panel-primary">
            <Heading />
            <div className= "panel-body">
              <Breadcrumb />
              <div className = "table-responsive">
                <div className="col-md-12 ml-auto" id="add-btn">
                  <button className="btn btn-primary pull-right">Add</button>
                </div>
                &nbsp;
                <Search />
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
