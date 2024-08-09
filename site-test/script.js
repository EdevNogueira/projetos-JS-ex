document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");

    // Efeito de Digitação na Introdução
    const introTyping = document.getElementById('intro-typing');
    if (introTyping) {
        const text = introTyping.textContent;
        introTyping.textContent = '';
        let i = 0;
        function typeEffect() {
            if (i < text.length) {
                introTyping.textContent += text.charAt(i);
                i++;
                setTimeout(typeEffect, 100);
            }
        }
        typeEffect();
    }

    // Barra de Progresso de Scroll
    window.onscroll = function() {
        const scrollProgress = document.getElementById("scroll-progress");
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = progress + "%";

        // Sticky Menu de Navegação
        const header = document.getElementById("main-header");
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        // Botão Voltar ao Topo
        const backToTopButton = document.getElementById("back-to-top");
        if (backToTopButton) {
            if (window.scrollY > 200) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    };

    // Carrossel de Testemunhos
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let testimonialIndex = 0;
        function showNextTestimonial() {
            testimonials[testimonialIndex].classList.remove('active');
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            testimonials[testimonialIndex].classList.add('active');
        }
        setInterval(showNextTestimonial, 5000);
    }

    // Botão de Chat Flutuante (simulação)
    const chatButton = document.getElementById('chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            alert('Iniciando chat de atendimento!');
        });
    }

    // Alternar Tema (Modo Noturno)
    const toggleThemeButton = document.getElementById("toggle-theme");
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', toggleTheme);

        function toggleTheme() {
            const body = document.body;
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        }
    }

    // Verificar Tema Padrão
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-mode');
    }

    // Efeito de Fade-in nas Seções
    const faders = document.querySelectorAll('.fade-in-section');
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // Mostrar/Esconder Menu de Navegação em Modo Celular
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    }

    // Carregamento de Página
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
    }

    // Modal de Contato
    const modal = document.getElementById("contact-modal");
    const openModalButton = document.getElementById("open-modal");
    const closeModalButton = document.getElementsByClassName("close")[0];
    if (modal && openModalButton && closeModalButton) {
        openModalButton.onclick = function() {
            modal.style.display = "block";
        };
        closeModalButton.onclick = function() {
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    // Efeito Parallax no Carrossel
    const parallaxCarousel = document.getElementById("parallax-carousel");
    if (parallaxCarousel) {
        window.addEventListener("scroll", function() {
            const offset = window.scrollY;
            parallaxCarousel.style.backgroundPositionY = offset * 0.7 + "px";
        });
    }

    // Máscara de Telefone
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }

    // Scrollspy
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    if (sections.length > 0 && navLi.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach(li => {
                li.classList.remove("active");
                if (li.querySelector("a").getAttribute("href").substring(1) === current) {
                    li.classList.add("active");
                }
            });
        });
    }

    // Validação e Feedback do Formulário
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");
    if (contactForm && formFeedback) {
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
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Animações de Scroll
    const elementsToAnimate = document.querySelectorAll('.card, .about h2, .about p, .highlights h2');
    if (elementsToAnimate.length > 0) {
        const animateOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        elementsToAnimate.forEach(element => {
            animateOnScroll.observe(element);
        });
    }
});
