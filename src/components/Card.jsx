import React from 'react'

// props never change, are always just inputs we get and we never modified them
const Card = ({ name, email, id }) => {
	return (
		<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card
