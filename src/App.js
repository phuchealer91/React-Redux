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
            isDisplayForm: false, // Trang thai an hoac hien form
            taskEditting: null,
            filters : {
                name: '',
                status: -1
            }
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
        // kiểm tra điều kiện form đang hiện và data taskEditting không null 
        // -> thực hiện giữ nguyên form hiện và thực hiện cho taskEditting bằng null
        if(this.state.isDisplayForm && this.state.taskEditting !== null){
        this.setState({
            isDisplayForm : true,
            taskEditting: null //fix khi ấn sửa -> ấn thêm cv thì nó ko reset lại form thêm cv mà vẫn giữ nguyên form cập nhật cv
        })
        }
        // Ngược lại thì bình thường
        else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditting: null //fix khi ấn sửa -> ấn thêm cv thì nó ko reset lại form thêm cv mà vẫn giữ nguyên form cập nhật cv
            })
        }
    }
    // Hàm thay đổi trạng thái hiện form
    onShowUpTaskForm = () => {
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
        // console.log(data);  
       var {tasksKey} = this.state;
    //    add new task
       if(data.id === ''){
        data.id = uuidv4(); //dòng này gán id mới cho object đồng thời trả về 1 object mới được thêm vào
        tasksKey.push(data); //gán object mới này vào array trên state
       }
    //    editing
       else{
        var indexTask = this.findIndexTask(data.id);
        tasksKey[indexTask] = data;
       }
  
       this.setState({
           tasksKey: tasksKey,
           taskEditting: null
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

    // Một hàm xóa khác dùng filter (task.id !== id) có nghĩa là nó sẽ pải thỏa điều kiện là lấy các giá trị
    // còn lại và bỏ đi giá trị có id trùng nhau sau đó gán vào setState
    // deleteItem = (id) => {
    //     var { tasks } = this.state
    //     var kqFilter = tasks.filter(task => task.id !== id)
    //     this.setState({
    //       tasks: kqFilter
    //     })
    //     localStorage.setItem('tasks', JSON.stringify(kqFilter))
    //   }

    // hàm update item 
    onEdit = (id) => {
        var {tasksKey} = this.state;
        var indexTask = this.findIndexTask(id); //biến để trả về giá trị index của object
        var taskEditting = tasksKey[indexTask]; //Tạo ra state taskEditting để lưu data update gán task với index tương ứng
        this.setState({
            taskEditting: taskEditting
        })
        this.onShowUpTaskForm(); //show task form lên
    }

    //Hàm lấy data từ con (TaskList) cần tạo thêm 2 state để lưu dữ liệu tù bên con vào sử dụng
    onFilter = (filterName,filterStatus) => {
        filterStatus = parseInt(filterStatus); //covert string -> number 
        //gán dữ liệu lấy đc vào 2 set mới tạo để sử dụng
        this.setState({
            filters : {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
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
        var {isDisplayForm,tasksKey,taskEditting,filters} = this.state; // var tasksKey = this.state.tasksKey;
        //Đoạn script xử lý filter
        if(filters){
            if(filters.name){
               tasksKey = tasksKey.filter((tasksKey)=>{
                    return tasksKey.name.toLowerCase().indexOf(filters.name) !== -1; //!== -1 mới tồn tại
                })
            }
            // ko cần check điều kiện filterStatus vì ko xử lý dữ liệu nhập vào (null,rỗng, != 0)
            // Mà mặc định sẵn 3 giá trị -1, 0 ,1 rồi
            tasksKey = tasksKey.filter((tasksKey)=>{
                    if(filters.status === -1){ //-1 trả về all luôn
                        return tasksKey;
                    }
                    else {
                        return tasksKey.status === (filters.status === 0 ? true : false); //covert 1 vs 0 ra true và false
                    }
                })
        }
        // props onRetriveForm để thông qua component con (TaskForm) thực hiện hàm
        var elementTaskForm = (isDisplayForm === true) 
                                            ? <TaskForm 
                                            onRetriveForm={this.onCloseForm} //props đóng form
                                            onRetriveTaskForm={this.onGetTaskForm} //props để thêm dữ liệu vào
                                             taskEdit={taskEditting}
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
                            onEditId={this.onEdit}
                            onFilterTask={this.onFilter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
