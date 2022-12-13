burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})



var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

var data1 = 0;

document.getElementById("pizza counting 1").innerText = data1;
  
function increment1() {
    data1 = data1 + 1;
    document.getElementById("pizza counting 1").innerText = data1;
}

function decrement1() {
    if(data1>0){
      data1 = data1 - 1;
      document.getElementById("pizza counting 1").innerText = data1;
    }
}

var data2 = 0;

document.getElementById("burger counting 1").innerText = data2;
  
function increment2() {
    data2 = data2 + 1;
    document.getElementById("burger counting 1").innerText = data2;
}

function decrement2() {
    if(data2>0){
      data2 = data2 - 1;
      document.getElementById("burger counting 1").innerText = data2;
    }
}

var data3 = 0;

document.getElementById("cream counting 1").innerText = data3;
  
function increment3() {
    data3 = data3 + 1;
    document.getElementById("cream counting 1").innerText = data3;
}

function decrement3() {
    if(data3>0){
      data3 = data3 - 1;
      document.getElementById("cream counting 1").innerText = data3;
    }
}

var data4 = 0;

document.getElementById("biryani counting 1").innerText = data4;
  
function increment4() {
    data4 = data4 + 1;
    document.getElementById("biryani counting 1").innerText = data4;
}

function decrement4() {
    if(data4>0){
      data4 = data4 - 1;
      document.getElementById("biryani counting 1").innerText = data4;
    }
}

var data5 = 0;

document.getElementById("paneer counting 1").innerText = data5;
  
function increment5() {
    data5 = data5 + 1;
    document.getElementById("paneer counting 1").innerText = data5;
}

function decrement5() {
    if(data5>0){
      data5 = data5 - 1;
      document.getElementById("paneer counting 1").innerText = data5;
    }
}

var data6 = 0;

document.getElementById("kabab counting 1").innerText = data6;
  
function increment6() {
    data6 = data6 + 1;
    document.getElementById("kabab counting 1").innerText = data6;
}

function decrement6() {
    if(data6>0){
      data6 = data6 - 1;
      document.getElementById("kabab counting 1").innerText = data6;
    }
}

var data7 = 0;

document.getElementById("pizza counting").innerText = data7;
  
function increment7() {
    data7 = data7 + 1;
    document.getElementById("pizza counting").innerText = data7;
}

function decrement7() {
    if(data7>0){
      data7 = data7 - 1;
      document.getElementById("pizza counting").innerText = data7;
    }
}

var data8 = 0;

document.getElementById("burger counting").innerText = data8;
  
function increment8() {
    data8 = data8 + 1;
    document.getElementById("burger counting").innerText = data8;
}

function decrement8() {
    if(data8>0){
      data8 = data8 - 1;
      document.getElementById("burger counting").innerText = data8;
    }
}

var data9 = 0;

document.getElementById("cream counting").innerText = data9;
  
function increment9() {
    data9 = data9 + 1;
    document.getElementById("cream counting").innerText = data9;
}

function decrement9() {
    if(data9>0){
      data9 = data9 - 1;
      document.getElementById("cream counting").innerText = data9;
    }
}

var data10 = 0;

document.getElementById("biryani counting").innerText = data10;
  
function increment10() {
    data10 = data10 + 1;
    document.getElementById("biryani counting").innerText = data10;
}

function decrement10() {
    if(data10>0){
      data10 = data10 - 1;
      document.getElementById("biryani counting").innerText = data10;
    }
}

var data11 = 0;

document.getElementById("paneer counting").innerText = data11;
  
function increment11() {
    data11 = data11 + 1;
    document.getElementById("paneer counting").innerText = data11;
}

function decrement11() {
    if(data11>0){
      data11 = data11 - 1;
      document.getElementById("paneer counting").innerText = data11;
    }
}

var data12 = 0;

document.getElementById("kabab counting").innerText = data12;
  
function increment12() {
    data12 = data12 + 1;
    document.getElementById("kabab counting").innerText = data12;
}

function decrement12() {
    if(data6>0){
      data12 = data12 - 1;
      document.getElementById("kabab counting").innerText = data12;
    }
}

function getter(){
  var total=(110*data1)+(80*data2)+(65*data3)+(150*data4)+(120*data5)+(90*data6);
  var total1=(110*data7)+(80*data8)+(65*data9)+(150*data10)+(120*data11)+(90*data12);
  if(data1>=data7){
    document.getElementById("pizza-p").innerHTML = data1;
  }
  else if(data1<data7){
    document.getElementById("pizza-p1").innerHTML = data7;
  }
  if(data2>=data8){
    document.getElementById("burger-p").innerHTML = data2;
  }
  else if(data2<data8){
    document.getElementById("burger-p1").innerHTML = data8;
  }
  if(data3>=data9){
    document.getElementById("roll-p").innerHTML = data3;
  }
  else if(data3<data9){
    document.getElementById("roll-p1").innerHTML = data9;
  }
  if(data4>=data10){
    document.getElementById("biryani-p").innerHTML = data4;
  }
  else if(data4<data10){
    document.getElementById("biryani-p1").innerHTML = data10;
  }
  if(data5>=data11){
    document.getElementById("paneer-p").innerHTML = data5;
  }
  else if(data5<data11){
    document.getElementById("paneer-p1").innerHTML = data11;
  }
  if(data6>=data12){
    document.getElementById("kabab-p").innerHTML = data6;
  }
  else if(data6<data12){
    document.getElementById("kabab-p1").innerHTML = data12;
  }
  if(total>=total1){
    document.getElementById("total-p").innerHTML = total;
  }
  else if(total<total1){
    document.getElementById("total-p1").innerHTML = total1;
  }
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function togglePopup(){
  let popup = document.getElementById("popup-1");
  if(popup){
    popup.classList.toggle("active");
    if(!popup.classList.contains("active")){
      popup.parentElement.removeChild(popup);
    }
  }
}