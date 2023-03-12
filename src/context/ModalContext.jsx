import { createContext, useContext, useState } from 'react'

const ModalContext = createContext({})
export const useModal = () => useContext(ModalContext)

const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false)
	const [cardData, setCardData] = useState({})
	const openModal = (isOpen, data) => {
		setOpen(true)
		setCardData(data)
	}
	const closeModal = () => {
		setOpen(false)
	}
	return (
		<ModalContext.Provider value={{ openModal, closeModal, open, cardData }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
