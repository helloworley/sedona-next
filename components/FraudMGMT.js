import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// images
const sedonaShieldLG = '/sedona-shield-lightgray.svg';
const sedonaShieldDG = '/sedona-shield-darkgray.svg';

// icons import
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DeveloperBoardIcon from '@material-ui/icons/SdStorage';
import SecurityIcon from '@material-ui/icons/VerifiedUser';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIndIcon from '@material-ui/icons/MonetizationOn';
import FindInPageIcon from '@material-ui/icons/PhonelinkSetup';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';
import AnalyticsIcon from '@material-ui/icons/EmojiObjects';


const styles = theme => createStyles({
  FraudMGMT: {
    backgroundColor: theme.palette.sedona.white,
    width: "100%",
    backgroundPosition: "center",
    padding: theme.spacing(1),
    // backgroundImage: `url(${sedonaShieldLG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down('xs')]: {
      padding: theme.section.padding.xs,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.section.padding.sm,
      backgroundSize: "480px",
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.section.padding.md,
      backgroundAttachment: "fixed",
    },
  },
  serviceLogoContainer: {
    textAlign: 'center',
  },
  serviceLogo: {
    height: "140px",
    margin: "0 0 20px",
  },
  extraPaddingMobile: {
    padding: "0 20px",
    [theme.breakpoints.up('sm')]: {
      padding: "0"
    },
  },
  FraudMGMTText: {
    margin: "0 0 15px",
  },
  h2Subtext: {
    margin: "0",
  },
  darkgray: {
    color: theme.palette.sedona.darkgray,
  },
  lightgray: {
    color: theme.palette.sedona.lightgray,
  },
  beige: {
    color: theme.palette.sedona.beige,
  },
  listRow: {
    height: "40px",
  },
  iconWrapper: {
    textAlign: 'center',
    color: theme.palette.sedona.darkgray,
    margin: '0 0 12px',
    textAlign: 'center',
    width: '80px',
    backgroundColor: theme.palette.sedona.white,
    height: '80px',
    borderRadius: '50%',
    margin: '0 auto 14px',
    lineHeight: '106px',
    border: `solid 3px ${theme.palette.sedona.darkgray}`,
  },
  // not used
  iconCell: {
    color: theme.palette.sedona.lightgray,
    minWidth: "35px",
    textAlign: "left",
    verticalAlign: "middle",
    margin: "0",
  },
  icon: {
    fontSize: "40px",
    color: theme.palette.sedona.darkgray,

  },
  listItem: {
    margin: "0 0 40px",
    maxWidth: '250px',
    margin: '0 auto',
    color: theme.palette.sedona.darkgray,
    [theme.breakpoints.up('sm')]: {
      lineHeight: "2.6",
      margin: "0 auto 56px",
    }
  },
  listItemText: {
    lineHeight: "1.5",
    textAlign: 'justify',
  },
  description: {
    margin: "0 0 56px"
  },
  table: {
    margin: "0 auto",
  },
  aboutText: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '820px',
      margin: '0 auto',
    }
  }
});


class FraudMGMT extends React.Component {

  state = {
    providedByPlatformData: [
      {
        icon: (<FindInPageIcon className={this.props.classes.icon} />),
        text: 'Optimized for mobile telecommunications operators'
      },
      {
        icon: (<AnalyticsIcon className={this.props.classes.icon} />),
        text: 'Realtime data analytics platform with machine learning'
      },
      {
        icon: (<SecurityIcon className={this.props.classes.icon} />),
        text: 'Fraud coverage for traditional and digital services'
      },
      {
        icon: (<ScreenLockPortraitIcon className={this.props.classes.icon} />),
        text: 'Mobile Financial Services (MFS) fraud management'
      },
      {
        icon: (<AssignmentIndIcon className={this.props.classes.icon} />),
        text: 'Realtime payment approval and risk scoring engine'
      },
      {
        icon: (<DeveloperBoardIcon className={this.props.classes.icon} />),
        text: 'SIM-swap fraud protection real-time payments'
      },
    ]
  };

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.FraudMGMT} >
        <Grid container spacing={5}>
          <Grid item xs={12} className={classes.serviceLogoContainer}>
            <img src={sedonaShieldDG} className={classes.serviceLogo} alt="Sedona Fraud Management" />
            <Typography variant="h2" align="center" className={`${classes.FraudMGMTText} ${classes.darkgray}`}>
              Sedona FMS 
            </Typography>
            <Typography variant="h3" align="center" className={`${classes.h2Subtext} ${classes.lightgray}`}>
              The Next Generation of Telecom Fraud Management
            </Typography>
          </Grid>
          <Grid container spacing={5}>
          <Grid item xs={12} className={classes.description}>
            <div className={`${classes.aboutText} ${classes.extraPaddingMobile}`}>
              <Typography variant="body2" className={classes.darkgray} align="center">
                Sedona Fraud Management System (Sedona FMS) is a powerful and flexible data analytics platform that leverages mobile network data to make financial and other digital services safer and easier to use. Sedona FMS is focused on improving digital services, particularly making blockchain based transactions safe in realtime.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.extraPaddingMobile}>
            <Grid container spacing="4">
              {this.state.providedByPlatformData.map((item, i) => (
                  <Grid row key={i}  xs="6" md="4" >
                    <div>
                      <div className={classes.iconWrapper}>
                        {item.icon}
                      </div>
                      <div className={classes.listItem}>
                        <Typography variant="h3" align="center">
                          {item.text}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>

            {/* <Typography variant="h3">
              Our platform provides you
            </Typography> */}
            {/* <table className={classes.table}>
              <tbody>
                {this.state.providedByPlatformData.map((item, i) => (
                  <tr key={i} className={classes.listRow}>
                    <td className={classes.iconCell}>{item.icon}</td>
                    <td className={classes.listItem}>
                      <Typography variant="body2" align="justify" className={`${classes.listItemText} ${classes.darkgray}`}>
                        {item.text}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            */}
             
            
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
  } 
}


export default withStyles(styles)(FraudMGMT);
