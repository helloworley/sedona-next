import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax, Background } from 'react-parallax';

// assets
const bgImageMobile = '/sedona-mountain-side-mobile.jpg';
const bgImageTablet = '/sedona-mountain-side-tablet.jpg';
const bgImage = '/sedona-mountain-side-full-c.jpg';

const styles = theme => createStyles({
  parallax: {
    height: "900px",
    maxHeight: "90vh",
    width: "100%",
    backgroundPosition: "left",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    padding: theme.spacing.unit,
    position: "relative",
    // backgroundImage: `url(${bgImage})`,
    backgroundPosition: "-147px -15.3em",
    backgroundSize: "1960px auto",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up('md')]: {
      // backgroundImage: `url(${bgImage})`,
      backgroundPositionX: "left",
      backgroundPositionY: "bottom",
      backgroundPositionY: "-80px",
      backgroundPositionX: "left",
      backgroundSize: "cover",
    },
  },
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
    [theme.breakpoints.up('md')]: {
      height: "900px",
    },
    position: "absolute",
  },
  hero: {
    
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


const parallaxBackgroundStyle = {
  left: '890px',
  bottom: '-420px',
  wdith: '120%',
  height: 'auto',
}

class Hero extends React.Component {
  render() {
    
    return (
      <Parallax 
        bgImage={bgImage} 
        strength={400} 
        className={this.props.classes.parallax}
        bgImageStyle={parallaxBackgroundStyle}
      >
        <div style={{ height: 800 }}>
          <div className={this.props.classes.hero}>
            <Typography variant="h1" align="left" className={this.props.classes.heroText}>
              Empowering Mobile <br/> Network Operators <br/> in a Digital Age.
            </Typography>
          </div>
        </div>
      </Parallax>


      // <Grid className={this.props.classes.heroContainer}>
      //   <Grid className={this.props.classes.heroOverlay}></Grid>
      //   <Grid className={this.props.classes.hero}>
      //     <Typography variant="h1" align="left" className={this.props.classes.heroText}>
      //       Empowering Mobile <br/> Network Operators <br/> in a Digital Age
      //     </Typography>
      //   </Grid>
      // </Grid>
    )
  } 
}


export default withStyles(styles)(Hero);
