import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className='animated infinite bounce delay-2s navbar navbar-expand-lg fixed-top'>
				{/* <a className='navbar-brand' href='#'>
					Navbar
				</a> */}
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'
					aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<h1>
								<a className='nav-link' href='#'>
									about <span className='sr-only'>(current)</span>
								</a>
							</h1>
						</li>
						<li className='nav-item'>
							<h1>
								<a className='nav-link' href='#resume'>
									resume
								</a>
							</h1>
						</li>
						<li className='nav-item'>
							<h1>
								<a className='nav-link' href='#'>
									projects
								</a>
							</h1>
						</li>
						<li className='nav-item'>
							<h1>
								<a className='nav-link' href='#'>
									skills
								</a>
							</h1>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
