import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
    render() {
        return (
            <div className="form-group mt-3 d-flex">
                {/* Search */}
                <Search />
               {/* Sort */}
               <Sort />
            </div>

        )
    }
}
