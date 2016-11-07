


// step 2.2

function combineReducer(currentState, action) {
  var DEFAULT_STATE = {count:0, sum:3 };
  var nextState = Object.assign({},currentState);
  nextState  = {
	  count : counter(nextState.count , action),
	  sum : sum(nextState.sum, action),
	  images : images(nextState.images, action)
  }	
	return nextState;

}

//~end step 2.2