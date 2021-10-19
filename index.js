/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

  /*top bar nav*/

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
  /*example of top nav*/

  $('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function(e) {
    var submenu = $(this);
    $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
  });

  $('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
  });

  /*changing color of clicked button*/

  /*btn-group
= IF(yourconditionhere, "Clicked", "NotClicked")*/


/*let btnSecondary = document.querySelector('#primary');

btnSecondary.addEventListener('click', () => btnSecondary.style.backgroundColor = '#337ab7')*/
