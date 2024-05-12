import React from 'react'
import SadbarList from '../Malecules/Sidabarlist/SidbarList'
import { MAIN_LIST } from './const'
import Logo from '../Atoms/Logo'

export default function Sidbar() {
	return (
		<>
			<Logo />
			<SadbarList list={MAIN_LIST} />
		</>
	)
}
