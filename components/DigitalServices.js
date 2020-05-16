import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

// images
const sedonaChipDG = '/sedona-chip-darkgray.svg';
const sedonaChipLG = '/sedona-chip-lightgray.svg';
const telcoinIcon = '/telcoin-white.svg';
const digitalImage = '/connected-energy-grid.jpg';

// icons import
import PeopleIcon from '@material-ui/icons/People';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import WidgetsIcon from '@material-ui/icons/Widgets';
import LockIcon from '@material-ui/icons/Lock';
import ShowChartIcon from '@material-ui/icons/ShowChart';



const styles = theme => createStyles({
  DigitalServices: {
    backgroundColor: theme.palette.sedona.darkestgray,
    width: "100%",
    backgroundPosition: "left",
    textAlign: "center",
    padding: theme.spacing(1),
    // backgroundImage: `url(${sedonaChipDG})`,
    backgroundPositionX: "unset",
    backgroundPositionY: "60px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down('xs')]: {
      padding: theme.section.padding.xs
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.section.padding.sm,
      backgroundSize: "480px",
      backgroundPosition: "center",
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.section.half.padding.md,
      backgroundAttachment: "fixed",
    },
  },
  serviceLogo: {
    height: "80px",
    margin: "0 0 20px",
  },
  subheading: {
    color: theme.palette.sedona.lightgray,
  },
  listRow: {
    height: "40px",
  },
  iconCell: {
    color: theme.palette.sedona.white,
    minWidth: "36px",
    textAlign: "left",
    verticalAlign: "middle",
    margin: "0",
  },
  icon: {
    fontSize: "24px",
  },
  listItem: {
    margin: "0 0 24px",
    [theme.breakpoints.up('sm')]: {
      margin: "0 0 10px",
      lineHeight: "2.6",
    },
  },
  listItemText: {
    lineHeight: "1.5",
  },
  DSHeading: {
    color: theme.palette.sedona.white,
    margin: "0 0 15px",
  },
  beige: {
    color: theme.palette.sedona.beige,
  },
  digitalImage: {
    backgroundImage: `url(${digitalImage})`,
    minHeight: "500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  telcoinIcon: {
    height: "24px",
  },
  description: {
    margin: "0 0 100px"
  },
  table: {
    margin: "0 auto",
  },
  link: {
    color: "#37AEFF",
    fontWeight: "bold",
    '&:hover': {
      color: "#227fbb",
      textDecoration: "none",
      transition: 'color .3s, ease-out',
    }
  }
});


class DigitalServices extends React.Component {

  state = {
    providedByPlatformData: [
      {
        icon: (<img src={telcoinIcon} className={this.props.classes.telcoinIcon} alt="Telcoin Icon" />),
        text: (<span><Link href={"https://www.telco.in/"} className={this.props.classes.link} target="_blank">Telcoin</Link> remittance integration and support</span>)
      },
      {
        icon: (<ShowChartIcon className={this.props.classes.icon} />),
        text: 'Sovereign financial services (MFS2.0)'
      },
      {
        icon: (<LockIcon className={this.props.classes.icon} />),
        text: 'Blockchain-based payment system integration'
      },
      {
        icon: (<PeopleIcon className={this.props.classes.icon} />),
        text: 'Open social networking applications'
      },
    ]
  }


  render() {

    const classes = this.props.classes;

    return (
      <div>
        <Grid container spacing={0}>

          <Grid item xs={12} md={6}>
            <div className={classes.DigitalServices}>
              <img src={sedonaChipLG} className={classes.serviceLogo} alt="Sedona Digital Services" />
              <Typography variant="h2" className={classes.DSHeading}>
                Sedona Digital Services
              </Typography>
              <Typography variant="h4" className={classes.subheading}>
                Platform integrations for the modern mobile network operator
              </Typography>
              <table className={classes.table}>
                <tbody>
                  {this.state.providedByPlatformData.map((item, i) => (
                    <tr key={i} className={[classes.listRow]}>
                      <td className={classes.iconCell}>{item.icon}</td>
                      <td className={[classes.listItem]}>
                        <Typography variant="body2" align="left" className={classes.listItemText}>
                          {item.text}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> 
          </Grid>

          <Grid item xs={12} md={6} className={classes.digitalImage}>
          </Grid>
        </Grid>
      </div>
    )
  } 
}


export default withStyles(styles)(DigitalServices);
