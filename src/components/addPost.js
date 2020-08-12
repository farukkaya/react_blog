import React, { Component } from 'react'
import { addPost } from '../actions/addAction';
import {connect} from 'react-redux'


 class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '',body:''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInputChange(event) {
        const target = event.target;
        this.setState({
          [target.name]: target.value
        });
      }
     
    handleSubmit=(event)=> {
        event.preventDefault();
        
        this.props.addPost(this.state);
        this.props.history.push('/')
      }
    render() {
        return (
         <div className="row">
                <div className="col grid-example s12 m4 l2  "></div>
                <div className="col grid-example s12 m4 l8  ">

                <form onSubmit={this.handleSubmit}>
                    <label>
                    Title:
                    <input  name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
                    </label>
                    <label>
                    Body:
                    <textarea  name="body" value={this.state.body} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
         
                </div>
            <div className="col grid-example s12 m4 l2"></div>
         </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        addPost :(data)=>dispatch(addPost(data))
    }

}
export default connect(null,mapDispatchToProps)(AddPost);
