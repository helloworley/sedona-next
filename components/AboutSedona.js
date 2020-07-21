import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// images
const companyInfoImage = '/tokyo.jpg';



const styles = theme => createStyles({
  companyInfo: {
    backgroundColor: theme.palette.sedona.white,
    // width: "100%",
    padding: theme.spacing(1),
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
                <Typography variant="body1" align="justify">
                  With presence in four continents and headquartered in Tokyo, Sedona was founded by leaders in the field of telecom Revenue Assurance, Fraud Management and Digital Service Delivery. We brought together a best-in-breed team of professionals with extensive industry experience that harnesses the latest technologies in data analytics, machine learning and blockchain.
                <br/><br/>
                  We have developed proprietary, innovative products that are revolutionizing the way challenges are approached, managed and optimized. We have deployments across verticals within the Financial services and Telecom Operators’ domains across multiple geographic regions. Our solutions are offered as managed services and can be very quickly deployed just as they can be easily scaled, to compliment growth. We take pride in our customer support and ability to be nimble and rapidly deploy to meet the market-specific needs of our customers.
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
