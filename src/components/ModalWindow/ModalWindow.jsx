import { useState } from 'react';
import { Button, Modal } from '@mui/material';
import GameCard from '../views/MainPage/GameCard/GameCard.jsx'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow({ question }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      {
        question.isCorrect  ?
        <Button style={{color: 'red'}} >{question.score}</Button>
        :
        <Button  onClick={handleOpen}    >{question.score}</Button>
      }
     
      <Modal
        open={open}
        onClose={handleClose}
      >
        <GameCard question={question} />
      </Modal >
    </div>
  );
}
