import React, { useState } from 'react';
import { AppBar, IconButton, Typography, Avatar, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {


  const state = useSelector((state) => state.topicsReducer.topics)

  const scoreArr = state.filter(obj => obj.isCorrect)
  const scoreSum = scoreArr.map(arr => arr.score)
  const result = scoreSum.reduce((el, acc) => acc+=el, 0)

  console.log(result);

  return (
    <AppBar position="static" >

      <Container style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "60px",
        width: "100%"
      }}>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          SCORE: {result}
        </Typography>

        <IconButton sx={{ p: 0 }}>
          <Avatar alt="username" src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" />
        </IconButton>

      </Container>
    </AppBar>
  );
};
export default Navbar;


