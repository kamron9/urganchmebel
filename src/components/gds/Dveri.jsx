import React from 'react'
import { data } from '../../mock'
import { Link } from 'react-router-dom'
import { Box, Card, Grid, Typography } from '@mui/material'
import { useModal } from '../../context/ModalContext'

const Dveri = () => {
	const { openModal } = useModal()
	const handleSubmit = items => {
		openModal(true, items)
	}
	return (
		<Grid container spacing={4}>
			{data.slice(0, 12).map(({ id, title, summa, url }) => (
				<Grid
					key={id}
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					sx={{
						height: '400px',
						display: {
							xs: 'flex',
							sm: 'block',
						},
						flexDirection: 'column',
						alignItems: {
							xs: 'center',
						},
					}}
				>
					<Card
						sx={{
							width: '100%',
							height: '100%',
							padding: '10px',
							boxShadow: '0 5px 15px 0 rgba(0,0,0,0.2)',
						}}
					>
						<Typography
							sx={{
								textTransform: 'capitalize',
							}}
						>
							{title}
						</Typography>
						<Typography fontWeight={'600'}>{summa} сум</Typography>
						<img
							width={300}
							height={370}
							src={url}
							className='card-img'
							alt='green iguana'
						/>
						<Box
							sx={{
								paddingTop: '10px',
							}}
						>
							<Box>
								<button
									className={'primary__btn'}
									onClick={() => handleSubmit({ id, title, summa, url })}
								>
									заказать
								</button>
							</Box>
						</Box>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

export default Dveri
