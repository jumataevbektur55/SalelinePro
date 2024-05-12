import React from 'react';
import Sidbar from '../../Conpanents/Sidbar/Sidbar'
import Navbar from '../../Conpanents/Organisms/Navbar/Navbar'


export default function MainTemplate({children,title}){
	return (
		<div>
			<Sidbar/>
			{/* <MainContainer> */}
        <Navbar title={title}/>
			{children}
			{/* </MainContainer> */}
		</div>
	);
};

