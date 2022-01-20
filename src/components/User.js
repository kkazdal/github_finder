import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class User extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { avatar_url, html_url, login } = this.props.user;
        return (
            <div className="col-md-4 col-sm-6 ">
                <div className="card mt-2">
                    <img src={avatar_url} alt="" className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title"> {login}</h5>

                        <Link to={`/user-detail/${login}`}
                            className="btn btn-primary btn-sm">Profile</Link>
                    </div>

                </div >
            </div >
        )
    }
}
