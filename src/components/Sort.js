import React, { Component } from 'react'

export default class Sort extends Component {
    //C2
    constructor(props) {
        super(props);
        this.state = {
            sort : {
                by: 'name',
                value: 1
            }
        }
    }
    

    onHandleSort = async (sortBy,sortValue) => {
    //C1    // this.props.onSortTask(sortBy,sortValue);
    //C2 truyền callback
        //  this.setState({
        //     sort : {
        //         by: sortBy,
        //         value: sortValue
        //     }
        // },() => {this.props.onSortTask(this.state.sort)})
    //C3 dùng async và await
    await  this.setState({
        sort : {
            by: sortBy,
            value: sortValue
        }
    })
    this.props.onSortTask(this.state.sort);
        // console.log(this.state.sort);
    }
    render() {
        //C2
        var {sort} = this.state;
        //C1
        // var {onSortByTask,onSortValueTask} = this.props;
        return (
                 <div className="dropdown ml-4">
                    <button className="btn btn-success dropdown-toggle" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-magic"></i> Sắp Xếp
                        </button>
                    <div className="dropdown-menu">
                        <button
                        //C2
                        className={(sort.by === "name" && sort.value === 1) ? "dropdown-item active" : "dropdown-item"}
                        // C1 
                        // className={(onSortByTask === "name" && onSortValueTask === 1) ? "dropdown-item active" : "dropdown-item"}
                        type="button"
                        name="sortBy"
                        onClick={()=>{this.onHandleSort('name',1)}}
                        ><i className="fas fa-sort-alpha-down"></i> Từ A - Z</button>
                        <button
                        //C2
                        className={(sort.by === "name" && sort.value === -1) ? "dropdown-item active" : "dropdown-item"}
                        //C1 
                        // className={(onSortByTask === "name" && onSortValueTask === -1) ? "dropdown-item active" : "dropdown-item"}
                        type="button"
                        name="sortBy"
                        onClick={()=>{this.onHandleSort('name',-1)}}
                        ><i className="fas fa-sort-alpha-down-alt"></i> Từ Z - A</button>
                        <div className="line-item"></div>
                        <button
                        //C2
                        className={(sort.by === "status" && sort.value === 1) ? "dropdown-item active" : "dropdown-item"}
                        //C1 
                        // className={(onSortByTask === "status" && onSortValueTask === 1) ? "dropdown-item active" : "dropdown-item"}
                        type="button"
                        name="sortValue"
                        onClick={()=>{this.onHandleSort('status',1)}}
                        >Trạng thái kích hoạt</button>
                        <button
                        //C2
                        className={(sort.by === "status" && sort.value === -1) ? "dropdown-item active" : "dropdown-item"}
                        //C1 
                        // className={(onSortByTask === "status" && onSortValueTask === -1) ? "dropdown-item active" : "dropdown-item"}
                        type="button"
                        name="sortValue"
                        onClick={()=>{this.onHandleSort('status',-1)}}
                        >Trạng thái ẩn</button>
                    </div>
                </div>
        )
    }
}
