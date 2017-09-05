import React,{Component} from 'react';
import Comments from '../comments/Comments'

class PostItem extends Component{

    componentDidMount(){

    }
    
    render(){
        return(
        <div>
            <section className="post-heading">
                <div className="row">
                    <div className="col-md-11">
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="..." />
                                </a>
                            </div>
                            <div className="media-body">
                                <a href={'/posts/' + this.props.postItem.id} className="anchor-username"><h4 className="media-heading">{this.props.postItem.title}</h4></a>
                                <a href="#" className="anchor-time">51 mins</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <a href="#"><i className="glyphicon glyphicon-chevron-down"></i></a>
                    </div>
                </div>
            </section>
            <section className="post-body">
                <p>{this.props.postItem.body}</p>
            </section>
            <section className="post-footer">
                <hr />
                <div className="post-footer-option container">
                    <div>
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>

                        </ul>
                    </div>
                    <Comments postId={this.props.postItem.id} />
                </div>
            </section>
        </div>
        )
        

    }
}

export default PostItem;