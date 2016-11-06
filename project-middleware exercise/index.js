
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
var valueEl = document.getElementById('value');
var valueEl2 = document.getElementById('value2');
var stateCount = document.getElementById('status');
function render() {
  var state = store.getState();
   valueEl.innerHTML = state.count.result;
   valueEl2.innerHTML = state.sum;
	
	if(state.count.loading){
      stateCount.innerHTML = 'is loading....';
	} 
	else{
		 stateCount.innerHTML = 'loaded';
	}
};
store.subscribe(render);
// ~end step 1.3
render();


