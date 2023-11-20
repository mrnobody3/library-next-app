'use client';

import { signOut, useSession } from 'next-auth/react';
import { MouseEvent, useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

// import useAxiosAuth from '@/hooks/useAxiosAuth';
import { signOutUser } from '@/services/api/signOutUser';

const settings = ['Profile', 'Account', 'Dashboard'];

const UserBar = () => {
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSignOut = async () => {
    // signOut();

    const res = await signOutUser();
    console.log(res);
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              p: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar alt={session?.user.name} src={session?.user.avatarUrl} />
            <Typography variant={'body2'}>{session?.user.name}</Typography>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px', pl: '20px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
          <Divider />
          <Button
            type="button"
            variant="contained"
            sx={{ display: 'block', mx: 'auto' }}
            onClick={onSignOut}
          >
            Logout
          </Button>
        </Menu>
      </Box>
    </>
  );
};

export default UserBar;
