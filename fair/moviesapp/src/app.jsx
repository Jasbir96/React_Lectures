import React from 'react';
import MoviesPage from "./homePage";
import Login from "./components/login";
import Rental from "./components/rental";
import Customers from "./components/customers";
import NavBar from "./components/navigation";
import  PageNotFound  from "./components/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path="/rental" component={Rental}></Route>
                <Route path="/home" component={MoviesPage}></Route>
                <Redirect from="/movies" to="/home"></Redirect>
                <Route from="/" exact component={MoviesPage}></Route>
                <Route form="/:route" component={PageNotFound}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;