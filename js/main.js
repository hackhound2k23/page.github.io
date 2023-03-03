var countDownDate = new Date("March 4, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S " ;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-title").innerHTML = "PROBLEM STATEMENTS ARE OUT!";
    document.getElementById("day").innerHTML = "<a target='_blank' class='text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2' data-mdb-ripple='true' data-mdb-ripple-color='light' href='https://marvelous-hippodraco-0a4.notion.site/HackHound-2k23-Hacker-s-Guide-db206f2c267e4d82bb15216e55a46c2b' role='button'>Hacker's guide</a>";
  }
}, 1000);