//imports
import React from 'react';
import Team from './TeamData';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Class 
class Teams extends React.Component {
  state={
    team:[ ]
  };

  //directs to /team
  componentDidMount() {
    axios.get('http://localhost:4000/api/team')
    .then((response)=>{
      this.setState({team:response.data.team});
    })
    .catch((error)=>{
      console.log(error);
    })
  
  }

  //Add Class Name..  Button added to addTeam
  render(){
    return (
      <div className="App">
        <p>
          <Team myTeams={this.state.team}></Team>
        </p>
        <p>
          <Link to={"/AddTeam"} className="Btn_btn-primary"> Add Teams </Link> 
        </p>
      </div>
    );
  }
}
//End of file
export default Teams;
  
