import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("GET_PASSWORDS_START")
  .mergeMap(action =>
    Rx.Observable.ajax({url:"/api/passwords", method:"GET", responseType:"json"})
  )
  .map(ajaxResponse => {
    if(ajaxResponse.status === 200){
      return {type:"GET_PASSWORDS_SUCCESS", payload:ajaxResponse.response};
    }else{
      return {type:"GET_PASSWORDS_FAILED"};
    }
  });
}
