import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path='/' exact component = {ListEmployeesComponent}></Route>
                <Route path='/employees' component = {ListEmployeesComponent}></Route>
                <Route path='/add-employee/:id' component = {CreateEmployeeComponent}></Route>
                {/* <Route path='/update-employee/:id' component = {UpdateEmployeeComponent}></Route> */}
                <Route path='/view-employee/:id' component = {ViewEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
