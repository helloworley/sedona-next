import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// assets
const bgImageMobile = '/sedona-mountain-side-mobile.jpg';
const bgImageTablet = '/sedona-mountain-side-tablet.jpg';
const bgImage = '/sedona-mountain-side.jpg';

const styles = theme => createStyles({
  heroOverlay: {
    height: "800px",
    maxHeight: "90vh",
    width: "100%",
    backgroundPosition: "left",
    backgroundSize: "cover",
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      background: "none",
    },
    position: "absolute",
  },
  hero: {
    height: "800px",
    maxHeight: "90vh",
    width: "100%",
    backgroundPosition: "left",
    backgroundSize: "cover",
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: "300px 60px 0",
      backgroundImage: `url(${bgImageMobile})`,
    },
    [theme.breakpoints.up('sm')]: {
      padding: "300px 10% 0 30%",
      backgroundPosition: "center",
      backgroundImage: `url(${bgImageTablet})`,
    },
    [theme.breakpoints.up('md')]: {
      padding: "300px 5% 0 35%",
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: "left",
    },
  },
  heroText: {
    color: "#fff",
    maxWidth: "600px",
    fontSize: "32px",
    [theme.breakpoints.up('md')]: {
      fontSize: "48px",
    },
  }
});

class Hero extends React.Component {
  render() {
    return (
      <Grid className={this.props.classes.heroContainer}>
        <Grid className={this.props.classes.heroOverlay}></Grid>
        <Grid className={this.props.classes.hero}>
          <Typography variant="h1" align="left" className={this.props.classes.heroText}>
            Empowering Mobile Network Operators in a Digital Age
          </Typography>
        </Grid>
      </Grid>
    )
  } 
}


export default withStyles(styles)(Hero);
