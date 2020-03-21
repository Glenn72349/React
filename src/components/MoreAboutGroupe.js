import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1250,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    
  },
  pos: {
    marginBottom: 12,
  },paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MoreAboutGroupe = ({groupe}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let listLOcation = "";
  groupe.locationInfo.map((m, index) => (
    listLOcation=m+" , "+listLOcation
  ));

  let genres = "";
  groupe.genres.map((m, index) => (
    genres=m+" , "+genres
  ));

  let dbp_genre = "";
  groupe.dbp_genre.map((m, index) => (
    dbp_genre=m+" , "+dbp_genre
  ));

  let labels = "";
  groupe.labels.map((m, index) => (
    labels=m+" , "+labels
  ));

  let recordLabel = "";
  groupe.recordLabel.map((m, index) => (
    recordLabel=m+" , "+recordLabel
  ));

  let associatedMusicalArtist = "";
  groupe.associatedMusicalArtist.map((m, index) => (
    associatedMusicalArtist=m+" , "+associatedMusicalArtist
  ));
  
  return (
    
    

<div className={classes.root}>
    <Grid container spacing={0}>
    
    <Grid item xs>
    <Card className={classes.root} variant="outlined">
    <CardContent>
      
        <Typography  component="h1">
        Birthdate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {groupe.lifeSpan.begin}
        </Typography><br/>
        <Typography  component="h2">
        Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {listLOcation}
        </Typography><br/>
        <Typography  component="h2">
        Genre:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {genres}
        </Typography><br/>
        <Typography  component="h2">
        Genre(BDpedia):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {dbp_genre}
        </Typography><br/>
        <Typography  component="h2">
        Label:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {labels}
        </Typography><br/>
        <Typography  component="h2">
        Label(BDpedia):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {recordLabel}
        </Typography><br/>
        <Typography  component="h2">
          Number of Deezer fans:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {groupe.deezerFans}
        </Typography><br/>
        <Typography  component="h2">
          Associated artist(s):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {associatedMusicalArtist}
        </Typography><br/>
        
      </CardContent>
      
    </Card>
    </Grid>
    
    </Grid>
</div>

  );
}
export default MoreAboutGroupe;