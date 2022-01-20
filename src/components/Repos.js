import React from 'react'
import { Loading } from './Loading';
export const Repos = (props) => {
    if (props.repoLoading) {
        return (<Loading />)
    } else {
        return (
            <div>
                <ul className="list-group">
                    {
                        props.repos.map((repo, index) => {
                            return (
                                <a href={repo.html_url} key={index} className="list-group-item ">
                                    <div className="row ">
                                        <div className="col-1">
                                            <i className="fas fa-arrow-circle-right p-2">
                                            </i>
                                        </div>
                                        <div className="col-11 ">
                                            <h4 className="list-group-item-heading">  {repo.name}</h4>
                                        </div>
                                    </div>
                                    <p className="list-group-item-text">{repo.description}</p>
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
