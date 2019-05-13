import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Qualify from './Qualify';

const styles = theme => ({
  container: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    marginBottom: 0,  
  },
  coverImg: {
    width: '100%',
  },
  users: {
    marginLeft: 5,
  }
});

class ProductCard extends Component {

  render() {
    const { classes, product, secondaryText } = this.props;
    return (
      <div>
        <img className={classes.coverImg}
        src={product.coverPicture.url}
        alt="Cover" />
        <div className={classes.container}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {product.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="subtitle1">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
          <Qualify quantity={product.qualify.quantity} users={product.qualify.users} />
          <Typography color="textSecondary">
            { secondaryText }
          </Typography>
          <Typography color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
