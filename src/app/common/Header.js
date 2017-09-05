import React,{Component} from 'react';
import Modal from '../components/posts/CreateModal';
import PostService from '../service/PostService';


class Header extends Component{

  constructor(props){
    super(props);
    this.state = {view : []};
  }
  getInitialState() {
    return { view: { showModal: false } }
  }
  handleHideModal() {
    this.setState({ view: { showModal: false } })
  }
  handleShowModal() {
    this.setState({ view: { showModal: true } })
  }

  handleSave(post){
      PostService.savePost(post);
  }
    render(){
        return (
         <div className="header-container">
            {this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal.bind(this)}/> : null}
          <div className="navbar navbar-blue navbar-static-top">
             <div className="navbar-header">
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/home" className="navbar-brand logo">b</a>

            </div>
            
        		 
        	
                  	<nav className="collapse navbar-collapse" role="navigation">
                    <form className="navbar-form navbar-left">
                        <div className="input-group input-group-sm search-bar" >
                          <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                          <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                          </div>
                        </div>
                    </form>
                    
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#"><i className="glyphicon glyphicon-home"></i> Home</a>
                      </li>
                      <li>
                        	
                        <a  role="button" onClick={this.handleShowModal.bind(this)}  data-toggle="modal"><i className="glyphicon glyphicon-plus"></i> Post</a>
                        	
                      </li>
                      <li>
                        <a href="#"><span className="badge">badge</span></a>
                      </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-user"></i></a>
                        <ul className="dropdown-menu">
                          <li><a href="">More</a></li>
                          <li><a href="">More</a></li>
                          <li><a href="">More</a></li>
                          <li><a href="">More</a></li>
                          <li><a href="">More</a></li>
                        </ul>
                      </li>
                    </ul>
                  	</nav>
                </div>    
                </div>           
 );
    }
}

export default Header;