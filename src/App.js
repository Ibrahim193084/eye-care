import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import DoctorDetails from './Pages/Doctors/DoctorDetails/DoctorDetails';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Signup/Signup';

function App() {
  return (
    <div className="bg-secondary">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/details/:serviceId">
          <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/doctorDetails/:doctorsId">
            <DoctorDetails></DoctorDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
   
   
    </div>
  );
}

export default App;
