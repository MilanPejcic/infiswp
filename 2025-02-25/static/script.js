const content = document.getElementsByTagName('body')[0];
const darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
for (i = 1; i <= 10; i++) {
    console.log(i);
    document.getElementById("liste").innerHTML+=` <li>${i}</li>`
}