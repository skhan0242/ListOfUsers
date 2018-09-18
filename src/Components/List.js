import React, {Component} from "react";
import {connect} from "react-redux"
import User from "./User"

class Lists extends Component{
    render(){
        return(
            <div className="list-items">

                <ul>
                    {
                        this.props.data.map((list) =>(
                            <li key={list.id} onClick={() => this.props.add(list)}>{list.first} {list.last}</li>                        
                        ))
                    }
                </ul>
                <User userDetails={this.props.list.items} />
            </div>
        )
    }
}

function mapStateToProps (state){
    return{
        list:state.list
    }
}

function mapDispatchToProps(dispatch){
    return{
        add:(value) =>{
            dispatch({
                type:"FETCH",
                payload:value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);