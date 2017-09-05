import React, {Component} from 'react';
import Posts from './posts/Posts';

class Home extends Component{
    constructor(props){
        super(props);
    }
    

    componentDidMount(){
    }

    render(){
       
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

export default Home;
