
import React from 'react';



const style={
  inputDiv:{
    flexDirection:'row',
    marginTop:20
  },
  labelText:{
    fontWeight:'bold',
    fontSize:20,
  },
  text:{
    fontSize:20
  }
}
export default class Details extends React.Component{

    constructor(props){
      super(props);

      this.state= {

      }
    }

  render(){
    return (
      <div style={{textAlign:'center',marginTop:50,justifyContent:'center'}}>


        <div style={style.inputDiv}>
            <text style={style.labelText}>Name:-  </text>
            <text style={style.text}>{this.props.name}</text>
        </div>

        <div style={style.inputDiv}>
            <text style={style.labelText}>nasa_jpl_url:-  </text>
            <text style={style.text}>{this.props.url}</text>
        </div>

        <div style={style.inputDiv}>
            <text style={style.labelText}>is_potentially_hazardous_asteroid:- </text>
            <text style={style.text}>{this.props.is_potentially_hazardous_asteroid}</text>
        </div>


    
      </div>
    );
  }
}
 


