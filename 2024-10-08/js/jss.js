var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
const timer = null; 


function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    document.getElementById('time').textContent = timeString;
}


function startTimer() {
    if (timer === null) { 
        timer = setInterval(updateTime, 1000); 
        updateTime(); 
    }
}


function stopTimer() {
    if (timer !== null) { 
        clearInterval(timer); 
        timer = null; 
    }
}


document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);