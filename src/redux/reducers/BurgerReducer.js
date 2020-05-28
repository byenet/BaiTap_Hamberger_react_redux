import * as ActionType from '../constant/ActionType'

const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },

    menu: {   salad: 10, 
            cheese: 20, 
            beef: 55 
        },
        
    total: 85
};

export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case ActionType.ADD_BREADMID:{
            let {propsBurger,amount} = action;
            //Thay doi so luong
            if(amount === -1 && state.burger[propsBurger] < 1){
                return {...state}
            }
            let burgerUpdate = {...state.burger};
            burgerUpdate[propsBurger] += amount;
            state.burger = burgerUpdate;

            // Tinh tong tien
            state.total += amount * state.menu[propsBurger];
            return {...state}
            
        } break;

        default:{
            return { ...state };
        }
        
    }
    
}