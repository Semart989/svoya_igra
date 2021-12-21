import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { topicsAC } from '../../../../redux/actionCreators/topicsAC';

//Здесь просто заберем всё, что необходимо из store и динамически по ключу карточки отдаем в компоненты


function GameCard({ question }) {

  const dispatch = useDispatch()
  

  const [state, setState] = useState('');
  const [answered, setAnswered] = useState(false);

  const handlerClick = (e) => {
    dispatch(topicsAC({question, answer: state}));
    setAnswered(true);
  }

  return (

    <Card sx={{ width: '600px', margin: '200px auto' }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Тема: {question.topic}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Вопрос за {question.score}: {question.question}
        </Typography>
      </CardContent>

      <CardActions>

        <Input
          onChange={(e) => setState(e.target.value)}
          name={`input${question.id}`}
          placeholder="Введите ответ"
          sx={{ width: '400px' }} />
        <Button onClick={handlerClick} data-id={question.id} size="medium">Ответить</Button>

      </CardActions>

      <CardContent>
        <Typography>
          {
            answered && (
              <div>{
                question.isCorrect
                  ? 'Верно'
                  : 'Неправильно'
              }</div>
            )
          }
        </Typography>
      </CardContent>
    </Card>

  )
}

export default GameCard
