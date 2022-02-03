import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
  input: {
    width: '100%',
    height: '60px',
    borderRadius: '6px',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    backgroundColor: '#121212',
    color: '#FFFFFF',
    paddingLeft: '18px',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '0.25px',
    transition: 'all 0.25s',
    '&:focus': {
      borderRadius: '6px',
      border: '3px solid #FF9B33',
      outline: 'none'
    },
  },
}));