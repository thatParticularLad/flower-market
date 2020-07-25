import React from 'react';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Header.css';

class Header extends React.Component {
	render() {
		//cia turetume gaut is backo
		const visosGeles = [
			{ title: 'Vazoninės gėlės' },
			{ title: 'Dirbtinės gėlės' },
			{ title: 'Kambarinės gėlės' },
		];

		return (
			<div class="navbar">
				<div class="navbar-content">
					<img className="logo" src="logo-flowers.svg" alt="image" />
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
						<Button variant="outlined" color="primary">
							Prisijungti | Registruotis
						</Button>
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
}

export default Header;
