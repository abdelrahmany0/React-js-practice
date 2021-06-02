import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Team from "./Team";
import Company from "./Company";

class About extends Component {
    render() {
        return (
            <Router>
                <div className="row my-4 container">
                    <div className="col-3">
                        <h2>About</h2>

                        <ul>
                            <li>
                                <Link className="nav-link" to="/about/team">Team</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/about/company">Company</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                            <Route exact path='/about/team' component={Team}/>
                            <Route exact path='/about/company' component={Company}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default About;