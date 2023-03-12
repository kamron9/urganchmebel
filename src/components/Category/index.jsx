import { useReducer } from 'react'
import { Tab } from './TabStyle'
import { Box, Button } from '@mui/material'
import { Mebel, Dveri, Lesnitsa, MebelFasad, Buazeri } from '../gds'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const Category = () => {
	const shadow = { boxShadow: '0 0 0 0.2rem rgba(169,132,92,.5)' }
	const reducer = (state, action) => {
		switch (action.type) {
			case 'dveri':
				return { arg: 'dveri' }
			case 'mebel':
				return { arg: 'mebel' }
			case 'buazeri':
				return { arg: 'buazeri' }
			case 'lesnitsa':
				return { arg: 'lesnitsa' }
			case 'fasad':
				return { arg: 'fasad' }
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, { arg: 'dveri' })
	return (
		<Box
			sx={{
				margin: '70px 0',
			}}
		>
			<h1 className='title'>Витрина товаров</h1>
			<Box
				sx={{
					margin: '30px 0',
				}}
			>
				<Tab
					onClick={() => dispatch({ type: 'dveri' })}
					sx={state.arg === 'dveri' && shadow}
				>
					Межкомнатные двери
				</Tab>
				<Tab
					onClick={() => dispatch({ type: 'mebel' })}
					sx={state.arg === 'mebel' && shadow}
				>
					Мебель
				</Tab>
				<Tab
					onClick={() => dispatch({ type: 'buazeri' })}
					sx={state.arg === 'buazeri' && shadow}
				>
					Стеновые панели «Буазери»{' '}
				</Tab>
				<Tab
					onClick={() => dispatch({ type: 'lesnitsa' })}
					sx={state.arg === 'lesnitsa' && shadow}
				>
					Лестницы
				</Tab>
				<Tab
					onClick={() => dispatch({ type: 'fasad' })}
					sx={state.arg === 'fasad' && shadow}
				>
					Мебельные фасады
				</Tab>
			</Box>
			<Box sx={{ marginBottom: '30px' }}>
				{state.arg === 'dveri' && <Dveri />}
				{state.arg === 'mebel' && <Mebel />}
				{state.arg === 'buazeri' && <Buazeri />}
				{state.arg === 'lesnitsa' && <Lesnitsa />}
				{state.arg === 'fasad' && <MebelFasad />}
			</Box>
			<Button endIcon={<ArrowRightAltIcon color='#a9845c' />}>
				<Link to={'/'} style={{ color: '#a9845c' }}>
					показать еще
				</Link>
			</Button>
		</Box>
	)
}

export default Category
