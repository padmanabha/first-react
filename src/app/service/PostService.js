import Axios from '../axios/api';

class PostsService {
    constructor() {

    }
    getPosts(callback) {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(
            result => {
                callback(result.data);
            }
        )
    }

    savePost(postObj, callback){
        Axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                "userId": 1,
                "title": "This is a test Post",
                "body": "Testing ...."
            }).then(
            result => {
                callback(result.data);
            }
        ).catch(
            function(error){
                console.log(error);
            }
        )
    }

    getPost(postId, callback){
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+postId).then(
            result => {
                callback(result);
            }
        )
    }
}
export default new PostsService;