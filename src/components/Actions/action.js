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
export const totalItem = ()=>{
    return{
        type:"ITEMS",
        
    }
}
// export const removetTotalItem = (_id)=>{
//     return{
//         type:"REMOVE_ITEMS",
//         data: _id
//     }
// }

export const minusTotalItem = ()=>{
    return{
        type:"MINUS_ITEMS",
        
    }
}