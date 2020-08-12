import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/deleteAction'
class Post extends Component {

    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render() {
      
        const post=this.props.post?(
            <div className="row ">
                <div className="col grid-example s12 m4 l2 teal lighten-1"></div>
            <div className="col grid-example s12 m4 l8 teal lighten-1">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title"> {this.props.post.title}</span>
                  <p>{this.props.post.body}</p>
                </div>
                <div className="card-action center">
                    <button onClick={this.handleClick} className="btn red"> Delete Post</button>
                </div>
              </div>
            </div>
            <div className="col grid-example s12 m4 l2 teal lighten-1"></div>
         
          </div>
            
        ):(
            <div className="center">
                No Post to show
            </div>
        )
        return (
            <div>
               {post}
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.post_id;
    return {
        post:state.posts.find(q=>q.id==id)
    }

}
const mapDispatchToProps=dispatch=>{
    return {
        deletePost :(id)=>dispatch(deletePost(id))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Post)
