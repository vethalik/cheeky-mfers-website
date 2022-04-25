import React, {useState} from 'react'
import LoginModal from "../../LoginModal";
import {
  Button,
} from '@mui/material'

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <span>
      <Button
        color="inherit"
        onClick={handleOpen}
      >
        Login
      </Button>
      <LoginModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
      />
    </span>
  )
}

export default LoginButton