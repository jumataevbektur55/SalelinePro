import React from 'react'
import {
	ProfileConpanyName,
	ProfileFulName,
	ProfileImage,
	ProfileStyled,
	ProfileText
} from './styled'

export default function ProfilePreview() {
	return (
		<div>
			<ProfileStyled>
				<ProfileImage src='./assets/img/Avatar.png'/>
				<ProfileText>
					<ProfileFulName>Tynisha Obey</ProfileFulName>
					<ProfileConpanyName>Makostore</ProfileConpanyName>
				</ProfileText>
			</ProfileStyled>
		</div>
	)
}
