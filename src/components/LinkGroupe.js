import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const  LinkGroupe= ({groupe}) =>{
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  /*: "http://www.amazon.com/asdf/e/B000APEBQY?tag=wikia-20",
  urlITunes: "https://itunes.apple.com/us/artist/id3996865",
  urlAllmusic: "http://www.allmusic.com/artist/mn0000446509",
  urlDiscogs: "http://www.discogs.com/artist/18839",
  urlMusicBrainz:
    "http://musicbrainz.org/artist/65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab",
  urlYouTube: "https://www.youtube.com/user/MetallicaTV",
  urlSpotify: "https://play.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB",
  urlPureVolume: "http://www.purevolume.com/metallica",
  urlRateYourMusic: "http://rateyourmusic.com/artist/metallica",
  urlSoundCloud: "http://soundcloud.com/loureedmetallica",*/
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
         <url src="" />
        </Grid>
        
      </Grid>
    </div>
  );
}
export default LinkGroupe;