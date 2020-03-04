import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
    render() {
        return (
            <div className="form-group mt-3 d-flex">
                {/* Search */}
                <Search 
                    onSearchTask={this.props.onRetriveSearchTask}
                />
               {/* Sort */}
               <Sort 
               //C1
                //    onSortTask={this.props.onRetriveSortTask}
                //    onSortByTask={this.props.onSortBy}
                //    onSortValueTask={this.props.onSortValue}
                //C2
                onSortTask={this.props.onRetriveSortTask}

               />
            </div>

        )
    }
}
