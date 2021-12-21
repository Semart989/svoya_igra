import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import ModalWindow from "../../../ModalWindow/ModalWindow.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function GameField() {



  const state = useSelector((state) => state.topicsReducer.topics)
  const dispatch = useDispatch()

  const t1questions = state.filter(obj => obj.topic === "Советские загадки")
  const t2questions = state.filter(obj => obj.topic === "Войти в IT")
  const t3questions = state.filter(obj => obj.topic === "Эльбрусовские качели")

  return (
    //Проверка того, что пользователь залогинен, после только отрисовка игрового поля
    <TableContainer sx={{ width: "80%", margin: '100px auto' }} component={Paper}>

      <Table aria-label="simple table">

        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row">
                  {t1questions[0].topic}
                </TableCell>
            {t1questions.map((question) => (
                              
                <TableCell key={question.id} component="th" scope="row">
                  <ModalWindow question={question} />
                </TableCell>
              
            ))}
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row">
                  {t2questions[0].topic}
                </TableCell>
            {t2questions.map((question) => (

              <TableCell key={question.id} component="th" scope="row">
                <ModalWindow question={question} />
              </TableCell>

            ))}
          </TableRow>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row">
                  {t3questions[0].topic}
                </TableCell>
            {t3questions.map((question) => (

              <TableCell key={question.id} component="th" scope="row">
                <ModalWindow question={question} />
              </TableCell>

            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default GameField
