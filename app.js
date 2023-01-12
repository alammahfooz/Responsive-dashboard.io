function togglemenu(){
    let toggle = document.querySelector(".toggle");
    let navgation = document.querySelector(".navgation");
    let main = document.querySelector(".main");

    toggle.classList.toggle("active");
    navgation.classList.toggle("active");
    main.classList.toggle('active');
}