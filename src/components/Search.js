import React, { useState } from 'react'


const Search = ({ searchUsers, userList, clearItems }) => {

    const [keyword, setKeyWord] = useState("")

    function onChange(e) {
        setKeyWord(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault();
        searchUsers(keyword)
        setKeyWord("");
    }
    return (
        <div className="container mt-3">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 ">
                    <input type="text" value={keyword}
                        onChange={onChange} className="form-control"
                        aria-describedby="basic-addon1" />
                    <div className="input-group-prepend">
                        <button className="btn btn-primary"
                            type="submit">Search</button>
                    </div>
                </div>
            </form>
            {
                userList.length > 0 ?
                    <button onClick={clearItems}
                        className="btn btn-secondary btn-block btn-sm">Clear Items</button>
                    : <p></p>
            }
        </div>
    )
}
export default Search;