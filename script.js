AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('header nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Datos de los Proyectos (centralizados para facilitar la gestión)
const projectsData = [
  {
    id: "mangosofts",
    title: "MangoSoft 🥭",
    shortDescription:
      "Soluciones tecnológicas en Barranqueras: Servicio Técnico, Armado de PC y Desarrollo de Software.",
    fullDescription:
      "Desarrollo de la plataforma oficial de la empresa MangoSoft donde se ofrece soluciones tecnológicas completas para particulares y empresas en Barranqueras y toda la región del Chaco. Nuestros servicios incluyen: Servicio Técnico para PC y celulares (reparación, mantenimiento, recuperación de datos), Armado de PC Personalizado (gaming, workstations) y Diseño Web & Sistemas a medida (responsive, e-commerce, sistemas de gestión).",
    percentage: 100,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
      { icon: "fas fa-wind", color: "text-cyan-400", title: "Tailwind CSS" },
      { icon: "fas fa-robot", color: "text-purple-400", title: "IA Gemini" },
    ],
    demoLink: "https://mangosofts.netlify.app/",
    githubLink: "https://mangosofts.netlify.app/",
    image: "/img/mangosoft/1.png",
    modalImages: ["/img/mangosoft/2.png", "/img/mangosoft/3.png"],
  },
  {
    id: "opriiet",
    title: "Olimpiadas de OPRIIET 🤖",
    shortDescription:
      "Página web desarrollada para las Olimpiada Provincial de Robótica, Informática, Innovación, Electrónica y Tecnología (OPRIIET).",
    fullDescription:
      "Desarrollo del sitio web oficial para las Olimpiadas Provinciales de Robótica, Informática e Innovación Educativa y Tecnológica (OPRIIET). La plataforma fue creada para centralizar toda la información del evento, incluyendo cronogramas, bases y condiciones, proyectos participantes y noticias. El objetivo principal era ofrecer un punto de acceso claro y organizado para competidores, evaluadores y el público general.",
    percentage: 100,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
      { icon: "fas fa-wind", color: "text-cyan-400", title: "Tailwind CSS" },
      { icon: "fas fa-robot", color: "text-purple-400", title: "IA Gemini" },
    ],
    demoLink: "https://opriiet.netlify.app/",
    githubLink: "https://opriiet.netlify.app/",
    image: "/img/opriiet/1.png",
    modalImages: ["/img/opriiet/2.png", "/img/opriiet/3.png"],
  },
  {
    id: "eeta32",
    title: "Sitio Web Oficial de la E.E.T.A. N° 32 🏫",
    shortDescription:
      "Desarrollo de la plataforma oficial para la Escuela de Educación Técnica Agropecuaria N° 32.",
    fullDescription:
      "Este proyecto se enfoca en la creación de un sitio web oficial completo para la E.E.T.A. N° 32, sirviendo como un portal de información clave para estudiantes, docentes, padres y la comunidad. Incluirá secciones sobre la institución, oferta educativa, noticias, eventos y recursos. El objetivo es proporcionar una presencia digital moderna y accesible para la escuela.",
    percentage: 85,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
    ],
    demoLink: "https://eeta32.netlify.app/",
    githubLink: "https://eeta32.netlify.app/",
    image: "/img/eeta32/1.png",
    modalImages: ["/img/eeta32/2.png", "/img/eeta32/3.png"],
  },
  {
    id: "bibliotecadigital",
    title: "Biblioteca Digital Mariano Moreno N° 2550 📚",
    shortDescription:
      "Creación de una plataforma digital para la biblioteca Mariano Moreno N° 2550.",
    fullDescription:
      "Este proyecto consiste en el desarrollo de una biblioteca digital para la institución Mariano Moreno N° 2550. Permitirá a los usuarios acceder a recursos educativos, libros y materiales de estudio de forma online. Se busca mejorar la accesibilidad a la información y fomentar la lectura digital entre la comunidad estudiantil y académica.",
    percentage: 55,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
    ],
    demoLink: "https://smartbiblio.netlify.app/",
    githubLink: "https://smartbiblio.netlify.app/",
    image: "/img/bibliotecadig/1.png",
    modalImages: ["/img/bibliotecadig/2.png", "/img/bibliotecadig/3.png"],
  },
  {
    id: "conectandooportunidad",
    title: "Conectando Oportunidad Barranqueras 🤝",
    shortDescription:
      "Plataforma para conectar a la comunidad de Barranqueras con oportunidades locales.",
    fullDescription:
      "Este proyecto tiene como objetivo crear una plataforma que sirva como puente entre los ciudadanos de Barranqueras y diversas oportunidades locales, como ofertas de empleo, cursos de capacitación, eventos comunitarios y servicios. Busca fortalecer el tejido social y económico de la localidad, facilitando el acceso a recursos y promoviendo la participación ciudadana.",
    percentage: 65,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
    ],
    demoLink: "https://cob-testing.netlify.app/",
    githubLink: "https://cob-testing.netlify.app/",
    image: "/img/cob/1.png",
    modalImages: ["/img/cob/2.png", "/img/cob/3.png"],
  },
  {
    id: "lizosain",
    title: "Lizosain Construcciones 🏗️",
    shortDescription:
      "Una página web diseñada para la empresa Lizosain Construcciones.",
    fullDescription:
      'Una página web diseñada para la empresa Lizosain Construcciones. Su objetivo es atraer clientes y mostrar los servicios y trabajos realizados. Este proyecto es una página tipo "FanPage" y está 100% completado.',
    percentage: 100,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "JavaScript" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
    ],
    demoLink: "https://z4xthc.github.io/Lizosain-Construcciones/",
    githubLink: "https://github.com/z4xthc/Lizosain-Construcciones",
    image: "/img/lizocons/1.png",
    modalImages: ["/img/lizocons/2.png", "/img/lizocons/3.png"],
  },
  {
    id: "medioambiente",
    title: "Cuidemos el Medio Ambiente 🌳",
    shortDescription:
      "Un proyecto diseñado para incentivar a las personas a cuidar más el medio ambiente.",
    fullDescription:
      "Un proyecto diseñado para incentivar a las personas a cuidar más el medio ambiente. Su objetivo es concientizar sobre la importancia de proteger nuestros recursos naturales. Este fue un proyecto escolar presentado en el primer año de la carrera Tecnicatura en Desarrollo de Software y está 100% completado.",
    percentage: 100,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fas fa-cube", color: "text-purple-400", title: "Scratch" },
      { icon: "fas fa-robot", color: "text-blue-400", title: "POE" },
    ],
    demoLink: "https://z4xthc.github.io/medioAmbiente/",
    githubLink: "#",
    image: "/img/medioambiente/1.png",
    modalImages: ["/img/medioambiente/2.png", "/img/medioambiente/3.png"],
  },
  {
    id: "fixphone",
    title: "📱🔧 Fix Phone 💻🔌",
    shortDescription:
      "Plataforma para talleres de reparación de celulares y computadoras.",
    fullDescription:
      "Fix Phone es un proyecto diseñado para apoyar a los emprendimientos dedicados al servicio técnico de reparación de celulares y computadoras. Esta plataforma permite a los talleres de reparación generar y gestionar las órdenes de trabajo para los equipos que ingresan, mejorando así el control y seguimiento tanto para el negocio como para los clientes. A través de esta web, los clientes podrán visualizar el estado de sus dispositivos en tiempo real, así como obtener información detallada sobre el presupuesto total para el arreglo. De esta manera, Fix Phone no solo optimiza la gestión interna del servicio técnico, sino que también brinda una experiencia más transparente y confiable para los usuarios. Versión actual: 2.0 beta",
    percentage: 70,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "Javascript" },
      { icon: "fab fa-java", color: "text-red-700", title: "Java" },
      { icon: "fas fa-database", color: "text-blue-600", title: "MySQL" },
      { icon: "fas fa-leaf", color: "text-green-600", title: "SpringBoot" },
    ],
    demoLink: "#",
    githubLink: "#",
    image: "/img/fixphone/1.png",
    modalImages: [
      "/img/fixphone/1.png",
      "https://placehold.co/800x600/1a1a1a/f0f0f0?text=Fix+Phone+Orden",
    ],
  },
  {
    id: "ecommerce",
    title: "Sistema de E-Commerce 🛒",
    shortDescription:
      "Plataforma eficiente y fácil de usar para la compra y venta de productos en línea.",
    fullDescription:
      "Este proyecto está diseñado para ofrecer una plataforma eficiente y fácil de usar para la compra y venta de productos en línea. Su objetivo es facilitar a los usuarios una experiencia de compra fluida, segura y accesible, permitiendo a los vendedores gestionar sus productos y pedidos de manera efectiva.",
    percentage: 60,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "Javascript" },
      { icon: "fab fa-java", color: "text-red-700", title: "Java" },
      { icon: "fas fa-database", color: "text-blue-600", title: "MySQL" },
      { icon: "fas fa-leaf", color: "text-green-600", title: "SpringBoot" },
    ],
    demoLink: "#",
    githubLink: "#",
    image: "/img/ecommerce/1.png",
    modalImages: [
      "/img/ecommerce/1.png",
      "https://placehold.co/800x600/1a1a1a/f0f0f0?text=E-commerce+Productos",
    ],
  },
  {
    id: "puntodeventa",
    title: "Sistema Punto de Venta 🏪",
    shortDescription:
      "Solución integral para mejorar la eficiencia y gestión en establecimientos comerciales.",
    fullDescription:
      "Este proyecto está diseñado para mejorar la eficiencia y la gestión en establecimientos comerciales. Su objetivo es ofrecer una solución integral que facilite el control de inventarios, las ventas y la administración de los recursos, permitiendo a los comerciantes concentrarse en atender mejor a sus clientes.",
    percentage: 70,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "Javascript" },
      { icon: "fab fa-java", color: "text-red-700", title: "Java" },
      { icon: "fas fa-database", color: "text-blue-600", title: "MySQL" },
      { icon: "fas fa-leaf", color: "text-green-600", title: "SpringBoot" },
    ],
    demoLink: "#",
    githubLink: "#",
    image: "/img/pdv/1.png",
    modalImages: [
      "/img/pdv/1.png",
      "https://placehold.co/800x600/1a1a1a/f0f0f0?text=Punto+Venta+Dashboard",
    ],
  },
  {
    id: "turnosmedicos",
    title: "Sistema Turnos Médicos 🧑‍⚕️",
    shortDescription: "Proyecto para facilitar la gestión de citas médicas.",
    fullDescription:
      "Este proyecto está diseñado para facilitar la gestión de citas médicas. Su objetivo es permitir a los pacientes reservar turnos de manera eficiente y a los profesionales de la salud administrar sus horarios y citas de forma organizada y accesible.",
    percentage: 5,
    technologies: [
      { icon: "fab fa-html5", color: "text-orange-500", title: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-500", title: "CSS" },
      { icon: "fab fa-js", color: "text-yellow-500", title: "Javascript" },
      { icon: "fab fa-java", color: "text-red-700", title: "Java" },
      { icon: "fas fa-database", color: "text-blue-600", title: "MySQL" },
      { icon: "fas fa-leaf", color: "text-green-600", title: "SpringBoot" },
    ],
    demoLink: "#",
    githubLink: "#",
    image: "/img/turnosmedicos/1.png",
    modalImages: [
      "/img/turnosmedicos/1.png",
      "https://placehold.co/800x600/1a1a1a/f0f0f0?text=Turnos+Medicos+Admin",
    ],
  },
];

// Función para mostrar alerta en proyectos sin demo
function showNoDemoAlert(event) {
  event.preventDefault(); // Previene la navegación del enlace
  Swal.fire({
    icon: "info",
    title: "Demo no disponible",
    text: "Por el momento no cuento con una demo para que lo puedas probar. Disculpa las molestias.",
    confirmButtonText: "Entendido",
    confirmButtonColor: "#4ade80", // Color verde del tema
    background: "#1a1a1a", // Fondo oscuro del tema
    color: "#f0f0f0", // Color de texto claro
    customClass: {
      popup: "rounded-lg",
    },
  });
}

// Lógica del carrusel
const carouselContainer = document.getElementById("carousel-container");
projectsData.forEach((project) => {
  const projectCardHTML = `
                <div class="project-card-wrapper" data-aos="zoom-in" data-project-id="${
                  project.id
                }">
                    <div class="project-card-hover bg-black rounded-lg shadow-lg flex flex-col min-h-[400px]">
                        <img class="w-full h-48 object-cover rounded-t-lg" src="${
                          project.image
                        }" onerror="this.onerror=null;this.src='https://placehold.co/400x300/4ade80/000?text=Imagen+no+encontrada';" alt="Captura de pantalla de ${
    project.title
  }">
                        <div class="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 class="text-2xl font-semibold text-white mb-2">${
                                  project.title
                                }</h3>
                                <p class="text-gray-300 text-sm mb-4">${
                                  project.shortDescription
                                }</p>
                                <div class="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                                    <div class="bg-green-500 h-2.5 rounded-full" style="width: ${
                                      project.percentage
                                    }%;"></div>
                                </div>
                                <span class="text-sm text-gray-400">${
                                  project.percentage
                                }% de progreso</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-3 my-4">
                                ${project.technologies
                                  .map(
                                    (tech) =>
                                      `<i class="${tech.icon} ${tech.color} text-3xl" title="${tech.title}"></i>`
                                  )
                                  .join("")}
                            </div>
                            <div class="flex justify-center space-x-4 mt-auto">
                                <a href="${project.demoLink}" 
                                   target="_blank" 
                                   class="text-green-400 hover:text-green-300 text-lg font-medium"
                                   ${
                                     project.demoLink === "#"
                                       ? 'onclick="showNoDemoAlert(event)"'
                                       : ""
                                   }
                                >
                                    <i class="fas fa-external-link-alt mr-1"></i> Ver Proyecto
                                </a>
                                <a href="${
                                  project.githubLink
                                }" target="_blank" class="text-gray-400 hover:text-gray-300 text-lg font-medium">
                                    <i class="fab fa-github mr-1"></i> GitHub
                                </a>
                                <button class="text-green-400 hover:text-green-300 text-lg font-medium more-details-btn" data-project-id="${
                                  project.id
                                }">
                                    <i class="fas fa-info-circle mr-1"></i> Más Detalle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
  carouselContainer.insertAdjacentHTML("beforeend", projectCardHTML);
});

const carouselViewport = document.getElementById("carousel-viewport");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  carouselViewport.scrollBy({
    left: carouselViewport.clientWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  carouselViewport.scrollBy({
    left: -carouselViewport.clientWidth,
    behavior: "smooth",
  });
});

carouselViewport.addEventListener("scroll", () => {
  const atStart = carouselViewport.scrollLeft <= 0;
  const atEnd =
    carouselViewport.scrollLeft + carouselViewport.clientWidth >=
    carouselContainer.scrollWidth;
  prevBtn.disabled = atStart;
  nextBtn.disabled = atEnd;
  prevBtn.style.opacity = atStart ? "0.5" : "1";
  nextBtn.style.opacity = atEnd ? "0.5" : "1";
});

window.addEventListener("load", () => {
  const atStart = carouselViewport.scrollLeft <= 0;
  prevBtn.disabled = atStart;
  prevBtn.style.opacity = atStart ? "0.5" : "1";
});

// Lógica del Modal
const projectModal = document.getElementById("project-modal");
const closeButton = projectModal.querySelector(".close-button");
const modalTitle = document.getElementById("modal-project-title");
const modalDescription = document.getElementById("modal-project-description");
const modalTech = document.getElementById("modal-project-tech");
const modalDemoLink = document.getElementById("modal-project-demo");
const modalGithubLink = document.getElementById("modal-project-github");
const modalImagesContainer = document.getElementById("modal-project-images");

function openModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.fullDescription;

  // Asigna el enlace de la demo y añade la alerta si es necesario
  modalDemoLink.href = project.demoLink;
  if (project.demoLink === "#") {
    modalDemoLink.onclick = showNoDemoAlert; // Asigna la función de alerta
  } else {
    modalDemoLink.onclick = null; // Elimina cualquier manejador de clic previo
  }

  modalGithubLink.href = project.githubLink;
  modalTech.innerHTML = "";
  project.technologies.forEach((tech) => {
    const iconElement = document.createElement("i");
    iconElement.className = `${tech.icon} ${tech.color} text-4xl`;
    iconElement.title = tech.title;
    modalTech.appendChild(iconElement);
  });
  modalImagesContainer.innerHTML = "";
  project.modalImages.forEach((imgSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = `Imagen de ${project.title}`;
    imgElement.className = "w-full h-auto rounded-lg shadow-md object-cover";
    modalImagesContainer.appendChild(imgElement);
  });
  projectModal.style.display = "block";
}

// Lógica para abrir el modal al hacer clic en cualquier parte de la tarjeta
carouselContainer.addEventListener("click", function (e) {
  const cardElement = e.target.closest(".project-card-wrapper");
  const clickedElement = e.target;

  if (cardElement && !clickedElement.closest("a")) {
    const projectId = cardElement.dataset.projectId;
    openModal(projectId);
  }
});

closeButton.addEventListener("click", () => {
  projectModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    projectModal.style.display = "none";
  }
});

// Lógica del Formulario de Contacto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formStatus = document.getElementById("form-status");
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Tu número de WhatsApp con el código de país (54 para Argentina)
    const phoneNumber = "543625153078";

    // Construcción del mensaje
    const whatsappMessage = `Hola, mi nombre es ${name}.\n\nMi mensaje es:\n${message}`;

    // Codificación del mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Creación de la URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Mostrar mensaje de estado y abrir WhatsApp
    formStatus.textContent = "Redirigiendo a WhatsApp...";
    formStatus.className =
      "mt-4 text-center text-sm font-semibold text-green-400";

    window.open(whatsappURL, "_blank");
    this.reset();
  });

// Inicialización de particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Partículas blancas
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.8, // Opacidad aumentada para mayor visibilidad
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4ade80", // Líneas verdes
      opacity: 0.6, // Opacidad aumentada para mayor visibilidad
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Efecto de agarre al pasar el ratón
      },
      onclick: {
        enable: true,
        mode: "push", // Añade partículas al hacer clic
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
