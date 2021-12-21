import {
  topicsAT
} from "../actionTypes/topicsAT"
import {
  data as topics
} from '../../data'

const initialState = {
  topics
}

export const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case topicsAT.SET_TRUE:
      return {
        ...state, topics: state.topics.map((topic) => {
          if (topic.id === action.payload.question.id) {
            if (topic.answer === action.payload.answer) {
              return {
                ...topic,
                isCorrect: true
              } 

            } return {...topic, isCorrect: false}
          }
          return topic
        })
      }

      default:
        return state
  }
}
