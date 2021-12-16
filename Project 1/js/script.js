
var menuButton = document.querySelector("#dropdownButton");
menuButton.addEventListener("click", toggleMenu);

var dropMenu = document.querySelector("#dropDown");
dropMenu.addEventListener("click", toggleMenu);


function toggleMenu () {
  if (document.querySelector("#dropDown").classList.contains("active")) {
    dropMenu.classList.remove("active");
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = "auto";  
  } 
  else {
    dropMenu.classList.add("active");
    document.body.style.overflow ="hidden";
    menuButton.setAttribute('aria-expanded', 'true');
  }
}

  function openForm() {
    var x = document.getElementById("formBox");
      x.style.display = "block";
  }
  document.addEventListener('click', function(e){
      if(e.target.id!=="dropDown" && e.target.id!=="dropdownButton" && dropMenu.classList.contains("active")) {
        dropMenu.classList.remove("active");
        menuButton.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = "auto";   
      }
    });

  window.smoothScroll = function(target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }
 