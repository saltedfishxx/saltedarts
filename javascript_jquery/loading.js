//loading page
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 2000); //sets time interval for loading 
  
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined && document.getElementsByTagName('img')[0] !== undefined) { //if webpage is loaded call back onReady func
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
  }
  
  function show(id, value) {

    document.getElementById(id).style.display = value ? 'block' : 'none';
   
  }
  onReady(function () {
    show('loading', false);
    show('page',true);
  });
