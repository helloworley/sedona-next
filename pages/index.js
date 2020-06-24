import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// components
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FraudMGMT from '../components/FraudMGMT';
import DigitalServices from '../components/DigitalServices';
import AboutSedona from '../components/AboutSedona';
import Form from '../components/Form';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

import ogImg from '../public/200624-sedona-og.jpg'


const styles = theme => ({
  root: {
    textAlign: 'center',
    overflowX: 'hidden',
  },
  h1: {
    fontWeight: '300',
    margin: '0 0 40px',
  },
  h2: {
    fontSize: '1.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
  logo: {
    maxWidth: '120px',
    margin: '0 0 8px',
  },
  centeredWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
  },
  bgImageContainer: {
    backgroundPositionX: '580px !important',
    backgroundSize: 'cover !important',
    height: '100vh !important',
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'right !important',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'center !important',
    },
  },
});


  class Index extends React.Component {

    constructor(props) {
      super(props);
      this.topRef = React.createRef();
      this.fraudMGMTRef = React.createRef();
      this.digitalServicesRef = React.createRef();
      this.aboutRef = React.createRef();
      this.contactRef = React.createRef();
    }
  
    state = {
      navItems: [
        {
          text: 'Fraud Management System',
          reference: React.createRef(),
        },
        {
          text: 'Digital Services',
          reference: React.createRef(),
        },
        {
          text: 'About Sedona',
          reference: React.createRef(),
        },
        {
          text: 'Contact Us',
          reference: React.createRef(),
        }
      ]
    };
  
  
    render() {

      return (
        <div>
          <SEO
            title="Sedona"
            description="Empowering Mobile Network Operators in a Digital Age"
            image={ogImg}
          />
          <Nav topRef={this.topRef} navItems={this.state.navItems} />
          <Hero ref={this.topRef} />
          <FraudMGMT ref={this.state.navItems[0].reference} />
          <DigitalServices ref={this.state.navItems[1].reference} />
          <AboutSedona ref={this.state.navItems[2].reference} />
          <Form ref={this.state.navItems[3].reference} />
          <Footer />
        </div>
      );
    }
  }



  export default withStyles(styles)(Index);