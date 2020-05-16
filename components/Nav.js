import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// assets
const sedonaLogo = '/sedona-logo-on-white.svg';

// drawer
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


// scroll 
import scrollToComponent from 'react-scroll-to-component';


const styles = theme => createStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    padding: "0 0 0 12px",
    cursor: "pointer",
    height: "27px",
    [theme.breakpoints.up('sm')]: {
      height: "27px",
    },
    [theme.breakpoints.up('md')]: {
      height: "34px",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    [theme.breakpoints.up('md')]: {
      display: "none",
    },
  },
  desktopNavItems: {
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  desktopNavItem: {
    display: "inline-block",
    cursor: "pointer",
    '& span': {
      color: theme.palette.sedona.white,
      fontWeight: "bold",
    },
    '&:hover': {
      background: theme.palette.sedona.white,
    },
    '&:hover span': {
      color: theme.palette.primary.main,
    }
  },
  navBar: {
    backgroundColor: "transparent",
    color: theme.palette.sedona.white,
    boxShadow: "none",
    '&.filled': {
      backgroundColor: theme.palette.sedona.white,
      color: theme.palette.primary.main,
      boxShadow: theme.shadows[5],
      transition: 'background-color .3s ease-in-out, box-shadow .3s ease-in-out',
    },
    '&.filled span': {
      color: theme.palette.sedona.darkgray,
    },
    '&.filled li:hover span': {
      color: theme.palette.primary.main,
    }
  },
  toolBar : {
    justifyContent: "space-between",
    [theme.breakpoints.up('sm')]: {
      height: "80px",
    },
    [theme.breakpoints.up('md')]: {
      height: "96px",
    },
  },
  sideList: {
    padding: "100px 0",
    textAlign: "center",
  },
  drawerLogo: {
    margin: "0 0 54px",
    cursor: "pointer",
    minHeight: "28px"
  },
  listItem: {
    padding: "16px 32px",
    '& div': {
      paddingLeft: "0 !important",
      padding: "0 !important",
    }
  }
});

class Nav extends React.Component {

  state = {
    right: false,
    windowPosition: 0
  };

  // for toggling the right nav in mobile and tablet
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  // for gettting the scroll position and editing the background color for the nav
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }  

          // set the windowPosition state property based on the scroll event
  handleScroll() {
    let lastScrollY = window.scrollY;
    this.setState({
      windowPosition: lastScrollY
    });
    this.toggleNavClass();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  // add or remove class to the nav based on the state
  toggleNavClass() {
    const appBar = document.getElementById('app-bar');
    this.state.windowPosition > 100 ? appBar.classList.add('filled') : appBar.classList.remove('filled');
  };
  

  render() {
    const { classes, navItems, topRef } = this.props;
    const scrollOptions = {
      offset: -50,
      align: 'top',
      duration: 1500
    }

    const sideList = (
      <div className={classes.sideList}>
        <img 
          src={sedonaLogo} 
          alt="Sedona Logo"
          className={this.props.classes.drawerLogo} 
          onClick={() => {scrollToComponent(topRef.current, scrollOptions)}}
        />
        <List>
          {navItems.map( navItem => (
            <span key={navItem.text}>
              <Divider />
              <ListItem 
                button 
                key={navItem.text} 
                onClick={() => {scrollToComponent(navItem.reference.current, scrollOptions)}}
                className={this.props.classes.listItem}  
              >
                  <ListItemText primary={navItem.text} />
              </ListItem>
            </span>
          ))}
          <Divider />
        </List>

      </div>
    );


    return (
      <div className={classes.root}>
        <AppBar id="app-bar" position="fixed" className={this.props.classes.navBar}>
          <Toolbar className={this.props.classes.toolBar}>

            <img 
              src={sedonaLogo} 
              className={this.props.classes.logo} 
              alt="Sedona Logo"
              onClick={() => {scrollToComponent(topRef.current, scrollOptions)}}
              />
            
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('right', true)}>
              <MenuIcon />
            </IconButton>

            <div className={classes.desktopNavItems}>
              {this.props.navItems.map( navItem => (
                <span key={navItem.text} className={classes.desktopNavItem}>
                  <ListItem 
                    key={navItem.text} 
                    onClick={() => {scrollToComponent(navItem.reference.current, scrollOptions)}}
                    className={this.props.classes.listItem}  
                  >
                    <ListItemText primary={navItem.text} />
                  </ListItem>
                </span>
              ))}
            </div>

            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('right', false)}
                onKeyDown={this.toggleDrawer('right', false)}
              >
                {sideList}
              </div>
            </Drawer>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);