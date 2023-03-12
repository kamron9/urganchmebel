import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
	const linkStyle = {
		fontSize: '13px',
		color: 'rgba(255,255,255,0.6)',
	}
	return (
		<Box
			component={'footer'}
			sx={{
				width: '100%',
				minHeight: '360px',
				background: 'rgba(59, 57, 55)',
				padding: { xs: '60px 40px', md: '60px 80px' },
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Box
				component={'section'}
				sx={{
					display: 'flex',
				}}
			>
				<Box
					sx={{
						width: { xs: '100%', md: '50%' },
						display: 'flex',
						flexDirection: 'row',
						flexWrap: { xs: 'wrap', md: 'nowrap' },
						justifyContent: { md: 'space-around' },
					}}
				>
					<Box>
						<List>
							<ListItem>
								<Typography variant={'h5'} color={'rgba(255,255,255,1)'}>
									Sofia mebel
								</Typography>
							</ListItem>
							<ListItem>
								<Typography sx={linkStyle}>Фабрика 2022</Typography>
							</ListItem>
							<ListItem>
								<Typography sx={linkStyle}>© Все права защищены</Typography>
							</ListItem>
						</List>
					</Box>
					<Box>
						<List>
							<ListItem sx={{ color: '#fff' }}>Tel: (91)919 20 20</ListItem>
							<ListItem sx={linkStyle}>
								220100, г. Ургенч, пр-т. Алпомищ, <br /> д. 52, "Мебельный
								Центр"
							</ListItem>
							<ListItem sx={linkStyle}>support@sofiamebel.com</ListItem>
						</List>
					</Box>
				</Box>

				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						width: '50%',
						justifyContent: 'space-around',
					}}
				>
					<Box>
						<List>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Межкомнатные двери
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Мебель
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Стеновые панели «Буазери»
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Лестницы
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Мебельные фасады
								</Link>
							</ListItem>
						</List>
					</Box>
					<Box>
						<List>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Доставка
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									О нас
								</Link>
							</ListItem>
							<ListItem>
								<Link style={linkStyle} to={'/'}>
									Политика конфиденциальности
								</Link>
							</ListItem>
						</List>
					</Box>
				</Box>
			</Box>
			<Box>
				<a href='/'>icon1</a>
				<a href='/'>icon2</a>
				<a href='/'>icon3</a>
			</Box>
		</Box>
	)
}

export default Footer
