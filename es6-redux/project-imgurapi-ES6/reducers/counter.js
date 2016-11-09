
var counter = (currentState = { result: 0 , loading : false}, action) =>
{
	  switch (action.type) {
		case 'DECREMENT': 
		  return Object.assign({}, currentState, {result : currentState.result - 1, loading : false}) 
		case 'INCREMENT': 
		   return Object.assign({}, currentState, {result : currentState.result + 1 , loading : false}) 
	    case 'INCREMENT_LOADING': 
			   return Object.assign({}, currentState, {loading : true}) 
		default:
		  return currentState;
	  }

}