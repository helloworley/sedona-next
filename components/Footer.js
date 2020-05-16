import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// assets
const sedonaLogo = '/sedona-logo-on-black.svg';

const styles = theme => createStyles({
  footer: {
    backgroundColor: theme.palette.sedona.darkestgray,
    minHeight: "400px",
    width: "100%",
    backgroundPosition: "left",
    backgroundSize: "cover",
    padding: theme.spacing,
    [theme.breakpoints.down('xs')]: {
      padding: theme.section.padding.xs
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.section.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.section.padding.md
    },
  },
  colorWhite: {
    color: theme.palette.sedona.white,
  },
  footerCol: {
    textAlign: "left",
    margin: "0 0 50px",
  },
  footerLink: {
    color: "#C8BFB9",
    fontWeight: "normal"
  },
  footerLast: {
    borderTop: "solid 1px #C8BFB9",
    padding: "20px 0 0",
    display: "flex",
    alignItems: "space-between"
  },
  tagline: {
    maxWidth: "200px",
  },
  logo: {
    height: "24px",
  },
  tel: {
    color: '#37AEFF',
    textDecoration: 'none',
    '&:hover': {
      color: '#227fbb',
      transition: 'color .3s, ease-out',
    }
  }
});

class Footer extends React.Component {
  render() {

    const { classes } = this.props;


    return (
      <footer className={this.props.classes.footer} >
        <Grid container spacing={0}>

          <Grid item xs={12} md={6} className={classes.footerCol}>
            <img src={sedonaLogo} className={classes.logo} alt="Sedona Logo" />
            <Typography variant="body2" align="left" className={classes.tagline}>
              Empowering Mobile Network Operators
              in a Digital Age
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className={classes.footerCol}>
            <Typography variant="body1" align="left" className={classes.colorWhite}>
              Main Office
            </Typography>
            <Typography variant="body2" align="left">
              SEDONA Co. Ltd.<br />
              Ebisunishi 1-33-6 1F<br/>
              Shibuya, Tokyo 150-0021<br/>
              JAPAN<br /><br />	
              Tel: <a className={classes.tel} href="tel:81-3-5530-8785">+81-3-5530-8785</a><br />
              Email: <a className={classes.tel} href="mailto:info@sedo.na">info@sedo.na</a>
            </Typography>
          </Grid>


          <Grid item xs={12} className={`${classes.footerCol} ${classes.footerLast}`}>
            <Grid item xs={12}>
              <Typography variant="body2" align="left">
                © {new Date().getFullYear()} Sedona. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    )
  } 
}


export default withStyles(styles)(Footer);
