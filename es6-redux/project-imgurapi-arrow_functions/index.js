
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))



var render = () => {
   var state = store.getState();
	
   $('#value').text(state.count.result);
   $('#value2').text(state.sum);
	
	if(state.count.loading){
      $('#status').html('is loading....');
	} 
	else{
		 $('#status').html('loaded');
	}
	
	
	//images
	$('#imagesStatus').html(state.images.loading);
	
	if(state.images.loading == "images loading...")
		{
			$('#imagesList').html("");
		}
	
	else if(state.images.loading == "images loaded")
	{
		
		 for(var i=0; i< state.images.data.length; i++)
			{
				$('#imagesList').append("<img src='" + state.images.data[i].link + "' style='height:200px'>");
			}
	}
	
}

store.subscribe(render);

render();


