import { makeStyles, styled } from '@material-ui/styles';
import { Button } from '@mui/material'

const useStyles = makeStyles({
  menu: {
    display: 'flex'
  },
  box: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const CustomButton = styled(Button)({
  borderRadius: 0,
  width: '100%',
})

export {useStyles, CustomButton};