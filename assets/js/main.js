/*-----------------------Show Menu-----------------------*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*-----------------------Remove Menu Mobile-----------------------*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // click each nav__link to remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((event) => {
    event.addEventListener("click", linkAction);
});

/*-----------------------Add blur to header-----------------------*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*-----------------------Email JS-----------------------*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault(); // service id // template id //#form //publickey
    emailjs
    .sendForm(
        "service_dx0slna", 
        "template_zj76dv7", 
        "#contact-form", 
        "cfgI_wocEvWqdaEpV" 
    )
    .then(
        () => {
            // Show sent message
            contactMessage.textContent = "Message sent successfully ✅";
            // Remove message after it is sent
            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);
            // clear inputs field of form
            setTimeout(() => {
                contactForm.reset();
            }, 3000);
        },
        () => {
            // Show error msg
            contactMessage.textContent =
                "Message not sent (service error) ❌";
        }
    );
};

contactForm.addEventListener("submit", sendEmail);




/*-----------------------Show scroll up-----------------------*/

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 vh, add the show-scroll class to the header tag
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);


/*-----------------------Scroll sections active link-----------------------*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 58;
        const sectionId = currentSection.getAttribute("id");
        // const sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId +']')
        const sectionsClass = document.querySelector(
            `.nav__menu a[href*='${sectionId}']`
        );

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*-----------------------Scroll reveal animation-----------------------*/


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
});
sr.reveal(
    `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });