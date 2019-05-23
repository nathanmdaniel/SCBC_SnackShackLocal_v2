import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: 'left',
		color: theme.palette.text.secondary,
		margin: "10px",
	},
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.paper}>
        <CardMedia style={{ height: 120}}
        image={require("./Alligator.jpg")}
			component="img"
          title="Contemplative Reptile"
        />
		<CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Transaction
          </Typography>
		  <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper}> 
            </Paper>
          </Grid>
		  <Grid item xs={4}> Remove</Grid>
		  <Grid item xs={4}> Transaction Total</Grid>
		  <Grid item xs={8}> Name Selection</Grid>
		  <Grid item xs={4}> Account Balance</Grid>
		  <Grid item xs={4}> Confirm Transaction</Grid>
        </Grid>
		</CardContent>
    </Card>
  );
          }

          MediaCard.propTypes = {
          	classes: PropTypes.object.isRequired,
          };

export default withStyles(styles)(MediaCard);

