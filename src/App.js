import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Services from './Components/Home/Services/Services';
import AddService from './Components/Home/Services/AddService/AddService';
import Reviews from './Components/Home/Reviews/Reviews';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Book from './Components/Book/Book';
import Payment from './Components/Book/Payment/Payment';
import OrderList from './Components/OrderList/OrderList';
import ManageServices from './Components/ManageServices/ManageServices';
import BookingList from './Components/BookingList/BookingList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/book/:productKey">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book></Book>
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/manage-service">
            <ManageServices></ManageServices>
          </Route>
          {/* <Route path="/admin">
            
          </Route> */}
          <PrivateRoute path="/admin">
            <BookingList></BookingList>
          </PrivateRoute>
          <Route path="/orderlist">
            <Services></Services>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/blog">
            <Payment></Payment>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
