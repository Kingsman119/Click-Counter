var count = 0;
var btn = document.getElementById("btn1");
var disp = document.getElementById("display");

btn1.onclick = function () {
  count++;
  disp.innerHTML = count;
};

btn2.onclick = function () {
    count--;
    disp.innerHTML = count;
  };

  btn3.onclick = function () {
    count=0;
    disp.innerHTML = count;
  };