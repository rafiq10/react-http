import React from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends React.Component{
    state = {
        title: '',
        content: '',
        author: 'Rafael'
    }

    postDataHandler = ()=>{
        const postData = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post('/posts',postData)
            .then(response => {
                console.log(response);
            })
        
    }
    render(){
        return(
            <div className="NewPost">
                <h1>Add Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={event => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={event => this.setState({author: event.target.value})} >
                    <option value="Rafael">Rafael</option>
                    <option value="Vero">Vero</option>
                </select>
                <button onClick={this.postDataHandler} >Add Post</button>
            </div>
        )
    }

}

export default NewPost;