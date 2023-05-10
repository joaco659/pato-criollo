

import { useState } from 'react'
import Header from './components/Header.jsx'
// Solo cuando hay promociones
import PromotionModal from './components/PromotionModal.jsx'
/*
	Modo de uso:
	
	<PromotionModal
		src="(path a la foto de la promocion)"
		url="(link del post de la promocion)"
	></PromotionModal>
*/

import Carousel from './containers/Carousel.jsx'

function App() {
	return (
	<>
		<Header></Header>
		
		<Carousel></Carousel>
	</>
	)
}

export default App
