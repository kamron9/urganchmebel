import React, {useState} from 'react';
import {Box, Grid, Input, TextField, Typography} from "@mui/material";
import supportPic  from '../../assets/images/support.png'


const Support = () => {
    const [nameValue, setNameValue]= useState('')
    const [phoneValue,setPhoneValue]= useState('')
    const [nameError,setNameError]= useState(false)
    const [phoneError,setPhoneError]= useState(false)

    const handleSubmit =()=>{
        if(nameValue.length===0 ){
            setNameError(true)

        }
        else{
            setNameError(false)
            setPhoneError(false)
        }
    }
    return (
        <Box>
            <Box sx={{
                display:'flex',
                flexDirection:{
                    xs:'column',
                    md:'row'
                },
                alignItems:'stretch',
                padding:'0px',
                margin:'0px',
                maxHeight: {xs:'auto',md:"500px"},
                overflow:'hidden',
            }}>
                <Box sx={{
                    width: {xs:'100%',md:'50%'},
                    height:'100%'
                }}>
                    <img width={512} height={500} src={supportPic} alt="support-img" className='support-img'/>
                </Box>
                <Box  sx={{
                    width: {xs:'100%',md:'50%'},
                    padding: {
                        xs:'30px',
                        sm:'50px 50px 50px 50px',
                        lg:'70px 70px 20px 70px',
                    },
                    minHeight:'100%',
                    background: '#F3F0EE',
                }}>
                    <h1 className='title'>Нужна помощь с выбором?</h1>
                    <Typography sx={{margin: {xs:"20px 0",lg:'30px 0'}}}>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</Typography>
                    <Box>
                        <Box component={'form'} sx={{
                            display:'flex',
                            marginBottom:'15px',
                            flexDirection:{
                                xs:'column',
                                lg:'row'
                            }
                        }}>
                            <TextField
                                sx={{marginBottom:{xs:'10px', lg:0},marginRight:{xs:0,lg:"15px"}}}
                                value={nameValue}
                                fullWidth={{xs: '100%', sm: "100%"}}
                                error={nameError}
                                onChange={(e)=>setNameValue(e.target.value)}
                                label='Как вас зовут?'
                                variant='outlined'/>
                            <TextField
                                value={phoneValue}
                                fullWidth={{xs: '100%', sm: "100%"}}
                                error={phoneError}
                                onChange={(e)=>setPhoneValue(e.target.value)}
                                label='Ваш телефон'
                                variant='outlined'/>
                        </Box>
                        <button type={'submit'} className='primary__btn' onClick={()=>handleSubmit()}>Связаться с нами</button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Support;