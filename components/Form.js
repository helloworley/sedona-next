import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// forms and inputs
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


// buttons
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => createStyles({
  form: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.section.padding.xs
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.section.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.section.padding.md,
      height: "672px",
    },
  },
  button: {
    fontStyle: "initial",
    fontWeight: "bold",
  },
  extendedIcon: {
    fontSize: "20px",
    margin: "0 0 0 8px",
    transform: "rotate(-35deg) translate(3px, -1px)",
  },
  header: {
    margin: "0 0 15px",
    color: theme.palette.sedona.darkgray,
    textAlign: "center",
  },
  lightgray: {
    color: theme.palette.sedona.lightgray,
  },
  formControl: {
    margin: "0 0 40px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "left",
  },
  googleMap: {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    [theme.breakpoints.up('md')]: {
      height: "672px",
    }
  }
});

class Form extends React.Component {
  state = {
    name: '',
    company: '',
    email: '',
    organization: '',
    inquiry: '',
  };

  componentDidMount() {
    this.forceUpdate();
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  render() {
    const { classes } = this.props;

    const organizationTypes = [
      {
        value: 'Mobile Network Operator',
        label: 'Mobile Network Operator',
      },
      {
        value: 'Consultant or Integrator',
        label: 'Consultant or Integrator',
      },
      {
        value: 'Other',
        label: 'Other',
      },
    ];

    return (
      
        <Grid container spacing={0}>

        <Grid item xs={12} md={6}>

          <div className={classes.form}>

            <Typography variant="h2" className={classes.header}>
              Contact Us
            </Typography>   
            <Typography variant="h4" className={classes.lightgray}>
              How may we help you?
            </Typography>

            <form action="#" method="POST">

              <Grid container spacing={5}>

                <Grid item xs={12} md={6}>

                  <TextField
                    name="Name"
                    id="filled-name"
                    label="Name"
                    className={classes.formControl}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                    required
                  />

                  <TextField
                    name="Company"
                    id="filled-company"
                    label="Company"
                    className={classes.formControl}
                    value={this.state.company}
                    onChange={this.handleChange('company')}
                    margin="normal"
                    variant="filled"
                    required
                  />

                  <TextField
                    name="Email"
                    id="filled-email-input"
                    label="Email"
                    className={classes.formControl}
                    type="email"
                    autoComplete="email"
                    margin="normal"
                    variant="filled"
                    value={this.state.email} 
                    onChange={this.handleChange('email')} 
                    required
                  />

                  <TextField
                    select
                    name="Organization Type"
                    id="filled-select-organization"
                    className={classes.formControl}
                    variant="filled"
                    label="Organization Type"
                    margin="normal"
                    value={this.state.organization}
                    onChange={this.handleChange('organization')}
                    helperText="Please select your organization type."
                  >
                    {organizationTypes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                </Grid>


                <Grid item xs={12} md={6}>

                  <div>
                    <TextField
                      name="Inquiry"
                      id="filled-inquiry"
                      label="Inquiry"
                      multiline
                      rows="6"
                      value={this.state.inquiry}
                      onChange={this.handleChange('inquiry')}
                      className={classes.formControl}
                      margin="normal"
                      helperText="Tell us a bit about the solution that you are seeking"
                      variant="filled"
                    />
                  </div>

                  <Button variant="contained" color="primary" type="submit" value="Send" className={classes.button}>
                      Send        
                    <SendIcon className={classes.extendedIcon} />
                  </Button>              

                </Grid>
              </Grid>
            </form>

          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className={this.props.classes.DigitalServices}>
          <iframe className={this.props.classes.googleMap} title="Sedona Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.15983472589!2d139.7003073511958!3d35.64843348010474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b459e9a8fd1%3A0x7d0ee33b7f1b4187!2sTENOHA+LAB!5e0!3m2!1sen!2sjp!4v1552429807309" frameBorder="0"  allowFullScreen></iframe>
          </div>  
        </Grid>
      </Grid>
    )
  } 
}


export default withStyles(styles)(Form);
