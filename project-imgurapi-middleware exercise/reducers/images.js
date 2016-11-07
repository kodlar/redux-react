function images(currentState,action)
{
	var DEFAULT_STATE = {data : [], loading : "Please click the 'random images' loading button"}
	var nextState = Object.assign({}, currentState);
	if(currentState === undefined)
		{
			nextState = DEFAULT_STATE;
		    return nextState;
		}
	  switch (action.type) {
		case 'IMAGES_LOADING': // look at Note2.1
		  nextState.loading = 'loading...';
		  return nextState;// Note2.2
		case 'IMAGES': // look at Note2.1
		  nextState.loading = "loaded";
		  nextState.data = action.data;
		  return nextState;// Note2.2

		default:
		   nextState = currentState;
		  return nextState;
	  }
}