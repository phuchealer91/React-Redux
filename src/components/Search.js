import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i>
                        Tìm</button>
                </form>
            </div>
        )
    }
}
