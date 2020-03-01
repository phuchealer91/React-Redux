import React, { Component } from 'react'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksKey : [], //luu tru cac ten cong viec
            isDisplayForm: false // Trang thai an hoac hien form
        }
    }
    //Sử dụng componentWillMount để đổ dữ liệu vào tasksKey trk khi render 
    UNSAFE_componentWillMount() {
       if(localStorage && localStorage.getItem('tasksKey')){ //kiểm tra có tồn tại localStorage và localStorage có dữ liệu của key là TasksKey không 
           var tasks = JSON.parse(localStorage.getItem('tasksKey')); //covert data từ string sang object
            this.setState({
                tasksKey : tasks //gọi lại setState để lưu dữ liệu
            })
       }
    }
    
    // onGenerate = () => {
    //     var tasksValue = [
    //         {
    //             id: uuidv4(),                
    //             name: 'Hoc lap trinh mien phi F8',
    //             status: true
    //         },
    //         {
    //             id: uuidv4(),       
    //             name: 'Di boi',
    //             status: false
    //         },
    //         {
    //             id: uuidv4(),       
    //             name: 'Di cong vien',
    //             status: true
    //         }
    //     ];
    //     // console.log(tasks);
    //     this.setState({
    //         tasksKey: tasksValue
    //     })
    //     localStorage.setItem("tasksKey", JSON.stringify(tasksValue)); //covert dữ liệu object -> string

    // }
    //Hàm thay đổi trạng thái ẩn, hiện của task form
    onToggleTaskForm = () => {
        this.setState({
            isDisplayForm : true
        })
    }
    //Hàm nhận props được truyền từ component con (taskForm) để thực hiện thay đổi trạng thái ẩn form
    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }
    // Hàm lấy dữ liệu từ con (TaskForm) thông qua props
    onGetTaskForm = (data) => { //data chứa dữ liệu từ con (TaskForm) chuyển sang  
       var {tasksKey} = this.state;
       data.id = uuidv4(); //dòng này gán id mới cho object đồng thời trả về 1 object mới được thêm vào
       tasksKey.push(data); //gán object mới này vào array trên state
       this.setState({
           tasksKey: tasksKey
       });
    //    Típ tục lưu dữ liệu bằng localStorage
       localStorage.setItem('tasksKey',JSON.stringify(tasksKey));
        
    }
    //hàm lấy id từ con (TaskList) - con (TaskItem) -> thực hiện update status
    onUpdate = (id) => {
        var {tasksKey} = this.state;
        var indexTask = this.findIndexTask(id); //biến để trả về giá trị index của object
        if(indexTask !== -1){ //Giá trị indexTask (index) có tồn tại
            tasksKey[indexTask].status = !tasksKey[indexTask].status; //trỏ từ arr tasksKey của index đó tới status
            this.setState({
                tasksKey: tasksKey //Cập nhật lại setState
            })
        //    Típ tục lưu dữ liệu bằng localStorage
       localStorage.setItem('tasksKey',JSON.stringify(tasksKey));
        }
    }
    //hàm lấy id từ con (TaskList) - con (TaskItem) -> thực hiện xóa item
    onDelete = (id) => {
        var {tasksKey} = this.state;
        var indexTask = this.findIndexTask(id); //biến để trả về giá trị index của object
        if (window.confirm("Bạn có muốn xóa không?")) {
        if(indexTask !== -1){ //Giá trị indexTask (index) có tồn tại
            tasksKey.splice(indexTask,1); //Xóa 1 phần tử tại vị trí index
            this.setState({
                tasksKey: tasksKey //Cập nhật lại setState
            })
        //    Típ tục lưu dữ liệu bằng localStorage
       localStorage.setItem('tasksKey',JSON.stringify(tasksKey));
        }
    }
        this.onCloseForm();
    }
    // Hàm tìm vị trí index từ id
    findIndexTask = (id) => {
        var {tasksKey} = this.state;
        var result = -1; //gán ban đầu giá trị -1
        tasksKey.forEach((task,index)=>{ //dùng foreach để lặp qua các object 
            if(task.id === id){ //nếu object có id trùng với id click thì trả về index
                result = index;
            }
        })
        return result;
    }
    render() {
        //lấy dữ liệu từ state 
        var {isDisplayForm,tasksKey} = this.state; // var tasksKey = this.state.tasksKey;
        // props onRetriveForm để thông qua component con (TaskForm) thực hiện hàm
        var elementTaskForm = (isDisplayForm === true) ? <TaskForm 
                                                                    onRetriveForm={this.onCloseForm} //props đóng form
                                                                    onRetriveTaskForm={this.onGetTaskForm} //props để thêm dữ liệu vào 
                                                                    /> : '';
        return (
            <div>
                <h2 className="text-center mt-4 mb-4">Quản lý công việc</h2>
                <div className="container">
                    <div className="row">
                    {/* Check điều kiện isDisplayForm */}
                        <div className={isDisplayForm === true ? "col-sm-12 col-md-4" : " "}>
                            {/* TaskForm */}
                            {elementTaskForm}
                        </div>
                        {/* Check điều kiện isDisplayForm để hiển thị component*/}
                        <div className={isDisplayForm === true ? "col-sm-12 col-md-8" : "col-sm-12 col-md-12"}>
                            <button 
                            className="btn btn-success"
                            onClick={this.onToggleTaskForm} //Bắt sự kiện click -> hiện, ẩn task form
                            >
                                <i className="fa fa-plus-circle"></i>
                                &nbsp;Thêm công việc
                            </button>
                            {/* <button 
                            className="btn btn-danger ml-2"
                            onClick={this.onGenerate}
                            >                              
                            Generate
                            </button> */}
                            {/* Control Search - Sort*/}
                            <Control />
                            {/* TaskList - Table */}
                            {/* tạo props để chuyển dữ liệu từ component cha (App) sang component con (TaskList) */}
                            <TaskList 
                            tasksParent={tasksKey}
                            onUpdateStatus={this.onUpdate} //props truyền qua (TaskList) -> update
                            onDeleteId={this.onDelete} //props truyền qua (TaskList) -> delete
                                />
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
