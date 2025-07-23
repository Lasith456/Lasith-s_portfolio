const portfolioData = [
    {
        title: "UniLink - Academic Service Management",
        description: "A modern request and service management system for universities using advanced web and ML technologies.",
        github: "https://github.com/Lasith456/ML_Based_University_Ticket_Handling_System.git",
        liveDemo: "https://system-53h6.onrender.com"
    },
    {
        title: "POS System for Business ",
        description: "This web application was developed using Laravel, React, and MySQL. It includes authentication pages, billing print functions, and product management",
        github: "https://github.com/Lasith456/pos-admin-",
        liveDemo: "https://youtu.be/cV8R0f4RF7o"
    },
    {
        title: "NaviTrails",
        description: "NaviTrails is a travel blog platform built with React, Node.js, and MySQL. Users can share travel stories, follow others, like/dislike posts, and explore blogs by country or author. Includes secure authentication, a following feed, and global country data integration.",
        github: "https://github.com/Lasith456/advancedServerSideCW2",
        liveDemo: "https://www.youtube.com/watch?v=5qJZfDLsvQ4"
    },
        {
        title: "Country API Key",
        description: "Country Info API System A full-stack application built with React, Node.js, Express, SQLite, and Docker. It allows users to fetch country details via a secure API. The system supports two user roles and features API key generation. Only users with a valid API key can access country data.",
        github: "https://github.com/Lasith456/advancedServerSideCW1.git", 
        liveDemo: "https://youtu.be/gnx3EcdiM_8"
    },
    {
        title: "Southern Province Vehicle Management",
        description: "A system for registering and tracking school transport, built using Vue.js, Express.js, and MongoDB.",
        github: "", // Example: No GitHub link
        liveDemo: "https://sptaxi.lk/"
    },
    {
        title: "Private Channeling Center System",
        description: "A centralized management system using Laravel for handling patient appointments and confidential information.",
        github: "", // Example: No GitHub link
        liveDemo: "https://lasithmedlink.aldtan.xyz/"
    },
    {
        title: "Nsteel - POS & Inventory System",
        description: "A MERN stack system designed for a hardware shop to manage inventory and Point of Sale operations.",
        github: "", // Example: No GitHub link
        liveDemo: "" // Example: No live demo link
    },
    {
        title: "Aldtan VR",
        description: "An innovative virtual reality experience builder, leveraging cutting-edge technologies like Node.js and Vue.js.",
        github: "", // Added an example GitHub link for Aldtan VR
        liveDemo: "" // Example: No live demo link
    },
    {
        title: "Layos - E-commerce Website",
        description: "An e-commerce website for a retail clothing shop, built using the MERN stack (React.js, Express.js, MongoDB).",
        github: "", // Added an example GitHub link for Layos
        liveDemo: "" // Example: No live demo link
    }
];

const servicesData = [
    {
        title: "Full-Stack Development",
        description: "Expertise in MERN, Laravel, and CodeIgniter stacks to build complete and robust web applications."
    },
    {
        title: "VR Application Development",
        description: "Collaborative development of VR builder software and experiences using Node.js and Vue.js."
    },
    {
        title: "Custom Business Solutions",
        description: "Developing tailored POS, inventory, and management systems to meet specific business needs."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        document.body.style.overflow = mobileMenu.classList.contains('hidden') ? '' : 'hidden';
        mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden')
            ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`
            : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    };

    mobileMenuButton.addEventListener('click', toggleMenu);
    mobileMenuLinks.forEach(link => link.addEventListener('click', () => {
        // Ensure menu closes before trying to scroll
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    }));

    // --- Dynamic Content Population ---
    const portfolioGrid = document.getElementById('portfolio-grid');
    const servicesGrid = document.getElementById('services-grid');

    const initialPortfolioCount = 6; // Number of projects to show initially

    const renderPortfolioItems = (data, count) => {
        return data.slice(0, count).map((project, index) => {
            // Determine GitHub link attributes and classes
            const githubLinkAttrs = project.github ? `href="${project.github}" target="_blank"` : 'href="#" onclick="return false;"';
            const githubLinkClasses = project.github ? "text-blue-600 hover:text-blue-800" : "text-slate-400 cursor-not-allowed";

            // Determine Live Demo link attributes and classes
            const liveDemoLinkAttrs = project.liveDemo ? `href="${project.liveDemo}" target="_blank"` : 'href="#" onclick="return false;"';
            const liveDemoLinkClasses = project.liveDemo ? "text-green-600 hover:text-green-800" : "text-slate-400 cursor-not-allowed";

            return `
                <div class="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 anim-fade-in-up" style="transition-delay: ${index * 100}ms;">
                    <h3 class="text-xl font-bold mb-2 text-slate-800">${project.title}</h3>
                    <p class="text-slate-600">${project.description}</p>
                    <div class="mt-4 flex flex-wrap gap-2 text-sm font-medium">
                        <a ${githubLinkAttrs} class="${githubLinkClasses}">GitHub</a>
                        <a ${liveDemoLinkAttrs} class="${liveDemoLinkClasses} ml-2">Live Demo</a>
                    </div>
                </div>
            `;
        }).join('');
    };

    if (portfolioGrid) {
        portfolioGrid.innerHTML = renderPortfolioItems(portfolioData, initialPortfolioCount);

        if (portfolioData.length > initialPortfolioCount) {
            const seeMoreButtonContainer = document.createElement('div');
            seeMoreButtonContainer.className = 'col-span-1 sm:col-span-2 lg:col-span-3 text-center mt-8';
            const seeMoreButton = document.createElement('button');
            seeMoreButton.className = 'bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105';
            seeMoreButton.textContent = 'Get Projects LINKS';

            seeMoreButton.addEventListener('click', () => {
                portfolioGrid.innerHTML = renderPortfolioItems(portfolioData, portfolioData.length);
                seeMoreButtonContainer.remove(); // Remove the button after displaying all projects
                
                // Re-observe newly added elements for animation
                document.querySelectorAll('.anim-fade-in, .anim-fade-in-up, .anim-fade-in-left, .anim-fade-in-right').forEach(el => {
                    if (!el.classList.contains('is-visible')) { // Only observe if not already visible
                        observer.observe(el);
                    }
                });
            });
            portfolioGrid.parentNode.appendChild(seeMoreButtonContainer).appendChild(seeMoreButton);
        }
    }

    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map((service, index) => `
            <div class="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow anim-fade-in-up" style="transition-delay: ${index * 100}ms;">
                <h3 class="text-xl font-bold mb-2 text-slate-800">${service.title}</h3>
                <p class="text-slate-600">${service.description}</p>
            </div>
        `).join('');
    }


    // --- Scroll Animation Logic ---
    // We select ALL elements that need animation, including the newly added ones.
    const animatedElements = document.querySelectorAll('.anim-fade-in, .anim-fade-in-up, .anim-fade-in-left, .anim-fade-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});