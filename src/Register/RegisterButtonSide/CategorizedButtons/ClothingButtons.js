import React from 'react';
import XLSX from 'xlsx';
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
			color='primary'
			variant='contained'
			size='large'
			> Clothing</Button>);
	return arr;
}

function ClothingButtons(props) {
	var buttArr=genButtons();
	return (
		<div>
			{buttArr}
		</div>
	);
}

export default ClothingButtons;