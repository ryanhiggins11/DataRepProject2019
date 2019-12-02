//Imports
import React from 'react';
import ReactTable from "react-table";  
import "react-table/react-table.css";  //A preset react css file
//class and all teams defined
class PremierLeague extends React.Component {
    render() {  
        const data = [
          {  
           pos: '1',
           name: 'Liverpool',
           won: '13', 
           drew: '1',
           lost: '0',
           points: 40
         },
         {  
            pos: 2,
            name: 'Manchester City',
           won: '9', 
           drew: '2',
           lost: '3',
           points: 29
         },
         {  
            pos: 3,
            name: 'Leicster',
            won: '9', 
            drew: '2',
            lost: '2',
            points: 29
         },
         {  
            pos: 4,
            name: 'Spurs',
            won: '8', 
            drew: '2',
            lost: '4',
            points: 26      
         },
         {  
            pos: 5,
            name: 'Chelsea',
            won: '5', 
            drew: '5',
            lost: '4',
            points: 20
         },
         {  
            pos: 6,
            name: 'Man United',
            won: '4', 
            drew: '7',
            lost: '2',
            points: 19
         },
         {  
            pos: 7,
            name: 'Sheffield United',
            won: '4', 
            drew: '6',
            lost: '2',
            points: 18
         },
         {  
            pos: 8,
            name: 'Wolves',
            won: '4', 
            drew: '6',
            lost: '3',
            points: 18
         },
         {  
            pos: 9,
            name: 'Burnley',
           won: '5', 
           drew: '3',
           lost: '6',
           points: 18
         },
         {  
            pos: 10,
            name: 'Arsenal',
            won: '4', 
            drew: '6',
            lost: '3',
            points: 18
         },
         { 
            pos: 11,
            name: 'Crystal Palace',
            won: '5', 
            drew: '3',
            lost: '6',
            points: 18
         },
         {  
            pos: 12,
            name: 'Newcastle',
           won: '4', 
           drew: '5',
           lost: '4',
           points: 17
         },
         {  
            pos: 13,
            name: 'Aston Villa',
            won: '4', 
            drew: '4',
            lost: '6',
            points: 16
         },
         { 
            pos: 14, 
            name: 'Bourmouth',
            won: '4', 
            drew: '4',
            lost: '6',
            points: 16
         },
         {  
            pos: 15,
            name: 'Southampton',
            won: '4', 
            drew: '3',
            lost: '7',
            points: 15 
         },
         {  
            pos:16,
            name: 'Watford',
            won: '4', 
            drew: '2',
            lost: '7',
            points: 14
         },
         {  
            pos: 17,
            name: 'West Ham',
            won: '4', 
            drew: '2',
            lost: '7',
            points: 14 
         },
         {  
            pos: 18,
            name: 'Norwhich',
            won: '3', 
            drew: '1',
            lost: '9',
            points: 10
         },
         {  
            pos: 18,
            name: 'Brighton',
            won: '2', 
            drew: '3',
            lost: '8',
            points: 9
         },
         {  
            pos: 19,
            name: 'Everton',
            won: '1', 
            drew: '5',
            lost: '7',
            points: 8
         },
         {  
            pos: 20,
            name: 'Norwich',
            won: '1', 
            drew: '5',
            lost: '7',
            points: 8
         }
       ]  
        const columns = [
          {  
                Header: 'Pos',  
                accessor: 'pos'  
          },
          {  
             Header: 'Team',  
             accessor: 'name'  
          },
          {  
            Header: 'W',  
            accessor: 'won'  
          },
          {  
           Header: 'D',  
           accessor: 'drew'  
         },
         {  
           Header: 'L',  
           accessor: 'lost'  
         },
         {  
           Header: 'Pts',  
           accessor: 'points'  
         }
         ] 
         //Returns data and column which is displayed into table 
       return (  
             <div>  
               <h2 color="red" > Current Premier League Table </h2>
                 <ReactTable  
                     data={data}  
                     columns={columns}   />  
             </div>        
       )  
     }  
   }  
export default PremierLeague
