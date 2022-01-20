import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand ml-5 ">
                            <i to="/" className={this.props.icon}></i>{this.props.title}
                        </Link>
                        <Link to="/about" className="btn btn-secondary" >About</Link>
                    </div>

                </nav>
            </div>
        )
    }
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github p-2"
}

export default Navbar