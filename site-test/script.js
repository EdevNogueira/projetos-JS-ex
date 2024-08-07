document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");

    const themeToggleButton = document.getElementById("toggle-theme");
    themeToggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Menu de Navegação Responsivo
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    // Modal de Contato
    const modal = document.getElementById("contact-modal");
    const openModalButton = document.getElementById("open-modal");
    const closeModalButton = document.getElementsByClassName("close")[0];

    openModalButton.onclick = function() {
        modal.style.display = "block";
    }

    closeModalButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Validação e Feedback do Formulário
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formFeedback.style.color = "red";
            formFeedback.textContent = "Por favor, preencha todos os campos.";
        } else if (!validateEmail(email)) {
            formFeedback.style.color = "red";
            formFeedback.textContent = "Por favor, insira um email válido.";
        } else {
            formFeedback.style.color = "green";
            formFeedback.textContent = "Mensagem enviada com sucesso!";
            contactForm.reset();
        }

        formFeedback.style.display = "block";
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Animações de Scroll
    const elementsToAnimate = document.querySelectorAll('.card, .about h2, .about p, .highlights h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Carrossel de Imagens
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("carousel-item");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Mudar imagem a cada 5 segundos
    }

    function plusSlides(n) {
        slideIndex += n;
        const slides = document.getElementsByClassName("carousel-item");
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Scroll Suave
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
