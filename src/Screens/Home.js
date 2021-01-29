
import React from 'react';
import { Button,TextField } from '@material-ui/core';
import Details from './Details';

export default class Home extends React.Component{

    constructor(props){
      super(props);

      this.state= {
        dataSource:[],
        showId:true,
        asteroId:'',
        data:false,
        details:true,
        name:'',
        url:'',
        is_potentially_hazardous_asteroid:''
      }
    }

    componentDidMount(){
      let url='https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=fI2eNwr318OqhcJm0Avfn5TszH8zjRFkxvB2kgih'
        fetch(url)
            .then(response => response.json())
            .then((responseJson)=> {
                
            this.setState({
                    loading: false,
                    dataSource: responseJson.near_earth_objects
                })
                
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }

    submit(id){
      fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=qzR9oSCAAaQsXUcAXMQzZZORQ5KCK7hI2k6Tj5HK`)
      .then((response)=> response.json())
      .then((Json) => {
        this.setState({details:false,
          name:Json.name,url:Json.nasa_jpl_url,
          is_potentially_hazardous_asteroid:Json.is_potentially_hazardous_asteroid.toString() })
      })
      .catch((error)=>{
         //alert('Data not Found');
         console.log(error);
         this.setState({details:true,showId:true,data:true})
      })
    }

  render(){
    return (
      <div style={{textAlign:'center',marginTop:50,}}>
      {this.state.details ?
        <div>

        <div>  
            <TextField onChange={(event)=>this.setState({asteroId: event.target.value})} 
                      value={this.state.asteroId} 
                      label="Enter Asteroid"
                      variant="filled"
                      style={{width:'20%'}} />
      </div>

      <div style={{marginTop:20,justifyContent:'space-around',}}>
              <Button variant="contained" 
                      color="primary" 
                      style={style.button}
                      disabled={this.state.asteroId.length <=1 ? true : false}
                      onClick={()=> this.submit(this.state.asteroId)}
                      
                      >

                     Submit

                </Button>

          <Button variant="contained" 
                 color="secondary" 
                 onClick={()=> this.setState({showId:false,data:false})}
                 style={style.button}>
            Random Asteroid
          </Button>
        </div>
       
     
          {
            this.state.showId ? 
                       null
                      :
                      <div>
                       {this.state.dataSource.map((item, index) =>
                        
                        
                            
                           <div onClick={()=> this.setState({details:false,
                                             name:item.name,url:item.nasa_jpl_url,
                                             is_potentially_hazardous_asteroid:item.is_potentially_hazardous_asteroid.toString() })} 
                           style={{backgroundColor:'#f0f0f0',textAlign:'center',marginTop:20,
                                     height:'40%', }}>
                            
                              <text style={{padding:10,fontSize:20,fontWeight:'bold'}} 
                                   >{item.id}</text>
                            </div>
                          
                      
                       )}
                       </div>
          }
         
          
       
          {this.state.data ?
                    <text style={{color:'#f0f', marginTop:20}}> No Data Found </text>
                  :   null
                  }

       
        
        </div>
        
        :

         <Details is_potentially_hazardous_asteroid={this.state.is_potentially_hazardous_asteroid}
                  name={this.state.name} url={this.state.url}
         />
        }
              
      </div>
    );
  }
}

const style={
  button:{
    margin:20,
    width:'10%',
    height:'25%',
    fontWeight:'bold',
    fontSize:'20'
  },
  
}


