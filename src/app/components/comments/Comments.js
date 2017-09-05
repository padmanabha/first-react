import React,{Component} from 'react';
import CommentItem from './CommentItem';
import CommentService from '../../service/CommentService';

class Comments extends Component{

    constructor(props){
        super(props);
        this.state = {
            "comments": []
        }
    }

    componentDidMount(){
        var postId= this.props.postId;
        CommentService.getComments(postId, (comments) => {
            this.setState({"comments": comments});
        });
       

    }
    
    render(){
        let commentsCount = this.state.comments.length;
        return(
            <div className="comments">
                <div>
                    <h5>{commentsCount} Comments</h5>
                </div>
                <ul className="comments-list">
                    {
                        this.state.comments.map(comment => {
                            return (
                                <CommentItem comment={comment} />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Comments;