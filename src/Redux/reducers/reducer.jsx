const INIT_STATE={
     carts:[] 
};

export const cartreducer = (state=INIT_STATE,action)=>{
    switch (action.type) {
        case 'ADD_CART':
            const ItemIndex = state.carts.findIndex((item)=> item.id=== action.payload.id);
            
            
            if(ItemIndex >=0){
                state.carts[ItemIndex].qnty +=1
            } else {
                const temp = {...action.payload,qnty:1};
                return {
                    ...state,
                carts:[...state.carts,temp]
                }
            }
            
        case 'RMV_CART':
            const rmvData = state.carts.filter((data)=>data.id!==action.payload);
            
            return {
                ...state,carts:rmvData
            }

        default:
            return state
    }
}