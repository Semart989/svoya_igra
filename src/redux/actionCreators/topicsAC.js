import { topicsAT } from '../actionTypes/topicsAT'

export const topicsAC = (payload) => {
  return {
    type: topicsAT.SET_TRUE,
    payload
  }
}
