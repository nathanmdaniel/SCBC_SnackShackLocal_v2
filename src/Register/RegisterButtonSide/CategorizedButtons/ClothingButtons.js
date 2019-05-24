import React from 'react';
import XLSX from 'xlsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function genButtons() {
	const XLSX = require('xlsx');
	//var path = require('./SampleInventory.xlsx');
	//console.log(path);
	//var workbook = XLSX.readFile('./SampleInventory.xlsx');
	//console.log(workbook);
	var arr = [];
	for (var i = 0; i < 10; ++i)
		arr.push(<Button
			style={{backgroundColor:"#8d6e63", color: '#faebd7', fontWeight: 'bold'}}
			variant='contained'
			size='large'
			> Clothing</Button>);
	return arr;
}

function ClothingButtons(props) {
	var buttArr=genButtons();
	return (
		<div style={{ padding: 20 }}>
		   <Grid container>
			 {buttArr.map(button => <div style={{ padding: 5 }}> {button} </div>)}
		   </Grid>
		 </div>
	);
}

export default ClothingButtons;