import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Link,
  List,
  ListItem,
} from '@mui/material';
import NextLink from 'next/link';
import {
  DirectionsRun as DirectionsRunIcon,
  MeetingRoom as MeetingRoomIcon,
} from '@mui/icons-material';
import { useState } from 'react';
const AuthBar = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ display: 'flex' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: 'primaryLight.main' }}
      >
        <BottomNavigationAction
          component={NextLink}
          href="/auth/login"
          label="Sign In"
          icon={<DirectionsRunIcon />}
          sx={{}}
        />
        <BottomNavigationAction
          component={NextLink}
          href="/auth/register"
          label="Sign Up"
          icon={<MeetingRoomIcon />}
        />
      </BottomNavigation>
      {/*<Button*/}
      {/*  component={NextLink}*/}
      {/*  variant="outlined"*/}
      {/*  href="/auth/login"*/}
      {/*  sx={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}*/}
      {/*>*/}
      {/*  <DirectionsRunIcon sx={{ display: { sx: 'none', md: 'block' } }} />*/}
      {/*  Sign In*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  component={NextLink}*/}
      {/*  variant="contained"*/}
      {/*  href="/auth/register"*/}
      {/*  sx={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}*/}
      {/*>*/}
      {/*  <MeetingRoomIcon sx={{ display: { sx: 'none', md: 'block' } }} />*/}
      {/*  Sign Up*/}
      {/*</Button>*/}
    </Box>
  );
};

export default AuthBar;
