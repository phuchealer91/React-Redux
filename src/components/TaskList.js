import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
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
                    />
        })
        return (
            <div className="form-group">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <div className="form-group">
                                    <form action="">
                                        <input type="text" placeholder="tim" className="form-control" />
                                    </form>
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <select name="" id="" className="form-control">
                                        <option value="">Tất cả</option>
                                        <option value="">Kích hoạt</option>
                                        <option value="">Ẩn</option>
                                    </select>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        {/* Task Item */}
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}
