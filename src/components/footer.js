import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
    <Box
      component='footer'
      maxWidth='sm'
      sx={{
        flexGrow: 1,
        position: 'fixed',
        bottom: 0,
        right: 0,
      }}
    >
      <Container maxWidth="sm" sx={{textAlign: 'center'}}>
        <Typography variant='overline' display='block' gutterBottom>
          The page is designed by Debjit
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer;
