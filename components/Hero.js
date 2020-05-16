import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax, Background } from 'react-parallax';

// assets
const bgImageMobile = '/sedona-mountain-side-mobile.jpg';
const bgImageMobilePortrait = '/sedona-mountain-side-mobile-portrait.jpg';
const bgImageTablet = '/sedona-mountain-side-tablet.jpg';
const bgImage = '/sedona-mountain-side.jpg';

const styles = theme => createStyles({
  hero: {
    minHeight: "770px",
    width: "100%",
    padding: theme.spacing(1),
    position: "relative",
    backgroundImage: `url(${bgImageMobile})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed',
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${bgImageTablet})`,
      '@media screen and (orientation:landscape)': {
        minHeight: "360px",
        backgroundImage: `url(${bgImageMobilePortrait})`
      },
      minHeight: '1100px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bgImage})`,
      minHeight: '860px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center'
    }
  },
  heroOverlay: {
    height: "800px",
    maxHeight: "90vh",
    width: "100%",
    backgroundPosition: "left",
    backgroundSize: "cover",
    padding: theme.spacing(1),
    // [theme.breakpoints.down('xs')]: {
    //   background: "none",
    // },
    [theme.breakpoints.up('md')]: {
      height: "900px",
    },
  },
  heroText: {
    color: "#fff",
    maxWidth: "600px",
    textAlign: "left",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    right: "0",
    fontWeight: "900",
    lineHeight: "1.2em",
    letterSpacing: "0px",
    textShadow: "0px 0px 10px rgba(0,0,0,0.7)",
    left: "43%",
    fontSize: "1.4em",
    top: "45%",
    fontWeight: "800",
    [theme.breakpoints.up('sm')]: {
      fontSize: "2.4em",
      '@media screen and (orientation:landscape)': {
        fontSize: "2em",
      }
    },
    [theme.breakpoints.up('md')]: {
      top: "45%",
      left: "50%",
      fontSize: "3em",
      margin: "0",
      maxWidth: "800px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "4.5em",
    }
  }
});


class Hero extends React.Component {
  render() {
    
    return (

      <>
        {/* <Grid className={this.props.classes.heroOverlay}></Grid> */}
        <Grid className={this.props.classes.hero}>
          <Typography variant="h1" align="left" className={this.props.classes.heroText}>
            Empowering Mobile <br/> Network Operators <br/> in a Digital Age
          </Typography>
        </Grid>
      </>
    )
  } 
}


export default withStyles(styles)(Hero);
