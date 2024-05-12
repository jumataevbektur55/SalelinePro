import React from 'react'
import ProfilePreview from '../../Malecules/ProfilePraview/ProfilePreview'
import { NavbarLeft, NavbarRigth, NavbarStyled, NavbarTitle } from './styled'

export default function Navbar({title}) {
	return (
			<NavbarStyled>
				<NavbarLeft>
					<NavbarTitle>{title}</NavbarTitle>
				</NavbarLeft>
				<NavbarRigth>
					<ProfilePreview />
				</NavbarRigth>
			</NavbarStyled>
	)
}
