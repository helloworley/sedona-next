import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// images
const companyInfoImage = '/tokyo.jpg';



const styles = theme => createStyles({
  companyInfo: {
    backgroundColor: theme.palette.sedona.white,
    width: "100%",
    padding: theme.spacing.unit,
    background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${companyInfoImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up('xs')]: {
      padding: theme.section.padding.xs
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.section.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.section.half.padding.md
    },
  },
  companyText: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  DSText: {
    color: theme.palette.sedona.darkgray,
    margin: "0 0 15px",
    maxWidth: "800px",
  },
  DSHeading: {
    color: theme.palette.sedona.darkgray,
  },
  description: {
    margin: "0 0 100px"
  },
});


class AboutSedona extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={this.props.classes.companyInfo}>
              <div className={classes.companyText}>
                <Typography variant="h2" className={this.props.classes.DSHeading}>
                  About Sedona
                </Typography>
                <Typography variant="body1" align="left">
                  Based In Daikanyama, Tokyo, Sedona was founded by leaders in the field of telecom Revenue Assurance and Fraud Management. Sedona has brought together a best-in-breed team of professionals, with extensive industry experience. We value customer service first and foremost, and follow the software-as-a-service (SaaS) business model to provide turnkey solutions.
                  <br/><br/>
                  We harness the latest technologies in data analytics, machine learning and blockchain, and all of our solutions include perpetual upgrades and support.
                  <br/><br/>
                  Deploying Sedona solutions will automate daily RAFM coverage, giving you peace of mind and freeing up your valuable RAFM team resources for more important priorities associated with growing your business.
                </Typography>
              </div>
            </div>
          </Grid>

          
        </Grid>
      </div>
    )
  } 
}


export default withStyles(styles)(AboutSedona);
