import React, { Component } from 'react'
import { Loading } from './Loading';
import { Repos } from './Repos';

export default class UserDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUserDetail(window.location.toString().split("/")
        [window.location.toString().split("/").length - 1]);
        this.props.fetchUserRepos(window.location.toString().split("/")
        [window.location.toString().split("/").length - 1]);
    }
    render() {
        if (this.props.loading) {
            return (<Loading />)
        } else {
            return (

                <div className="container">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={this.props.user.avatar_url} alt="" className="img-fluid" />
                                        <div className="mt-3">
                                            <h4>{this.props.user.name}</h4>
                                            <p className="text-secondary mb-1">
                                                {this.props.user.login}
                                            </p>
                                            <div className="stats">
                                                <h6 className="mb-0">Followers</h6> <span>{this.props.user.followers}</span>
                                            </div>

                                            <a href={this.props.user.html_url} className="btn btn-outline-primary">
                                                Github Profile
                                            </a >
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8 mb-9 ">

                            <div className="about-text go-to card  p-3">
                                <h3 className="dark-color">About</h3>
                                <p>{this.props.user.bio}</p>

                            </div>
                            <div className="about-text go-to card  p-3 mt-3">
                                <h3 className="dark-color">Blog</h3>
                                <p>{this.props.user.blog}</p>

                            </div>
                            <div className="mt-3 ">
                                <Repos repos={this.props.repo} repoLoading={this.props.repoLoading} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
