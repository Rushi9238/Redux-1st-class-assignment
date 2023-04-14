const initaldata={
    name:''
}
export const myReducer=(data=initaldata,action)=>{

    // console.log(action);
    if(action.type==='name'){
       return {
        name:action.username
    }
    }


    return data

}