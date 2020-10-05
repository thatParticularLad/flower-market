import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUpload from '../ImageUpload/ImageUpload';
import { storage } from 'firebase';
import { db } from '../firebase';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		margin: 'auto',
		padding: theme.spacing(3, 3, 3),
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '5px',
		width: '50%'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));



export default function NewPost() {
	const classes = useStyles();
	const [progress, setProgress] = useState(0);
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');

	const handleCreate = () => {
		//upload picture
	}
	// const handleSubmit = () => {
	// 	const uploadTask = storage.ref(`images/${image.name}`).put(image);

	// 	uploadTask.on(
	// 		"state_changed",
	// 		(snapshot) => {
	// 			// progress function...
	// 			const progress = Math.round(
	// 				(snapshot.bytesTransfered / snapshot.totalBytes) * 100
	// 			);
	// 			setProgress(progress)
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 			alert(error.message);
	// 		},
	// 		() => {
	// 			//complete function
	// 			storage
	// 				.ref("images")
	// 				.child(image.name)
	// 				.getDownloadURL()
	// 				.then(url => {
	// 					//post image in db
	// 					db.collections.add({
	// 						timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	// 						description:
	// 						flower:
	// 						image: url,
	// 						price:
	// 						//get from global state
	// 						username:
	// 					})	
	// 				})
	// 		}
	// 	)
	// }


	return (
		<Container component="main" >
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sukurkite savo skelbimą
				</Typography>
				<ImageUpload></ImageUpload>
				<form className={classes.form} noValidate onSubmit={(e) => callback(handleSubmit(e))}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								onChange={e => { setName(e.value) }}
								fullWidth
								label="Pavadinimas"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								onChange={console.log(name)}
								fullWidth
								label="Kaina"
								type="number"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								multiline
								rows={4}
								label="Aprašymas"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Lokacija"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						type='submit'
						className={classes.submit}
					>
						Pridėti
					</Button>
					<Grid container justify="flex-end">
					</Grid>
				</form>
			</div>
		</Container>
	);
};


