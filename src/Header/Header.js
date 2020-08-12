import React, { Fragment } from 'react';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import SignupComboButton from '../Modals/SignupCombo/SignupComboButton.js';
import SignUpButton from '../Modals/SignUp/SignUp';
import SignInButton from '../Modals/SignIn/SignIn';
import './Header.css';

function Header() {
	//cia turetume gaut is backo
	const visosGeles = [
		{ title: 'Vazoninės gėlės' },
		{ title: 'Dirbtinės gėlės' },
		{ title: 'Kambarinės gėlės' },
	];

	return (
		<div className="navbar">
			<div className="navbar-content">
				<img className="logo" src="logo-flowers.svg" alt="logo" />
				<div className="search-fields">
					<Autocomplete
						className="flowerComboBox"
						options={visosGeles}
						size={'small'}
						getOptionLabel={(option) => option.title}
						style={{ width: 150 }}
						renderInput={(params) => (
							<TextField {...params} label="Gėlės" variant="outlined" />
						)}
					/>
					<TextField
						className="searchField"
						size="small"
						variant={'outlined'}
						// onChange={(filter) => this.handleChangeFilter(filter)}
						// value={this.state.categoryFilter}
						style={{ width: 450 }}
						placeholder="Ieškoti pagal lotynišką pavadinimą "
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</div>
				<div>
					<Fragment>
						<SignUpButton />
						<SignInButton />
					</Fragment>
				</div>
				<div>
					<Button variant="contained" color="primary">
						Parduoti
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
