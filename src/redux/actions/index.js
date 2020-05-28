import * as ActionType from '../constant/ActionType'

export const addBread = (propsBurger, amount) =>{
    return {
      type: ActionType.ADD_BREADMID,
      propsBurger,
      amount
    };
}