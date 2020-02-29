import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {
        var {index,taskList}= this.props;
        return (
                <tr>
                    <td>{index+1}</td>
                    <td>{taskList.name}</td>
                    <td>
                    <span 
                    className={taskList.status === true ? "badge badge-success" : "badge badge-danger"}
                    >{taskList.status === true ? "Kích hoạt" : "Ẩn"}</span></td>
                    <td>
                        <a href="" className="btn btn-success"><i className="fas fa-pencil-alt"></i> Sửa</a>
                        <a href="" className="btn btn-danger ml-2"><i className="fa fa-trash"></i> Xóa</a>
                    </td>
                </tr>
        )
    }
}
