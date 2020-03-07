var initState = {
        by: 'name',
        value: 1
}

var myReducer = (state = initState, action) => {
    if(action.type === 'sort'){
        let {by,value} = action.sort;
       return {by,value};
    }
    return state;
    //  if(action.type === 'SORT'){
    //     // let {sort} = action;
    //     // state.sort = sort
    //     // let {by,value} = action.sort; // lay tu tham so o duoi
    //     // let {status} = state; //lay tu state 
    //     // return {
    //     //     status : status,
    //     //    sort: {
    //     //        by: by,
    //     //        value: value
    //     //    }
    //     // }
    //     let state_tmp = {...state}
    //     console.log(state_tmp);
    //     // state_tmp.sort = action.sort
    //     // return state_tmp;
        
      
    // }
    // if (action.type === "employ") {
    //     employees.push(action.employee);
    //     return {
    //       status,
    //       employees
    //     };
    //   }
    //   return state;
    // }
    // return state;
}
export default myReducer;
//Đơn giản nếu bạn chỉ export 1 lần, và bạn dùng export default thì bên kia bạn import sử dụng tên gì cũng được, nó cũng hiểu vì chỉ có mỗi 1 cái export