import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Fade } from '@material-ui/core';
import SignIn from './SignInForm';

export default function SignInButton() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const signUp = (event) => {};

	return (
		<div>
			<button type="button" onClick={handleOpen}>
				Prisijungti
			</button>
			<Modal
				disableAutoFocus={true}
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				// className={classes.modal}
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
					<SignIn />
				</Fade>
			</Modal>
		</div>
	);
}
