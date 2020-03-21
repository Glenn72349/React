import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import InfoGroupMember from "./InfoGroupMember";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
const MembreGroupeRock = ({ members }) => {
  const classes = useStyles();
  
  const member = members.map((m, index) => {
    
       
    
  });
  return (
    <div className={classes.root}>
   
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography paragraph>Mebers:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className={classes.root}>
              <Grid container spacing={0}>
                
                <Grid item xs={12} sm={6}>
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                            Former Member:
                          </Typography>
                          
                          <Typography paragraph>
                            Word of the Day
                          </Typography>
                          
                        </CardContent>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                      <CardContent>
                      <Typography variant="h5" component="h2">
                          Former Member:
                        </Typography>
                        
                        <Typography paragraph>
                          Word of the Day
                        </Typography>
                        
                      </CardContent>
                      
                    </Card>
                </Grid>
                
              </Grid>
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
};

export default MembreGroupeRock;
