import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import {createBrowserHistory} from 'history'
import Edit from '../Edit/Edit';
import Main from '../Main/Main';
import EditAd from '../EditAd/EditAd';
import classes from './Skeleton.module.css'
import Details from '../Details/Details';

const history = createBrowserHistory()

function Skeleton() {
    return (
        <div>
            <Router history={history}>
                <ul className={classes.Navbar}>
                    <li className={classes.NavigationLi}><Link to='/main'>Home</Link></li>
                    <li className={classes.NavigationLi}><Link to='/edit'>Add an Announcement</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/edit' component={Edit} />
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/edit-ad/:id' component={EditAd} />
                    <Route exact path='/details/:id' component={Details} />
                    <Redirect to="/main" />
                </Switch>
            </Router>
        </div>
    )
}

export default Skeleton
