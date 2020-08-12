import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeBall from '../ball.png';
import {connect} from 'react-redux';



class Home extends Component {

    addPost=()=>{
        this.props.history.push('/addPost')
    }
   
    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(data => {
                return (<div className="post card" key={data.id}>
                    <img src={PokeBall}/>
                    <div className="card-content">
                        <Link to={'/'+data.id}>
                        <span className="card-title red-text">{data.title}</span>
                        </Link>
                        <p>{data.body}</p>
                    </div>
                </div>)
            })

        ) : (
                <div className="center">
                    No Post to show
                </div>
            )
        return (
            <div>
                <div className="home container">
                <div className="row">
    <div className="col s12 m6 l3"> <h4 > Home</h4> </div>
    <div className="col s12 m6 l3"></div>
    <div className="col s12 m6 l3"></div>
    <div className="col s12 m6 l3"> <Link to={'/addPost'}><button className="btn red right add"> Add Post</button> </Link></div>
  </div>
                   
                   {postList}
                </div>
            </div>
        )
    }

}

const mapStateToProps=state=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);