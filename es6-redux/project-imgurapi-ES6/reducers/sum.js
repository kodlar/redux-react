var  sum = (currentState = 3, action) => {
	  switch (action.type) {
		case 'SUM':
		 return currentState  = parseInt(action.a) + parseInt(action.b);
	     //  funcWithError();
		default:
		  return currentState;
	  }

}

var funcWithError = () => {throw Error('an error from sum');}

