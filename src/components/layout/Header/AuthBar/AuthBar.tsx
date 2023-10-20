import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  DirectionsRun as DirectionsRunIcon,
  MeetingRoom as MeetingRoomIcon,
} from '@mui/icons-material';

import { ref } from '@/constants/href';
const AuthBar = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <BottomNavigation showLabels sx={{ bgcolor: 'inherit' }}>
        <BottomNavigationAction
          component={NextLink}
          href={ref.login}
          label="Sign In"
          icon={
            <DirectionsRunIcon
              sx={(theme) => ({
                color:
                  router.pathname === ref.login
                    ? theme.palette.primary.main
                    : '',
              })}
            />
          }
        />
        <BottomNavigationAction
          component={NextLink}
          href={ref.register}
          label="Sign Up"
          icon={
            <MeetingRoomIcon
              sx={(theme) => ({
                color:
                  router.pathname === ref.register
                    ? theme.palette.primary.main
                    : '',
              })}
            />
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default AuthBar;
