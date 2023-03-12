import sofaPic from '../../assets/images/sofa.jpg'
import bedPic from '../../assets/images/bed.jpg'
import ofisPic from '../../assets/images/sofa.jpg'
import AliceCarousel from 'react-alice-carousel'
import { Box, Typography } from '@mui/material'
const Carousel = () => {
	const items = [
		<Box
			sx={{
				position: 'relative',
				maxWidth: '600px',
			}}
		>
			<img
				className='filtered-img'
				width={'600px'}
				height={'355px'}
				src={sofaPic}
			/>
			<Box
				sx={{
					position: 'absolute',
					left: '20px',
					bottom: '40px',
				}}
			>
				<Typography variant={'h6'} color={'var(--white-color)'}>
					Различные виды мягкой мебели
				</Typography>
				<button className={'primary__btn'}>Посмотреть каталог</button>
			</Box>
		</Box>,
		<Box
			sx={{
				position: 'relative',
				maxWidth: '600px',
			}}
		>
			<img
				className='filtered-img'
				width={'600px'}
				height={'355px'}
				src={bedPic}
			/>
			<Box
				sx={{
					position: 'absolute',
					left: '20px',
					bottom: '40px',
				}}
			>
				<Typography variant={'h6'} color={'var(--white-color)'}>
					Мебель для спальни
				</Typography>
				<button className={'primary__btn'}>Посмотреть каталог</button>
			</Box>
		</Box>,
		<Box
			sx={{
				position: 'relative',
				maxWidth: '600px',
			}}
		>
			<img
				className='filtered-img'
				width={'600px'}
				height={'355px'}
				src={ofisPic}
			/>
			<Box
				sx={{
					position: 'absolute',
					left: '20px',
					bottom: '40px',
				}}
			>
				<Typography variant={'h6'} color={'var(--white-color)'}>
					Офисная мебель
				</Typography>
				<button className={'primary__btn'}>Посмотреть каталог</button>
			</Box>
		</Box>,
	]
	return (
		<Box
			sx={{
				display: {
					xs: 'block',
					sm: 'none',
				},
			}}
		>
			<AliceCarousel mouseTracking items={items} />
		</Box>
	)
}

export default Carousel
