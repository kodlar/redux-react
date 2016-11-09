//middleware 
const logger = store => next => action => {
			console.group('logger');
			console.log('current state == ',  store.getState());
			console.info('next(action) // action == ', action);
			next(action);
			console.log('next state == ',  store.getState());
			console.groupEnd('logger');
		}
	


//second middleware 
const crashReporter = store => next => action => {
			try{
				next(action);
				}
			catch(err)
				{
					console.group('crashReporter');
					console.error('error happen with action == ', action);
					console.error(err);
					console.groupEnd('crashReporter');
				}
			
		}
	


//third middleware 
const thunk = store => next => action => {
	
			if(typeof action === 'function'){
				action(store.dispatch, store.getState());
			}
			else{
				next(action);
			}
			
		}
	

