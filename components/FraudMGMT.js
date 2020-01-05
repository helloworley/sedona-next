import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// images
const sedonaShieldLG = '/sedona-shield-lightgray.svg';
const sedonaShieldDG = '/sedona-shield-darkgray.svg';

// icons import
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SecurityIcon from '@material-ui/icons/Security';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FindInPageIcon from '@material-ui/icons/FindInPage';


const styles = theme => createStyles({
  FraudMGMT: {
    backgroundColor: theme.palette.sedona.white,
    width: "100%",
    backgroundPosition: "center",
    padding: theme.spacing.unit,
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
  serviceLogo: {
    height: "80px",
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
    fontWeight: 500,
    margin: "0 0 64px",
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
    height: "56px",
  },
  iconCell: {
    color: theme.palette.sedona.lightgray,
    minWidth: "35px",
    textAlign: "left",
    verticalAlign: "middle",
    margin: "0",
  },
  icon: {
    fontSize: "25px",
  },
  listItem: {
    margin: "0 0 25px",
    [theme.breakpoints.up('sm')]: {
      margin: "0 0 10px",
      lineHeight: "2.6",
    },
  },
  listItemText: {
    lineHeight: "1.5",
  },
  description: {
    margin: "0 0 56px"
  },
  table: {
    margin: "0 auto",
  }
});


class FraudMGMT extends React.Component {

  state = {
    providedByPlatformData: [
      {
        icon: (<EqualizerIcon className={this.props.classes.icon} />),
        text: 'A highly efficient realtime data analytics platform'
      },
      {
        icon: (<DeveloperBoardIcon className={this.props.classes.icon} />),
        text: 'Machine learning and robotic process automation'
      },
      {
        icon: (<SecurityIcon className={this.props.classes.icon} />),
        text: 'Fraud coverage for traditional services plus VAS/OTT'
      },
      {
        icon: (<AttachMoneyIcon className={this.props.classes.icon} />),
        text: 'Mobile Financial Services (MFS) fraud management'
      },
      {
        icon: (<AssignmentIndIcon className={this.props.classes.icon} />),
        text: 'Realtime payment approval and risk scoring engine'
      },
      {
        icon: (<FindInPageIcon className={this.props.classes.icon} />),
        text: 'Compliance (AML/CFT) and revenue assurance audits'
      },
    ]
  }

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.FraudMGMT} >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <img src={sedonaShieldDG} className={classes.serviceLogo} alt="Sedona Fraud Management" />
            <Typography variant="h2" align="center" className={`${classes.FraudMGMTText} ${classes.darkgray}`}>
              Sedona FMS 
            </Typography>
            <Typography variant="h4" align="center" className={`${classes.h2Subtext} ${classes.lightgray}`}>
              The Next Generation of Telecom Fraud Management
            </Typography>
          </Grid>
          <Grid container spacing={5}>
          <Grid item xs={12} md={6} className={classes.description}>
            <div className={classes.extraPaddingMobile}>
              <Typography variant="h3" className={classes.darkgray}>
                Overview
              </Typography>
              <Typography variant="body1" align="left" className={classes.darkgray}>
                Sedona Fraud Management System (Sedona FMS) is a flexible and powerful real time data analytics platform focused exclusively on the fraud management needs of modern telecom operators. 
                <br /><br />
                Sedona FMS is the most efficient telecommunications data analytics engine on the market, capable of analyzing billions of data records in realtime, without any database or “big data” software requirement. The system employs robot process automation (RPA) and a lightweight machine learning (ML) framework that was specifically designed and optimized for telecommunications data, applying predictive fraud analysis to the wide range of fraud scenarios facing telecom operators today.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className={classes.extraPaddingMobile}>
            <Typography variant="h3">
              Our platform provides you
            </Typography>
            <table className={classes.table}>
              <tbody>
                {this.state.providedByPlatformData.map((item, i) => (
                  <tr key={i} className={classes.listRow}>
                    <td className={classes.iconCell}>{item.icon}</td>
                    <td className={classes.listItem}>
                      <Typography variant="body2" align="left" className={`${classes.listItemText} ${classes.darkgray}`}>
                        {item.text}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
  } 
}


export default withStyles(styles)(FraudMGMT);
