import React, {Component} from 'react';
import AxiosApi from '../../axios/api';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = { userName: ''};
        this.state = { password: ''}
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount(){
       
    }

    handleSubmit(event){
          
         event.preventDefault();
         //AxiosApi.get('/data/users.json').then(result => {
            //var users = result.data;
           // users.forEach((user, index) => {
                if(this.state.userName == "admin" 
                && this.state.password == "admin"){
                    this.props.history.push('/home');
                }
          //  });
        //});
        
    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    render(){

        return(

            <div id="login-overlay" className="modal-dialog" styleName="margin-top:100px">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span ></span><span className="sr-only"></span></button>
                        <h4 className="modal-title" id="myModalLabel">Login</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="well">
                                    <form id="loginForm" onSubmit = {this.handleSubmit} >
                                        <div className="form-group">
                                            <label for="username" className="control-label">Username</label>
                                            <input type="text"  value={this.state.userName} onChange={this.handleUserNameChange} className="form-control" />
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="control-label">Password</label>
                                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control"   />
                                            <span className="help-block"></span>
                                        </div>
                                        <button type="submit"  className="btn btn-info btn-block">Login</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <h4>ReactJS Demo Project</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      
        );
    }
}

export default Login;