import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

export default function SuccessAlert() {
	return (
		<Stack
			sx={{
				width: '100%',
				position: 'absolute',
				bottom: 0,
				right: 0,
				zIndex: 999,
			}}
		>
			<Alert variant='outlined' severity='success'>
				This is a success alert — check it out!
			</Alert>
		</Stack>
	)
}
