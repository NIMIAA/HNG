function displayOfUTCTimeAndDay(){
    let now = new Date();

let utcHours = now.getUTCHours();
let utcMinutes = now.getMinutes();
let utcSeconds = now.getSeconds();

let utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let utcDayOfWeek = daysOfWeek[now.getUTCDay()];

document.getElementById('utc-time').textContent = utcTime;
document.getElementById('utc-day').textContent = utcDayOfWeek;
};
displayOfUTCTimeAndDay();
setInterval(displayOfUTCTimeAndDay, 1000);

//toggle navbar on

function toggleNavbar(){
    var mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
}

document.addEventListener('click', function(event){
    var navbarMenu = document.getElementById('mobile-nav');
    var navbarToggle = document.querySelector('.navbar-toggle');
    
    if(!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)){
        navbarMenu.classList.remove('active');
    }
})