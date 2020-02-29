import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName : '',
      txtPassword: '',
      txtDesc: '',
      txtSelect: 1,
      txtRadio: "en",
      txtCheck: true
    }
  }

  onHandle = (event) => {
    let target = event.target; //output the input
    let name = target.name; //ouput txtName, txtPassword
    // truong hop dac biet cua checkbox
    if(name === "txtSelect"){
        var value = parseInt(target.value);
    }
    else {
      var value = target.type === 'checkbox' ? target.checked : target.value; //output text trong input
    }
    this.setState({
      [name] : value //gan text cho txtName va txtPassword
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

  }
  render() {
  return (
    <div className="container mt-5">      
      <div className="card">
        <div className="card-header">
        Form
        </div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>UserName</label>
                  <input 
                  type="text" 
                  placeholder="user name" 
                  className="form-control" 
                  name="txtName"
                  onChange={this.onHandle}
                  value={this.state.txtName}
                  />
              </div>
              <div className="form-group">
                  <label>password</label>
                  <input 
                  type="password" 
                  placeholder="passwrod" 
                  className="form-control" 
                  name="txtPassword"
                  onChange={this.onHandle}
                  />
              </div>
              <div className="form-group">
                  <label>Desc</label>
                  <textarea 
                  placeholder="Desc" 
                  className="form-control" 
                  name="txtDesc"
                  onChange={this.onHandle}
                  value={this.state.txtDesc}
                  >
                  </textarea>
              </div>
              <div className="form-group">
                  <label>Select</label>
                  <select  
                  className="form-control" 
                  name="txtSelect"
                  onChange={this.onHandle}
                  value={this.state.txtSelect}
                  >
                  <option value={1}>Male</option>
                  <option value={0}>Famel</option>
                  </select>
              </div>
              <div className="radio">
              <label><input
                  type="radio"  
                  name="txtRadio"
                  className="mr-1"
                  value="en"
                  onChange={this.onHandle}
                  checked={this.state.txtRadio === "en"}
                  />English</label>
                  <br/>
              <label><input
                  type="radio"  
                  name="txtRadio"
                  className="mr-1"
                  value="vi"
                  onChange={this.onHandle}
                  checked={this.state.txtRadio === "vi"}
                  />Vietnamese</label>
              </div>
              <div className="form-group">
                  <label><input
                    type="checkbox"
                    className="mr-1"
                    name="txtCheck"
                    value={true}
                    onChange={this.onHandle}
                    checked={this.state.txtCheck === true}
                   />Checkbox</label>
                  
              </div>
              <button type="submit" className="btn btn-success">Save</button>
              <button type="reset" className="btn btn-dark ml-2">Reset</button>
            </form>
            </div>
        </div>
      </div>
  );
}
}

export default App;
