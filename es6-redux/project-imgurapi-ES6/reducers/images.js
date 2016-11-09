

var images = (currentState = {data : [], loading : "Please click the 'random images' loading button"}, action) =>
{
	  switch (action.type) {
		case 'IMAGES_LOADING': 
		  return Object.assign({}, currentState, { loading : "images loading... "});
		case 'IMAGES': 
		  return Object.assign({}, currentState, { data : action.data, loading : "images loaded" });
        case 'IMAGES_LOADING_ERROR': // look at Note2.1
		return Object.assign({}, currentState, { loading :  "please refresh the page network connection lost"});
		default:
		  return currentState;
	  }
}