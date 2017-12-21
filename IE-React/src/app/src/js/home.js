
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit * 5,
//     marginRight: theme.spacing.unit,
//   },
//   menu: {
//     width: 200,
//   },
// });
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.height = screen.height - 100
  }

  render() {
    return (
      <div style={{ minHeight: this.height }}>

        <Grid item xs={12}>
        </Grid>
        <Paper elevation={3} style={{}}>
          <Typography type="title" gutterBottom>
            Schema Details
          </Typography>
          <Grid container spacing={24}>

            <Grid item xs>
              <TextField style={{ width: '400px', marginLeft: '10px' }}
                required
                id="txf1"
                label="Name"
                margin="normal"
                /></Grid>

            <Grid item xs>
              <TextField style={{ width: '400px', marginLeft: '10px' }}
                required
                id="txf2"
                label="DB Type"
                margin="normal"
                /></Grid>

            <Grid  item xs>
              <TextField style={{ width: '400px', marginLeft: '10px' }}
                required
                id="txf3"
                label="Schema URL"
                margin="normal"
                />
            </Grid>

          </Grid>
          <Typography type="title" gutterBottom>
            Credentials
          </Typography>
          <Grid item xs={12}>
            <Grid container spacing={24}>

              <Grid item xs>
                <TextField style={{ width: '400px', marginLeft: '10px' }}
                  required
                  id="username"
                  label="User Name"
                  margin="normal"
                  /></Grid>

              <Grid item xs>
                <TextField style={{ width: '400px', marginLeft: '10px' }}
                  required
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  /></Grid>

              <Grid  item xs>
                <Button style={{ marginLeft: '10px' }} raised color="primary" onClick={this.invokePipelineAdqService.bind(this) }>
                  Test Connection
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

      </div>
    );

  }

  invokePipelineAdqService() {
    fetch("http://localhost:9080/RC-web/rest/v2/service/test", {
    
      mode: "cors",
      method: "POST",
     body: JSON.stringify({"name":"hello","pass":"hello"}),
    
    }).then(response => {
      if (!response.ok) {
        this.enableNodataMsg();
        throw Error(response.statusText);
      }
      return response;
    })
      .then(response => response.json())
      .then(json => {
        alert("Fine");
      });
  }

}
//