import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageUploading from '../ImageUploading/ImageUploading';

import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

export default function NewPost () {
    const classes = useStyles();
    
    return (

        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs className={classes.paper}>
                        <ImageUploading />
                    </Grid>
                    <Grid item xs={6} className={classes.paper}>
                        <form>
                            <TextField>Helau</TextField>
                        </form>
                    </Grid>
                </Grid>
                </div>
            
        </div>
    );
}

