import React,{Component} from 'react';

class CommentItem extends Component{

    render(){
        return(
             <li><h4>{this.props.comment.name}</h4>{this.props.comment.body}</li>
        )
    }

}

export default CommentItem;