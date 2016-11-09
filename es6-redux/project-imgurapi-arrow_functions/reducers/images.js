var images = (currentState,action) =>

	var DEFAULT_STATE = {data : [], loading : "Please click the 'random images' loading button"}
	var nextState = Object.assign({}, currentState);
	if(currentState === undefined)
		{
			nextState = DEFAULT_STATE;
		    return nextState;
		}
	  switch (action.type) {
		case 'IMAGES_LOADING': // look at Note2.1
		  nextState.loading = 'images loading...';
		  return nextState;// Note2.2
		case 'IMAGES': // look at Note2.1
		  nextState.loading = "images loaded";
		  nextState.data = action.data;
		  return nextState;// Note2.2
        case 'IMAGES_LOADING_ERROR': // look at Note2.1
		  nextState.loading = 'please refresh the page network connection lost';
		  return nextState;// Note2.2
		default:
		   nextState = currentState;
		  return nextState;
	  }
