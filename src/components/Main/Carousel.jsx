import sofaPic from '../../assets/images/sofa.jpg'
import bedPic from '../../assets/images/bed.jpg'
import ofisPic from '../../assets/images/sofa.jpg'
import AliceCarousel from "react-alice-carousel";
import {Box, Typography} from "@mui/material";
const Carousel = () => {
    const items = [
        <Box sx={{
            position:'relative',
            maxWidth:'600px'
        }}>
            <img className="filtered-img"  width={'100%'} src={sofaPic}/>
            <Box sx={{
                position:'absolute',
                left:'20px',
                bottom:'40px',
            }}>
                <Typography variant={'h6'} color={'var(--white-color)'}>Har xil turdagi yumshoq mebellar</Typography>
                <button className={'primary__btn'}>Katalogni ko'rish</button>
            </Box>
        </Box>,
        <Box sx={{
            position:'relative',
            maxWidth:'600px'
        }}>
            <img className="filtered-img"  width={'100%'} src={bedPic}/>
            <Box sx={{
                position:'absolute',
                left:'20px',
                bottom:'40px',
            }}>
                <Typography variant={'h6'} color={'var(--white-color)'}>Spalni mebellar</Typography>
                <button className={'primary__btn'}>Katalogni ko'rish</button>
            </Box>
        </Box>,
        <Box sx={{
            position:'relative',
            maxWidth:'600px'
        }}>
            <img className="filtered-img"  width={'100%'} src={ofisPic}/>
            <Box sx={{
                position:'absolute',
                left:'20px',
                bottom:'40px',
            }}>
                <Typography variant={'h6'} color={'var(--white-color)'}>Ofis mebellar</Typography>
                <button className={'primary__btn'}>Katalogni ko'rish</button>
            </Box>
        </Box>
    ]
    return (
        <Box sx={{
            display:{
                xs:'block',
                sm:'none'
            }
        }}>
            <AliceCarousel mouseTracking autoPlay={true} items={items}/>
        </Box>
    );
};

export default Carousel;