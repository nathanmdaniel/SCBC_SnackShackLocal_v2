import React from 'react';
import XLSX from 'xlsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function genButtons() {
    const XLSX = require('xlsx');
    //var path = require('./SampleInventory.xlsx');
    //console.log(path);
    //var workbook = XLSX.readFile('./SampleInventory.xlsx');
    //console.log(workbook);
    var arr = [];
    for (var i = 0; i < 10; ++i)
        arr.push(<Button
			style={{backgroundColor: "#ec407a", color: '#faebd7'}}
			variant='contained'
			size='large'
			> Snack</Button>);
    return arr;
}

function SnackButtons(props) {
    var buttArr=genButtons();
    return (
		<div style={{ padding: 20 }}>
		   <Grid container>
			 {buttArr.map(button => <div style={{ padding: 5 }}> {button} </div>)}
		   </Grid>
        </div>
	);
}

export default SnackButtons;