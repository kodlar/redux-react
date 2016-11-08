
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
var valueEl = $('#value');
var valueEl2 = $('#value2');
var stateCount = $('#status');

function render() {
  var state = store.getState();
	
   valueEl.text(state.count.result);
   valueEl2.text(state.sum);
	
	if(state.count.loading){
      stateCount.html('is loading....');
	} 
	else{
		 stateCount.html('loaded');
	}
	
	
	//images
	$('#imagesStatus').html(state.images.loading);
	
	if(state.images.loading == "images loading...")
		{
			$('#imagesList').html("");
		}
	
	else if(state.images.loading == "images loaded"){
		
		for(var i=0; i< state.images.data.length; i++)
			{
				$('#imagesList').append("<img src='" + state.images.data[i].link + "' style='height:200px'>");
			}
	}
	
};

store.subscribe(render);
// ~end step 1.3
render();


