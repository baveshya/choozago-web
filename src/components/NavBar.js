import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavBar extends Component {
    
    constructor(props) {
            super(props);
    }
    
  	render() {
		return (
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand navbar-brand-emphasized" to='/'>
                                <span className="icon icon-home navbar-brand-icon"></span> Home
                            </Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse ">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link activeClassName='active-nav-link' to='/QRCode/1234'>
                                        <span className="icon icon-location"></span> Book Ticket
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClassName='active-nav-link' to='/QRCode/1234'>
                                        <span className="icon icon-eye"></span>View Ticket
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClassName='active-nav-link' to='/ParkCar/1234'>
                                        <span className="icon icon-cross"></span> Cancel Ticket
                                    </Link>
                                </li>
                            </ul>
                            <ul className='nav navbar-nav navbar-right'>
                                <li>
                                    <Link to='/'>
                                        <span className="icon icon-user"></span> LOGIN
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
		);
	}
}  