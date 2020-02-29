import React, { Component } from 'react'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksKey : [] //luu tru cac ten cong viec
        }
    }

    UNSAFE_componentWillMount() {
       if(localStorage && localStorage.getItem('tasksKey')){
           var tasks = JSON.parse(localStorage.getItem('tasksKey'));
            this.setState({
                tasksKey : tasks
            })
       }
    }
    
    onGenerate = () => {
        var tasksValue = [
            {
                id: uuidv4(),                
                name: 'Hoc lap trinh mien phi F8',
                status: true
            },
            {
                id: uuidv4(),       
                name: 'Di boi',
                status: false
            },
            {
                id: uuidv4(),       
                name: 'Di cong vien',
                status: true
            }
        ];
        // console.log(tasks);
        this.setState({
            tasks: tasks
        })
        localStorage.setItem("tasksKey", JSON.stringify(tasksValue)); //change object -> string

    }

    render() {
        var {tasksKey} = this.state; // var tasksKey = this.state.tasksKey;
        return (
            <div>
                <h2 className="text-center mt-4 mb-4">Quản lý công việc</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            {/* TaskForm */}
                            <TaskForm />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <button className="btn btn-success">
                                <i className="fa fa-plus-circle"></i>
                                &nbsp;Thêm công việc
            
                            </button>
                            <button 
                            className="btn btn-danger ml-2"
                            onClick={this.onGenerate}
                            >                              
                            Generate
                            </button>
                            {/* Control Search - Sort*/}
                            <Control />
                            
                            {/* TaskList - Table */}
                                <TaskList tasksParent={tasksKey}/>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
