const subMenus = ['submenu1', 'submenu2', 'submenu3'];
let activeSubMenu, player;

function growDiv() {
  const growDivs = document.getElementsByClassName('grow');

  for (let div of growDivs) {
    if (div.clientHeight) {
      div.style.height = 0;
    } else {
      let wrapper = div.getElementsByClassName('measuringWrapper')[0];
      div.style.height = wrapper.clientHeight + "px";
    }
  }
}

function closeSubMenu() {
  $('.active-class').each(function () {
    $(this).removeClass('active-class');
  })
  let section = document.getElementById(activeSubMenu);
  section.classList.remove('active');
  section.style['height'] = 0;
  activeSubMenu = undefined;
}

function displaySubMenu(elem, id) {
  let section;
  const prevSubMenu = activeSubMenu;

  
  if (activeSubMenu) {
    closeSubMenu();
  } 

  if ( !prevSubMenu || prevSubMenu !== id) {
    elem.classList.add('active-class');
  }

  if (prevSubMenu === id) {
    return;
  }

  setTimeout(function () {
    section = document.getElementById(id);
    section.classList.add('active');
    section.style['height'] = section.scrollHeight + 'px';
    activeSubMenu = id;
  }, prevSubMenu ? 300 : 0);
}

function createVideo() {
  const opts = {
    id: '357237146',
    width: '100%'
  }

  player = new Vimeo.Player('promo-video', opts);

  player.setVolume(1);

  player.on('play', function () {
    const overlay = document.getElementsByClassName('promo-video-overlay')[0];
    overlay.style.display = 'none';
  });


  player.on('pause', function () {
    const overlay = document.getElementsByClassName('promo-video-overlay')[0];
    overlay.style.display = 'flex';
  });

  return player;
}

function playVideo() {
  if (player) {
    player.play();
  }
}


function setupMenuIconEffect() {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  //set Initial state of menu

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");

      //Set menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");

      //Set menu State
      showMenu = false;
    }
  }
}

(function setup() {
  setupMenuIconEffect();
  if($('#video').length){
    const video = createVideo();
  }
})();

$(document).ready(function() {
  console.log('doc ready');
  $('.mouseover').each((idx, el) => {
    const textEl = $(el).find('.text-over');

    $(el).hover(() => {
      $(textEl).slideToggle(150);
    }, () => {
      $(textEl).slideToggle(150);
    });
  });

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });

  var userFeed = new Instafeed({
      get: 'user',
      userId: '18494899861',
      limit: 12,
      resolution: 'standard_resolution',
      accessToken: '18494899861.1677ed0.dcbfa6c870fb44629a68b00734290d19',
      sortBy: 'most-recent',
      template: '<div class="col-lg-3 col-md-4 col-xs-6 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  });

  userFeed.run();

  console.log('log >>>',userFeed)

});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



