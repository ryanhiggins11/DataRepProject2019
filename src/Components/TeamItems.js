//Imports
import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
//Class
class TeamItems extends React.Component {

    render(){
        return(
            <div>
                <Card bg ="dark" text = "white">
                
                    <Card.Header>{this.props.team.name}</Card.Header>
                    <Card.Body>
                    
                        <blockquote className="blockquote mb-0">
                            
                            
                            <p> 
                                Club:  {this.props.team.name} <br /> 
                                Stadium:  {this.props.team.stadium} <br /> 
                                Located: {this.props.team.location} <br />
                                
                            </p>   
                        </blockquote>
                    </Card.Body>
                    <Link to={"/EditTeam/"+ this.props.team._id} className="Btn_btn-primary"> Edit </Link>
                </Card>
            </div>
        );
    }
}

//end of class
export default TeamItems;