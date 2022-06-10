import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserDropdown extends Component {
	render() {
		const { userDetail } = this.props;
		return (
			<li className='dropdown'>
				<Link
					to='#'
					data-toggle='dropdown'
					className='nav-link dropdown-toggle nav-link-lg nav-link-user'
				>
					<div className='d-sm-none d-lg-inline-block'>Hi, {userDetail.userName}</div>
				</Link>
				<div className='dropdown-menu dropdown-menu-right'>
					<Link to='/login' className='dropdown-item has-icon text-danger'>
						<i className={userDetail.logoutIcon} /> {userDetail.logoutTitle}
					</Link>
				</div>
			</li>
		);
	}
}

export default UserDropdown;
