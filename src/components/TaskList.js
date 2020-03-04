import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    //Hàm để truyền dữ liệu sang cha (App) filter task
    onHandleFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilterTask(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }
    
    render() {
        //gọi biến để lấy dữ liệu từ component cha (App) thông qua props
        var {tasksParent} = this.props;
        // Map dữ liệu ra cho từng TaskItem
        var elements = tasksParent.map((task,index)=>{
            //Tạo props để từ cha (TaskList) đổ sang con (TaskItem) 
            return <TaskItem 
                    key={task.id}
                    index={index}
                    taskList={task}
                    onUpdateStatusItem={this.props.onUpdateStatus} //props để truyền qua (TaskItem) -> update
                    onDeleteItem={this.props.onDeleteId} //props để truyền qua (TaslItem) -> xóa
                    onEditItem={this.props.onEditId}
                    />
        })
        return (
            <div className="form-group table-responsive">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Thời gian</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <div className="form-group">
                                        <input 
                                        type="text" 
                                        placeholder="Tìm kiếm tên công việc" 
                                        className="form-control" 
                                        name="filterName"
                                        onChange={this.onHandleFilter}
                                        />
                                </div>
                            </td>
                            <td colSpan="2">
                                <div className="form-group">
                                    <select 
                                    className="form-control"
                                    name="filterStatus"
                                    onChange={this.onHandleFilter}
                                    >
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Kích hoạt</option>
                                        <option value={1}>Ẩn</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        {/* Task Item */}
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}
