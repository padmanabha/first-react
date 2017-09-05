import React, {Component} from 'react';
import PostItem from './PostItem';
import PostService from '../../service/PostService';

class Posts extends Component{

    constructor(props){
        super(props);
        this.state = {posts : []};
    }

    componentDidMount(){
        PostService.getPosts(posts => {
            this.setState({ 'posts': posts });
        });
     
       
    }
    
    render(){

        return(
            <div>
                <h4>Posts </h4>
                <hr />
                {
                    this.state.posts.map(post => {
                        return (
                                <PostItem postItem={post} />
                        )
                    })

                }


            </div>
        )

    }
}

export default Posts;