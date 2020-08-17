import React, { Fragment } from 'react';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {Link} from 'react-router-dom'
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
				<Link exact to='/'>
					<img className="logo" src="logo-flowers.svg" alt="logo" />
				</Link>
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
						<Link to='/register'>
							<p>Register</p>
						</Link>
						<Link to='login'>
							<p>Login</p>
						</Link>
					</Fragment>
				</div>
				<div>
					<Link to='/new-post'>
						<Button variant="contained" color="primary">
							Parduoti
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
