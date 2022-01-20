import React from 'react'

export const Alert = (props) => {


    return (
        props.alert !== null ? (
            <div className="alert alert-warning alert-dismissible fade show text-center"
                role="alert">
                <strong className="p-2">{props.alert.type}!</strong>
                {props.alert.message}
                <button type="button" className="btn btn-primary
                 close m-2" data-dismiss="alert"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) : <p></p>
    )
}
