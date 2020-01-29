// Grace Mao and Derek Leung
// SoftDev1 pd9
// K29 -- Sequential Progression III
// 2019-12-12

//var b = document.getElementById("error");
//b.addEventListener('click', function(e) { console.log(e) });

var changeHeading = function(e) { // e is an event
  var h = document.getElementById("h");//select heading
  if (e.type == 'mouseover') {//is the mouse on something?
    h.innerHTML = e.target.innerHTML; //if yes, change heading to the text of the thing the mouse is on
  } else {
    h.innerHTML = "Hello World!"; //if the mouse isn't on anything, heading is Hello World
  }
};

var removeItem = function(e) {
  e.target.remove(); //remove the thing that the mouse is on
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) { //adds event listeners to all the list items
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', changeHeading);
  lis[i].addEventListener('click', removeItem);
};

var addItem = function(e) { //add function for first list
  var list = document.getElementById("thelist");
  var item = document.createElement("li"); //create new thing to be in big list
  item.innerHTML = "WORD";
  //adding all the event listeners
  item.addEventListener('mouseover', changeHeading);
  item.addEventListener('mouseout', changeHeading);
  item.addEventListener('click', removeItem);
  list.appendChild(item);
};

var button = document.getElementById("b"); //fibonacci button
button.addEventListener('click', addItem);

var fibs = {
  nums: [],
  add: function() {
    var ans;
    if (this.nums.length < 2) { // if the length is less than 2, the statement in else won't work
      ans = 1;
    } else { // append the next fibonacci number into the list
      ans = this.nums[this.nums.length - 1] + this.nums[this.nums.length - 2];
    }
    this.nums.push(ans);
    return ans;
  }
}

var addFib = function(e) {
  console.log(e);
  var list = document.getElementById("fiblist"); //selects the list element in the html
  var item = document.createElement("li"); //creats another thing in the list
  item.innerHTML = fibs.add(); //adds new number inside list thing
  list.appendChild(item); //adds list thing to big list
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);
