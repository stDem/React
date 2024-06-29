import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Menu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
 
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>Home</Button>
        <Button>Menu</Button>
        <Button>Contacts</Button>
      </ButtonGroup>
    </Box>
  );
}