
export default function(state="none", action){

  switch(action.type){
    case "GET_PASSWORDS_START":
      return "fetching-passwords";
    case "GET_PASSWORDS_FAILED":
      return "failed";
    case "GET_PASSWORDS_SUCCESS":
      return "none";
    default:
      return state;
  }

}
