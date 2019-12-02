//Imports
import React from 'react';
import axios from 'axios';
//class with constructor
class AddTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  location: '',
                  stadium: '',
                  teamLogo:''};
    
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeStadium = this.handleChangeStadium.bind(this);
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //handle methods
  handleChangeName(e){
      this.setState({name: e.target.value});
  }
  handleChangeLocation(e) {
    this.setState({location: e.target.value});
  }
  handleChangeStadium(e) {
    this.setState({stadium: e.target.value});
  }

  handleChangeLogo(e){
    this.setState({teamLogo: e.target.value});
  }

  handleSubmit(e) {
    alert("Team Name: " + this.state.name + "\nLocation: " + this.state.location + 
        "\nStadium: " + this.state.stadium +  "\nTeam Logo URL: " + this.state.teamLogo);

    console.log("Team Name: " + this.state.name + "\nLocation: " + this.state.location + 
    "\nStadium: " + this.state.stadium +  "\nTeam Logo URL: " + this.state.teamLogo);
    e.preventDefault();

    const newTeam = {
        name:this.state.name,
        location: this.state.location,
        stadium: this.state.stadium,
        teamLogo: this.state.teamLogo
    }

    axios.post('http://localhost:4000/api/team',newTeam)
    .then()
    .catch();

    this.setState({name:'',
            location:'',
            stadium:'',
            teamLogo:''
    })
  }

  render() {
    return (
      
      <div>
        <h1> Add Premier League Team </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='name'>
          <label>
            Team Name:         
          </label>
            <input type="text" 
            value={this.state.name} 
            onChange={this.handleChangeName} />
          </div>
          <div className='location'>
          <label>
            Location:    
          </label>
            <input type="text" 
            value={this.state.location} 
            onChange={this.handleChangeLocation} />
          </div>
          <div className='stadium'>
          <label>
            Stadium:             
          </label>
            <input type="text" 
            value={this.state.stadium} 
            onChange={this.handleChangeStadium} />
          </div>
          <div className='Team Logo'>
          <label>
            Team Logo:
          </label> 
          <textarea
            rows='3'
            className='form-control'
            value={this.state.teamLogo} 
            onChange={this.handleChangeLogo}>
            </textarea>      
          </div>
          <input type="submit" value="Add Team" />
        </form>
      </div>
    );
  }//render
  
}//class

export default AddTeam;