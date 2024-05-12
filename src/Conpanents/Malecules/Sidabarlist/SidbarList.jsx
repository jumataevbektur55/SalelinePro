import React from 'react'
import { SaidbarList } from './styled'
import Sidaberlttem from '../../Atoms/Logo/Sidaberltem/Sidaberltem'

const SadbarList = ({ list = [] }) => {
	return (
		<div>
			<SaidbarList>
				{list.map(item => (
					<Sidaberlttem item={item} />
				))}
			</SaidbarList>
		</div>
	)
}

export default SadbarList
