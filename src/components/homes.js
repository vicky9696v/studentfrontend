import React, { Component } from 'react';

import {connect } from 'react-redux';
//import {login } from '../store/postSlice';

import { studentform, } from '../store/postSlice';

class Home extends Component {
    state = {
        name:"",
        physics:0,
        maths:0,
        chemistry:0,
        total_marks:0,
        total_percentage:0.0,
    };
    onChange = e =>
    {
        this.setState({[e.target.id]:parseInt(e.target.value)})
    }
    onChangename = e =>
    {
        this.setState({[e.target.id]:e.target.value})
    }
    onSubmit = async e =>
    {
        e.preventDefault();
        try{
        
        let data = {
        name:this.state.name,
        english:this.state.english,
        maths:this.state.maths,
        telugu:this.state.telugu,
        total_marks:this.state.maths+this.state.english+this.state.telugu,
        total_percentage:(((this.state.maths+this.state.english+this.state.telugu)/300)*100),
        }
        this.props.dispatch(studentform(data))
       
        

        
        
        }
        catch(error)
        {
            console.log(error.response)
        }
    }


    render() {
        return (
            
              
            <form onSubmit={this.onSubmit.bind(this)}>
                <div class="container ml-4">
                
                <div class='row ml-3 mt-2'>
                <label for="name" id="name_label">name:</label>
                <input type="text" id="name"  onChange={this.onChangename}/>

                </div>
                <div class='row ml-3 mt-2'>
                <label for="name" id="name_label">Roll number:</label>
                <input type="text" id="roll number"  onChange={this.onChangename}/>

                </div>

                <div class='row ml-3 mt-2'>
                <label for="name" id="maths_label">maths:</label>
                <input type="number" id="maths" onChange={this.onChange} />

                </div>
                <div class='row ml-3 mt-2'>
                <label for="name" id="maths_label">physics:</label>
                <input type="number" id="maths" onChange={this.onChange} />

                </div>
                <div class='row ml-3 mt-2'>
                <label for="name" id="maths_label">chemistry:</label>
                <input type="number" id="telugu" onChange={this.onChange} />

                </div>
                {/* <div class='row ml-3 mt-2'>
                <label for="name" id="maths_label">maths:</label>
                <input type="number" id="total_marks" onChange={this.onChange} />

                </div>
                <div class='row ml-3 mt-2'>
                <label for="name" id="maths_label">maths:</label>
                <input type="number" id="total_percentage" onChange={this.onChange} />

                </div> */}
                
                
                

                
                

            </div>
            <div class="row ml-4">
            <button  value="submit">submit</button>

            </div>
            </form>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      registered: state.justUpdated,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: dispatch,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  