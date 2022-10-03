export const addCart = (data)=>{
    return{
        type:"ADD_TO_CART",
        data:data
    }
}
export const removeCart = (_id)=>{
    return{
        type:"REMOVE_TO_CART",
        data:_id 
    }
}
export const increment = (_id)=>{
    return{
        type:"INCREMENT",
        data: _id
    }
}

export const decrement = (_id)=>{
    return{
        type:"DECREMENT",
        data: _id
    }
}
export const getTotal = ()=>{
    return{
        type:"GET_TOTAL",
        
    }
}