import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@reach/router';

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={navLinkStyle}>
              Open Source Devs
            </Link>
          </Typography>
          <Button color='inherit'>
            <Link to='about' style={navLinkStyle}>
              About
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
