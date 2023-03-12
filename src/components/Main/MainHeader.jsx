import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import sofaImg from '../../assets/images/sofa.jpg'
import bedImg from '../../assets/images/bed.jpg'
import ofisImg from '../../assets/images/ofis.jpg'

const MainHeader = () => {
	return (
		<Grid
			sx={{
				display: {
					xs: 'none',
					sm: 'flex',
				},
			}}
			container
			spacing={1}
		>
			<Grid className={'inner'} item xs={12} lg={8}>
				<Box sx={{ position: 'relative' }}>
					<img
						src={sofaImg}
						width={880}
						height={587}
						className='filtered-img'
					/>
					<Box
						sx={{
							position: 'absolute',
							bottom: { xs: '20px', sm: '40px' },
							left: { xs: '15px', sm: '50px' },
						}}
					>
						<Typography color={'#979494'}>София мебель</Typography>
						<Typography
							variant='h4'
							color={'var(--white-color)'}
							mb={1}
							fontSize={{
								xs: '1.1rem',
								sm: '1.4rem',
								md: '1.7rem',
								xl: '2.2rem',
							}}
						>
							Различные виды мягкой мебели
						</Typography>
						<button className='primary__btn'>Посмотреть каталог</button>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				lg={4}
				sx={{
					display: {
						xs: 'none',
						sm: 'flex',
						lg: 'block',
					},
				}}
			>
				<Box
					sx={{
						position: 'relative',
						width: {
							xs: '50%',
							lg: '100%',
						},
						paddingBottom: {
							lg: '2px',
						},

						marginRight: {
							xs: '16px',
							lg: '0px',
						},
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							bottom: '20px',
							left: '20px',
							zIndex: '999 ',
						}}
					>
						<Typography
							variant='h6'
							fontSize={{ md: '1.7rem', lg: '1.25rem' }}
							mb={'8px'}
							color={'var(--white-color)'}
						>
							Мебель для спальни
						</Typography>
						<button className='primary__btn'>Посмотреть каталог</button>
					</Box>
					<img
						className='filtered-img'
						width={435}
						height={290}
						src={bedImg}
						alt='bed image'
						style={{ borderRadius: '12px' }}
					/>
				</Box>
				<Box
					sx={{
						position: 'relative',
						width: {
							xs: '50%',
							lg: '100%',
						},
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							bottom: '20px',
							left: '20px',
							zIndex: '999 ',
						}}
					>
						<Typography
							variant='h6'
							mb={'8px'}
							fontSize={{ md: '1.7rem', lg: '1.25rem' }}
							color={'var(--white-color)'}
						>
							Офисная мебель
						</Typography>
						<button className='primary__btn'>Посмотреть каталог</button>
					</Box>
					<img
						className='filtered-img'
						width={435}
						height={290}
						src={ofisImg}
						alt='ofis image'
						style={{ borderRadius: '12px' }}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}

export default MainHeader
