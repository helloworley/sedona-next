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

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      name: '',
      company: '',
      email: '',
      organization: '',
      inquiry: '',
      displaySubmit: true,
    }
  }

  componentDidMount() {
    this.forceUpdate();
  }
  
  handleChange = prop => event => {
    this.setState({
      ...this.state,
      [prop]: event.target.value
    });
    // console.log('state', this.state);
  };

  getData() {
    const formData = {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      organization: this.state.organization,
      inquiry: this.state.inquiry,
    }
    return formData;
  }

  componentDidMount() {
    const theForm = document.getElementById('contact-form');
    this.waitForForm(theForm);
  }


  waitForForm(form) {
    if(typeof form !== 'undefined') {
      this.addSubmitListener(form);
    } else {
      this.waitForForm(document.getElementById('contact-form'));
    }
  }

  addSubmitListener(theForm) {
    // console.log('add listener');

    theForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = this.getData();
      this.submitStatus = 'PENDING';
      fetch(`https://usebasin.com/f/bfefabc83256.json`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
      }).then(res => {
        res
          .json()
          .then(data => {
              this.state.messageSent = data.success;
              this.setState({
                ...this.state,
                displaySubmit: false,
              });
          });
      });
      setTimeout(() => {
        this.submitStatus = 'OK'
      }, 500)

    });
  }

  displaySubmit() {
    if (this.state.displaySubmit) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }



  render() {
    const { classes } = this.props;

    const submitButton = (
      <div className={classes.submitButtonWrapper}>
        <Button variant="contained" color="primary" type="submit" value="Send" className={classes.button}>
            Send
          <SendIcon className={classes.extendedIcon} />
        </Button>       
      </div>
    );
    const thankYouMessage = <p>Thank you for your inquiry. We will be with you shortly.</p>;


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

            <form 
              className={classes.root}
              noValidate
              id="contact-form"
              autoComplete="off"
            >

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
                    id="company"
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
                    id="email"
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
                    id="organization"
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
                      id="inquiry"
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

                  {this.state.displaySubmit ? submitButton : thankYouMessage}        

                </Grid>
              </Grid>
            </form>

          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className={this.props.classes.DigitalServices}>
          <iframe className={this.props.classes.googleMap} title="Sedona Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2179990586224!2d139.70185441560622!3d35.647000280202256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4687305b9b%3A0x9f335559f0eed5e1!2s1-ch%C5%8Dme-33-6%20Ebisunishi%2C%20Shibuya%20City%2C%20T%C5%8Dky%C5%8D-to%20150-0021!5e0!3m2!1sen!2sjp!4v1589112264922!5m2!1sen!2sjp"  frameBorder="0"  allowFullScreen></iframe>
          </div>  
        </Grid>
      </Grid>
    )
  } 
}


export default withStyles(styles)(Form);
