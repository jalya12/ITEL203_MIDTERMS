//header navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//course button
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//ITEL201 Buttons
function ITEL201P1(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P1ITEL201');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }
    
function ITEL201P2(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P2ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P3(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P3ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P4(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P4ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P5(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P5ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P6(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P6ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P7(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P7ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

function ITEL201P8(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P8ITEL201');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL201.html', true);
        xhr.send();
    }

//ITEL202 Buttons
function ITEL202P1(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P1ITEL202');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }
    
function ITEL202P2(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P2ITEL202');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }

function ITEL202P3(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P3ITEL202');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }

function ITEL202P4(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P4ITEL202');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }

function ITEL202P5(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P5ITEL202');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }

function ITEL202P6(){
  var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P6ITEL202');
                if (elementToUnhide) {
                      elementToUnhide.style.display = 'block';
                }
                 var newWindow = window.open();
                 newWindow.document.write(tempContainer.innerHTML);
            }
          };
        xhr.open('GET', 'ITEL202.html', true);
        xhr.send();
    }

//ITEP203 Buttons
function ITEP203P1(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P1ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }
    
function ITEP203P2(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P2ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }

function ITEP203P3(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P3ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }

function ITEP203P4(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P4ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }

function ITEP203P5(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P5ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }

function ITEP203P6(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P6ITEP203');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEP203.html', true);
        xhr.send();
    }

//ITEC204 Buttons
function ITEC204P1(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P1ITEC204');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC204.html', true);
        xhr.send();
    }
    
function ITEC204P2(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P2ITEC204');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC204.html', true);
        xhr.send();
    }

function ITEC204P3(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P3ITEC204');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC204.html', true);
        xhr.send();
    }

function ITEC204P4(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P4ITEC204');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC204.html', true);
        xhr.send();
    }

//ITEC205 Buttons
function ITEC205P1(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P1ITEC205');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC205.html', true);
        xhr.send();
    }
    
function ITEC205P2(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P2ITEC205');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC205.html', true);
        xhr.send();
    }

function ITEC205P3(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P3ITEC205');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC205.html', true);
        xhr.send();
    }

function ITEC205P4(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText;
                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = response;
                var elementToUnhide = tempContainer.querySelector('#P4ITEC205');
                if (elementToUnhide) {
                    elementToUnhide.style.display = 'block';
                }
                var newWindow = window.open();
                newWindow.document.write(tempContainer.innerHTML);
            }
        };
        xhr.open('GET', 'ITEC205.html', true);
        xhr.send();
    }

    