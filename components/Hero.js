import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax, Background } from 'react-parallax';

// assets

const IMAGE_URLS = {
  desktopLarge: '/sedona-mountain-side.jpg',
  desktop: '/sedona-mountain-side-desktop.jpg',
  mobile: '/sedona-mountain-side-mobile.jpg',
  mobilePortrait: '/sedona-mountain-side-mobile-portrait.jpg',
  tablet: '/sedona-mountain-side-tablet.jpg',
};



const styles = theme => createStyles({
  hero: {
    minHeight: "180vw",
    width: "100%",
    position: "relative",
    // backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed',
    backgroundPositionX: '-230px',
    backgroundSize: 'cover',
    '@media screen and (min-width: 426px)': {
      minHeight: "160vw",
    },
    '@media screen and (min-width: 500px)': {
      minHeight: "140vw",
    },
    '@media screen and (min-width: 600px)': {
      minHeight: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      '@media screen and (orientation:landscape)': {
        minHeight: '90vw',
      },
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '60vw',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '45vw',
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
  },
  heroTextContainer: {
  },
  heroBackground: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    bottom:'0',
    zIndex: '-1'
  }
});



class Hero extends React.Component {

  // the following code dynamically changes the background image depending on the screen size in order to save on load times
  componentDidMount() {
    window.addEventListener('resize', this.getImageBasedOnScreenWidth);
    window.addEventListener('load', this.getImageBasedOnScreenWidth);
    this.getImageBasedOnScreenWidth();
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.getImageBasedOnScreenWidth);
    window.removeEventListener('load', this.getImageBasedOnScreenWidth);
  };

  getImageBasedOnScreenWidth = () => {
    if (typeof window !== 'undefined') {
      const heroBackground = document.getElementById('hero-background');
      const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      heroBackground.setAttribute('src', IMAGE_URLS.mobile)
      if (width > 600) {
        heroBackground.setAttribute('src', IMAGE_URLS.tablet)
      };
      if (width > 960) {
        heroBackground.setAttribute('src', IMAGE_URLS.desktop)
      };
      if (width > 1280) {
        heroBackground.setAttribute('src', IMAGE_URLS.desktopLarge)
      };
    }
  }



  render() {

    const { classes } = this.props;

    return (

      <div className={classes.hero}>
        {/* <Grid className={this.props.classes.heroOverlay}></Grid> */}
        <Grid className={this.props.classes.heroTextContainer}>
          <Typography variant="h1" align="left" className={this.props.classes.heroText}>
            Empowering Mobile <br/> Network Operators <br/> in a Digital Age
          </Typography>
        </Grid>
        <img id="hero-background" className={classes.heroBackground} />
      </div>
    )
  } 
}


export default withStyles(styles)(Hero);
