import React from 'react'
import Category from '../Category'
import MainHeader from './MainHeader'
import Carousel from './Carousel'
import Support from '../support/Support'
import BasicModal from '../modal'

const Main = () => {
	return (
		<>
			<MainHeader />
			<Carousel />
			<Category />
			<Support />
			<BasicModal />
		</>
	)
}

export default Main
