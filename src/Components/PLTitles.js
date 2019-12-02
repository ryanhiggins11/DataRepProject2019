//imports
import React, { Component } from 'react';
import ReactTable from "react-table";  
import "react-table/react-table.css";
//class,, rows underneath
export class PlTitles extends Component {
render() {
const data = [{
    name: 'Liverpool',
    titlesWon: '26',
    lastTitle: '1992',
    currentPL: '1',
    currentLeague: 'Premier League'
},
{
    name: 'Manchester United',
    titlesWon: '24',
    lastTitle: '2015',
    currentPL: '7',
    currentLeague: 'Premier League'
},
{
    name: 'Aston Villa',
    titlesWon: '22',
    lastTitle: '1982',
    currentPL: '13',
    currentLeague: 'Premier League'  
},
{
    name: 'Leicster City',
    titlesWon: '21',
    lastTitle: '2017',
    currentPL: '3',
    currentLeague: 'Premier League'
},
{
    name: 'Arsenal',
    titlesWon: '19',
    lastTitle: '2002',
    currentPL: '7',
    currentLeague: 'Premier League'
},
{
    name: 'Chelsea',
    titlesWon: '17',
    lastTitle: '2008',
    currentPL: '5',
    currentLeague: 'Premier League'
},
{
    name: 'Tottenham',
    titlesWon: '14',
    lastTitle: '2012',
    currentPL: '8',
    currentLeague: 'Premier League'
},
{
    name: 'Norwich',
    titlesWon: '13',
    lastTitle: '2008',
    currentPL: '16',
    currentLeague: 'Premier League'
},
{
    name: 'Southampton',
    titlesWon: '12',
    lastTitle: '1953',
    currentPL: '16',
    currentLeague: 'Premier League'
},
{
    name: 'Leeds',
    titlesWon: '11',
    lastTitle: '2001',
    currentPL: 'N/A',
    currentLeague: 'Championship'
},
{
    name: 'Brighton',
    titlesWon: '10',
    lastTitle: '1998',
    currentPL: '17',
    currentLeague: 'Premier League'
},
{
    name: 'Newcastle',
    titlesWon: '8',
    lastTitle: '1995',
    currentPL: '7',
    currentLeague: 'Premier League'
},
{
    name: 'Wolves',
    titlesWon: '7',
    lastTitle: '1991',
    currentPL: '5',
    currentLeague: 'Premier League'
},
{
    name: 'Derby',
    titlesWon: '7',
    lastTitle: '1975',
    currentPL: 'N/A',
    currentLeague: 'Championship'
},
{
    name: 'Sheffield United',
    titlesWon: '5',
    lastTitle: '1984',
    currentPL: '8',
    currentLeague: 'Premier League'
},
{
    name: 'Blackburn',
    titlesWon: '4',
    lastTitle: '1978',
    currentPL: 'N/A',
    currentLeague: 'Championship'
},
{
    name: 'Bourmouth',
    titlesWon: '2',
    lastTitle: '1964',
    currentPL: '11',
    currentLeague: 'Premier League'
},
{
    name: 'Huddersfield',
    titlesWon: '1',
    lastTitle: '1979',
    currentPL: 'N/A',
    currentLeague: 'Championship'
}
]
//Columns on tables
const columns = [
    {  
        Header: 'Team Name',  
        accessor: 'name' ,
        width: 270
     },
     {
        Header: 'Titles Won',
        accessor: 'titlesWon',
        width: 100
      },
      {
        Header: 'Last PL Title',
        accessor: 'lastTitle',
        width: 100
      },
    {
      Header: 'Current PL Position',  
      accessor: 'currentPL' ,
      width:250,
      style: { 'white-space': 'unset' }
    },
    {
        Header: 'Current League',  
        accessor: 'currentLeague' ,
        width:380,
        style: { 'white-space': 'unset' }
      }
]
    return(
    <div>  
    <h1> Premier League History </h1>
    <ReactTable  
      data={data}  
      columns={columns}  />  
    </div>  
    )}
}
export default PlTitles