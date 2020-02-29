import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
                 <div className="dropdown ml-4">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-magic"></i> Sắp Xếp
                        </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button"><i className="fas fa-sort-alpha-down"></i> Từ A - Z</button>
                        <button className="dropdown-item" type="button"><i className="fas fa-sort-alpha-down-alt"></i> Từ Z - A</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
        )
    }
}
