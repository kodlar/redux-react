function sum(currentState, action)
{
	var DEFAULT_STATE = 3;
	 if (currentState === undefined) { // look at to Note 1.1
		nextState = DEFAULT_STATE;// Note1.2
		return nextState;
	  }

	  switch (action.type) {
		case 'SUM':
		   nextState  = parseInt(action.a) + parseInt(action.b);
	       funcWithError();
		  return nextState
		default:
		   nextState = currentState;
		  return nextState;
	  }
}

function funcWithError(){
	throw Error('an error from sum')
}
