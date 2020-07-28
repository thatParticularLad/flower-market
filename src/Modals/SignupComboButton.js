import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './SignupComboButton.css';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	paper: {
		textAlign: 'center',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '20%',
		minWidth: '250px',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(3, 3, 2),
		outline: 'none',
	},
	description: {
		color: '#666',
		fontSize: '16px',
		paddingBottom: '5px',
	},
	title: {
		paddingBottom: '15px',
		fontWeight: 500,
		color: '#111',
		fontSize: '24px',
	},
}));

export default function SignupButton() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button type="button" onClick={handleOpen}>
				Registruotis | Prisijungti
			</button>
			<Modal
				disableAutoFocus={true}
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
					style: { backgroundColor: 'rgba(17,17,17,0.48)' },
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<p className={classes.title} id="transition-modal-title">
							Prisijunkite prie Flower Market!
						</p>
						<p
							className={classes.description}
							id="transition-modal-description"
						>
							Parduok, keisk ir įsigyk gėlių iš didžiausio skaitmeninio gėlių
							turgaus Lietuvoje!
						</p>

						<div className="login-buttons-column">
							<button className="login-fb-btn">Tęsti su Facebook</button>
							<button className="login-google-btn">Tęsti su Google</button>
						</div>
						<div className="login-register-buttons">
							<button className="login-btn">Prisijungti</button>
							<button className="register-btn"> Registruotis</button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
