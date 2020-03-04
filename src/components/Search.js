import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    onHandleSearch = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmitSearch = () => {
        this.props.onSearchTask(this.state.keyword);
    }
    
    render() {
        return (
                <div className="col-md-6 d-flex">
                    <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search" 
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.onHandleSearch}
                    />
                    <button 
                    className="btn btn-success my-2 my-sm-0" 
                    type="button"
                    onClick={this.onSubmitSearch}
                    ><i className="fa fa-search"></i>
                        Tìm</button>
                </div>
        )
    }
}
