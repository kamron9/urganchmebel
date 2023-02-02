import  {styled, Button} from "@mui/material";

export  const Tab = styled(Button)({
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid #a9845c',
    color:'#a9845c',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#a9845c',
    '&:hover': {
        backgroundColor: '#a9845c',
        borderColor: '#a9845c',
        boxShadow: 'none',
        color:'#fff'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#a9845c',
        borderColor: '#a9845c',
    }
});
