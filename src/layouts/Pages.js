import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddNewPerson from "../components/Persons/AddNewPerson";
import Home from "../components/Home/Home";

const Pages = () => {
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route to="/person/add">
                <AddNewPerson />
            </Route>
        </Switch>
    )
}

export default Pages