// step 1.2
var store = Redux.createStore(combineReducer)
// ~end step 1.2
// step 1.3
var valueEl = document.getElementById('value');
var valueEl2 = document.getElementById('value2');

function render() {
  var state = store.getState();
   valueEl.innerHTML = state.count;
   valueEl2.innerHTML = state.sum;
    };
store.subscribe(render);
// ~end step 1.3
render();


document.getElementById('decrement')
  .addEventListener('click', function () {
    // step 2.1
    store.dispatch(decrease());
    // ~end step 2.1
  })

document.getElementById('incrementAsync')
  .addEventListener('click', function () {
    setTimeout(
      function increment () {
        // step 2.1
       // Note2.1
        store.dispatch(increase());
        // ~end step 2.1
      }
    , 1000); // execute increment () method after 1000 millisecond or 1 second
  })

  document.getElementById('sum')
    .addEventListener('click', function(){
      var a = document.getElementById('a').value;
      var b = document.getElementById('b').value;
      console.group('değerler')
	  console.log(a);
	  console.log(b);
	  console.groupEnd('değerler bitti');
      store.dispatch(getSum(a,b));
      
    })
