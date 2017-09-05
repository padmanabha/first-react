import React,{Component} from 'react';

class SideBar extends Component{

    render(){
        return(
           
            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
              
              	<ul className="nav">
          			<li><a href="#" data-toggle="offcanvas" className="visible-xs text-center"><i className="glyphicon glyphicon-chevron-right"></i></a></li>
            	</ul>
               
                <ul className="nav hidden-xs" id="lg-menu">
                    <li className="active"><a href="#featured"><i className="glyphicon glyphicon-list-alt"></i> Featured</a></li>
                    <li><a href="#stories"><i className="glyphicon glyphicon-list"></i> Stories</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-paperclip"></i> Saved</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-refresh"></i> Refresh</a></li>
                </ul>
                
              
              	
              <ul className="nav visible-xs" id="xs-menu">
                  	<li><a href="#featured" className="text-center"><i className="glyphicon glyphicon-list-alt"></i></a></li>
                    <li><a href="#stories" className="text-center"><i className="glyphicon glyphicon-list"></i></a></li>
                  	<li><a href="#" className="text-center"><i className="glyphicon glyphicon-paperclip"></i></a></li>
                    <li><a href="#" className="text-center"><i className="glyphicon glyphicon-refresh"></i></a></li>
                </ul>
              
            </div>
           
        )
    }
}

export default SideBar;