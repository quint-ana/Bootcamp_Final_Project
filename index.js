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