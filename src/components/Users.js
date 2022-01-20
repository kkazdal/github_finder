import React, { Component } from 'react'
import { Loading } from './Loading';
import User from './User';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    login: "sadikturan",
                    avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
                    html_url: "https://github.com/sadikturan",
                },
                {
                    login: "mojombo",
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                },
                {
                    login: "mojombo",
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                },
                {
                    login: "defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt",
                },
            ]
        }
    }
    render() {
        if (this.props.loading) {
            return <Loading />
        } else {
            return (
                <div className="container mt-3">
                    <div className="row">
                        {this.props.users.map((user, index) =>
                        (
                            <User key={index} user={user} />
                        )
                        )}
                    </div>

                </div>
            )
        }

    }
}
