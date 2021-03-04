import React, { Component } from 'react';
import {connect } from 'react-redux';
import { leadership } from '../store/postSlice';


class Lead extends Component  {
    state = {
        results:[
            {
            id:1,
            name:'vinay',
            telugu:12,
            english:13
            },
            {
                id:2,
                name:'vad',
                telugu:12,
                english:13
            },
            {
                id:3,
                name:'vindfsay',
                telugu:12,
                english:13
            }
    ]
    };
    componentDidMount(){
        this.props.dispatch(leadership())
    }
    render() {
        
        return(
            
               <div class="container ml-4">
                <ol>
                {this.props.results.map((song) => (
                    <li id={song.id} className="my-2">
                      <div className="container">
                        <div className="row ">
                          <div className="col-6">
                            {song.name}&nbsp;&nbsp; {song.total_percentage}
                          </div>
                          <div className="col-6">
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
               </div>
            
        )
    }

}
const mapStateToProps = (state) => {
    return {
      results: state.leader_board,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: dispatch,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Lead);
  