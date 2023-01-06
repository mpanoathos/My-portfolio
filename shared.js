var backdrop=document.querySelector('.backdrop');
var toogleButton=document.querySelector('.toogle-button');
var mobileNav=document.querySelector('.mobile-nav');
backdrop.addEventListener('click',function(){
    mobileNav.style.display="none";
    close();
});
function close(){
    backdrop.style.display="none";
}

toogleButton.addEventListener('click',function(){
    mobileNav.style.display='block';
});