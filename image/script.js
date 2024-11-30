let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}
changeText();
setInterval(changeText, 3000);

// Active Menu---------------------------------------------//

let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky Header--------------------------------------------------------//

const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50)
})

// toggle icon navbar--------------------------------------------------//
let menuicon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuicon.onclick = ()=>{
    menuicon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuicon.classList.remove("bx-x");
    navlist.classList.remove("open");
}
// Intersection Observer for Animations---------------------------------//

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


// home background ---------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById("home");
    const images = ["bg.jpg"
     ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        homeSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackgroundImage();

    // Change background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 3000);
});

   

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        fetch('your_server_endpoint_here', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                
                alert('Message sent successfully!');
                
                document.getElementById('contact-form').reset();
            } else {
                
                alert('Error sending message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        
        const productContainer = document.getElementById("product-container");
        const viewAllBtn = document.getElementById("view-all-btn");

        
        viewAllBtn.addEventListener("click", function(event) {
            event.preventDefault(); 

            
            productContainer.classList.toggle("show-all-products");

            
            if (productContainer.classList.contains("show-all-products")) {
                viewAllBtn.textContent = "Show Less";
            } else {
                viewAllBtn.textContent = "View all";
            }
        });
    });

