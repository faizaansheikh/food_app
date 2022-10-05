const initialState = 0
const incrementNum = (state = initialState, action) => {
    switch (action.type) {
        case "ITEMS": return state + 1
        case "MINUS_ITEMS": return state - 1
        // case "REMOVE_ITEMS": return state -= 1
        
        default: return state
        

    }
}
export default incrementNum;