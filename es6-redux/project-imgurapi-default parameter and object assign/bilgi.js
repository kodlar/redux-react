var reducer = (state = {a: "a", b: "b", c:"c"}) => {
	var nextState = Object.assign({},
								 state,
								  {a : "A 2", b: "B 2"},
								  {b : "B 3"});
	
	console.log("state: ", state);
	console.log("next state: ", nextState);
	return nextState;
}
// burada reducer parametre verirsek, gönderdiğimiz parametre state nesnesini dolduracak
// eğer reducer fonk. null parametre verirsek state nesnesi null oluyor
// ancak redurcer fonk. undefined verirsek state nesnesi eşitliğin sağındaki default nesneye atanıyor
reducer();