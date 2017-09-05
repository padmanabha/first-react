import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/authentication/Login';
import Home from './components/Home';
import Post from './components/posts/Post';

class Main extends Component {
 render(){
     
       return(
           <div className="padding">
               <div className="full col-sm-9">
                   <div className="row">
                       <div className="col-sm-10">
                           <main>
                               <Switch>
                                   <Route name="login" exact path='/' component={Login} />
                                   <Route name="home" exact path='/home' component={Home} />
                                   <Route name="post" path='/posts/:postId' component={Post} />
                               </Switch>
                           </main>
                       </div>
                   </div>
               </div>
           </div>
       ); 
 }    
}

export default Main;