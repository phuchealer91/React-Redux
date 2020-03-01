import React, { Component } from 'react'

export default class TaskItem extends Component {
    // hàm lấy id của item khi click vào và trả về cho component cha (TaskList) rồi đến (App) để cập nhật status
    onHandleUpdate = () => {
        this.props.onUpdateStatusItem(this.props.taskList.id);
    }
     // hàm lấy id của item khi click vào và trả về cho component cha (TaskList) rồi đến (App) để xóa item
    onHandleDelete = () => {
        this.props.onDeleteItem(this.props.taskList.id);
    }

    render() {
        //gọi biến để lấy dữ liệu từ component cha (TaskList) thông qua props
        var {index,taskList}= this.props;
        return (
                <tr>
                    <td>{index+1}</td>
                    <td>{taskList.name}</td>
                    <td>
                    {/* Check điều kiện của status */}
                    <span 
                    className={taskList.status === true ? "badge badge-success" : "badge badge-danger"}
                    onClick={this.onHandleUpdate}
                    >{taskList.status === true ? "Kích hoạt" : "Ẩn"}</span></td>
                    <td>
                        <a href="" className="btn btn-success"><i className="fas fa-pencil-alt"></i> Sửa</a>
                        <a 
                        href="" 
                        className="btn btn-danger ml-2"
                        onClick={this.onHandleDelete} //gọi sự kiện delete
                        ><i className="fa fa-trash"></i> Xóa</a>
                    </td>
                </tr>
        )
    }
}
