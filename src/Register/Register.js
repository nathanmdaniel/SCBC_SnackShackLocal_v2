import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Tabs from './RegisterButtonSide/Tabs.js';
import TransactionCard from './RegisterTransactionSide/TransactionCard.js'
import RegisterButtonContainer from './RegisterButtonSide/RegisterButtonContainer.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: "10px",
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
                <RegisterButtonContainer />
          </Grid>
          <Grid item xs={9} sm={4}>
            <TransactionCard> 
            </TransactionCard>
          </Grid>
        </Grid>
      </div>
  );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);