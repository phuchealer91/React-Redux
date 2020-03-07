import {createStore} from 'redux';
import {status,sort} from './actions/index';
import myReducer from './reducers/index'; //ko pai la 1 function nen ko { }

const store = createStore(myReducer);
console.log("Default ", store.getState());
// var dm = {type: 'Toggle_status'}
store.dispatch(status());
console.log("Toggle_status ",store.getState());
// thực hiện chức năng sắp xếp
// var dm2 = {
//     type: 'SORT',
//     sort : {
//         by: 'name',
//         value: -1
//     }
// }

// store.dispatch(dm2);
// console.log("SORT",store.getState());

// var dm3 = {
//     type: 'employ',
//     employee: {
//         name: "Frank",
//         age: 27,
//         job: "Developer"
//       }
// }
// store.dispatch(dm3);
// console.log("employ",store.getState());
// var dm3 = {
//     type: 'sort',
//     sort : {
//         by: 'name',
//         value: -1
//     }
// }
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log("SORT",store.getState());