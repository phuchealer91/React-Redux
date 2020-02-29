import React, { Component } from 'react'

export default class TaskForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-success">Thêm công việc <button type="button" className="close" data-dismiss="alert"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button></div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label >Tên</label>
                            <input type="text" className="form-control" placeholder="ffff" />
                        </div>
                        <div className="form-group">
                            <label >Trạnng thái</label>
                            <select name="" id="" className="form-control">
                                <option value="">Kích hoạt</option>
                                <option value="">Ẩn</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-success"><i className="fa fa-check"></i> Save</button>
                            <button type="button" className="btn btn-danger ml-2"><i className="fa fa-times"></i> Canel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
