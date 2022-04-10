import React from 'react'
import Card from './Card'

// pure or dumb componets, pure functions they receive something and return something
const CardList = ({ robots }) => {
	return (
		<>
			{robots.map((user, i) => {
				return <Card key={user.id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
			})}
		</>
	)
}

export default CardList
