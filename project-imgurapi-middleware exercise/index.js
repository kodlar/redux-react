
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
	
	
	//images
	document.getElementById('imagesStatus').innerHTML = state.images.loading;
	if(state.images.loading == "loading...")
		{
			document.getElementById('imagesList').innerHTML = "";
		}
	else if(state.images.loading == "loaded"){
		for(var i=0; i< state.images.data.length; i++)
			{
				document.getElementById('imagesList').innerHTML += ("<img src='" + state.images.data[i].link + "' style='height:200px'>")
			}
	}
	
};
store.subscribe(render);
// ~end step 1.3
render();


