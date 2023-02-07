import {useReducer} from 'react'
import {Tab} from './TabStyle'
import { Typography, Box} from "@mui/material";
import {Mebel,Dveri, Lesnitsa, MebelFasad,Buazeri} from '../gds'
const Category = () => {
    const shadow = {boxShadow:'0 0 0 0.2rem rgba(169,132,92,.5)'}
    const reducer = (state,action) =>{
        switch (action.type) {
            case 'dveri' : return {arg:'dveri'}
            case 'mebel' : return {arg:'mebel'}
            case 'buazeri' : return {arg:'buazeri'}
            case 'lesnitsa' : return {arg:'lesnitsa'}
            case 'fasad' : return {arg:'fasad'}
            default : return  state
        }
    }
    const [state,dispatch]=useReducer(reducer, {arg:'dveri'})
  return (
    <Box sx={{
        marginTop:'70px'
    }}>
        <Typography variant={'h3'} sx={{
            fontSize:{
                xs:'1.7rem',
                sm:'2rem',
                md:'2.4rem',
            }
        }}>Витрина товаров</Typography>
        <Box sx={{
            margin:'30px 0'
        }}>
            <Tab onClick={()=>dispatch({type:'dveri'})} sx={state.arg === 'dveri' && shadow}>Межкомнатные двери</Tab>
            <Tab onClick={()=>dispatch({type:'mebel'})} sx={state.arg === 'mebel' && shadow}>Мебель</Tab>
            <Tab onClick={()=>dispatch({type:'buazeri'})} sx={state.arg === 'buazeri' && shadow}>Стеновые панели «Буазери» </Tab>
            <Tab onClick={()=>dispatch({type:'lesnitsa'})} sx={state.arg === 'lesnitsa' && shadow}>Лестницы</Tab>
            <Tab onClick={()=>dispatch({type:'fasad'})} sx={state.arg === 'fasad' && shadow}>Мебельные фасады</Tab>
        </Box>
        <Box>
            {state.arg ==='dveri' && <Dveri/>}
            {state.arg ==='mebel' && <Mebel/>}
            {state.arg ==='buazeri' && <Buazeri/>}
            {state.arg ==='lesnitsa' && <Lesnitsa/>}
            {state.arg ==='fasad' && <MebelFasad/>}
        </Box>
    </Box>
  )
}

export default Category
