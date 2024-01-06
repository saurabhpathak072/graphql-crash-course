import Axios from 'axios'
export const fetchCommentsList = async ()=>{
    const {data} = await Axios.get('https://jsonplaceholder.typicode.com/comments');
    return data;
};

export const fetchPostById = async (id)=>{
    const {data} = await Axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
    return data;
};