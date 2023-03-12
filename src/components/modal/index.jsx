import { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import { useModal } from '../../context/ModalContext'
import { Typography, Box, FormControl, Stack } from '@mui/material'
import { style } from './modalStyle'
import Input from '../Generic/Input'
import { ReactComponent as Close } from '../../assets/icons/close.svg'
import SuccessAlert from '../Alert/Success'

export default function BasicModal() {
	const [nameInput, setNameInput] = useState('')
	const [numberInput, setNumberInput] = useState('')
	const { open, openModal, closeModal, cardData } = useModal()

	const submitForm = () => {}
	return (
		<div>
			<Modal
				open={open}
				onClose={closeModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Stack direction={'row'} justifyContent={'space-between'}>
						<Typography id='modal-modal-title' variant='h4' component='h2'>
							ваше заказ
						</Typography>
						<Box onClick={closeModal} sx={{ cursor: 'pointer' }}>
							<Close />
						</Box>
					</Stack>

					<Box sx={{ display: 'flex', marginTop: 3 }}>
						<img
							src={cardData.url}
							width={200}
							alt={cardData.title}
							className={'modal-img'}
						/>
						<Box sx={{ marginLeft: '15px' }}>
							<Typography variant={'h5'} sx={{ textTransform: 'uppercase' }}>
								{cardData.title}
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: '3px' }}>
								цена: {cardData.summa} сум
							</Typography>
							<FormControl sx={{ marginTop: 3 }}>
								<Input
									onChange={e => setNameInput(e.target.value)}
									label={'ваше имя'}
									size={'small'}
									required
								/>
								<Input
									onChange={e => setNumberInput(e.target.value)}
									label={'ваше номер'}
									size={'small'}
									required
									sx={{ marginTop: '10px' }}
								/>
							</FormControl>
						</Box>
					</Box>
					{/*button*/}
					<Box>
						<button onClick={submitForm} className={'primary__btn modal-btn'}>
							купить
						</button>
					</Box>
					{/*<SuccessAlert />*/}
				</Box>
			</Modal>
		</div>
	)
}
