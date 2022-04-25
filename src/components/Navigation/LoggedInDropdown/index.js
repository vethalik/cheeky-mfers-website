import React, {useContext, useState} from 'react'
import {
  Avatar, Box,
  Button, Divider, ListItemIcon, Menu, MenuItem, Tooltip,
} from '@mui/material'
import IconButton from "@mui/material/IconButton";
import {Logout} from "@mui/icons-material";
import {AuthContext} from "../../../containers/AuthContext";
import {LS_KEY, trimAddress, trimAddressForAvatar} from "../../../common";
import Link from "next/link";

const LoggedInDropdown = ({ user }) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    setAuth({})
  }

  const {publicAddress} = auth
  
  const trimmedAddress = trimAddress(publicAddress)
  const avatarAddress = trimAddressForAvatar(publicAddress)
  
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {avatarAddress}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {trimmedAddress}
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLoggedOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>


    </>
  )
}

export default LoggedInDropdown