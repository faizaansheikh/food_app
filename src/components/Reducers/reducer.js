const initialState = {
    cardData: []

}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cardData: [...state.cardData,action.data]
                
            } 
        case "REMOVE_TO_CART":
            const data = state.cardData.filter((elem) => elem._id !== action.data)
            return {
                ...state, cardData: data
            }
        case "INCREMENT":
            const incData = state.cardData.map((elem) => {
                if (elem._id === action.data) {
                    return { ...elem, countInStock: elem.countInStock + 1}
                }
                return elem
            })
            return {...state, cardData: incData }

        case "DECREMENT":
            const decData = state.cardData.map((elem) => {
                if (elem._id === action.data) {
                    return { ...elem, countInStock: elem.countInStock - 1 }
                }
                return elem
            }).filter((elem) => elem.countInStock !== -1);
            return {...state, cardData: decData }

           

            
        default:
            return state
    }
}
export default cartReducer;