import React from 'react';
import LinkButton from '../../../components/Common/LinkButton/LinkButton';

import './cardUser.css';

const CardUser = () => {
	return (
		<div className='card-user'>
			<div className='card-user-avatar'>
				<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=164&d=identicon' />
			</div>
			<div className='card-user__info'>
				<p className='card-user__info-name'>mayank</p>
				<p className='card-user__info-question'>1 question</p>
				<p className='card-user__info-time'>5 days ago</p>
			</div>
		</div>
	);
};

export default CardUser;
