// toggle for mobile navbar
  const menuToggle = document.getElementById("mobile-menu");
  const navLinksContainer = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

 const aboutSection = document.getElementById("about-me");
const resumeSection = document.getElementById("resume");
const navLinks = document.querySelectorAll(".nav-links a"); // only the links
const logo = document.querySelector(".logo"); // the logo separately

function handleScroll() {
  const scrollPos = window.scrollY + 100;

  // About section
  const aboutTop = aboutSection.offsetTop;
  const aboutHeight = aboutSection.offsetHeight;
  if (scrollPos >= aboutTop && scrollPos < aboutTop + aboutHeight) {
    // Only add class to links on desktop
    if (window.innerWidth > 768) {
      navLinks.forEach(link => link.classList.add("active-about"));
    }
    // Logo always gets class
    logo.classList.add("active-about");
  } else {
    if (window.innerWidth > 768) {
      navLinks.forEach(link => link.classList.remove("active-about"));
    }
    logo.classList.remove("active-about");
  }

  // Resume section
  const resumeTop = resumeSection.offsetTop;
  const resumeHeight = resumeSection.offsetHeight;
  if (scrollPos >= resumeTop && scrollPos < resumeTop + resumeHeight) {
    if (window.innerWidth > 768) {
      navLinks.forEach(link => link.classList.add("active-resume"));
    }
    logo.classList.add("active-resume");
  } else {
    if (window.innerWidth > 768) {
      navLinks.forEach(link => link.classList.remove("active-resume"));
    }
    logo.classList.remove("active-resume");
  }
}

// Listen for scroll
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);


  // 📁 All project data here
const projectData = {
  goodhabits: [
    "./assets/goodhabits/homepage.PNG",
    "./assets/goodhabits/additem.PNG",
    "./assets/goodhabits/cart.PNG"
  ],
  learnit: [
    "./assets/learn-it/loginlearnit.PNG",
    "./assets/learn-it/dashboard.PNG",
    "./assets/learn-it/compiler.PNG"
  ],
  gnlwebsite: [
    "./assets/gnlops/gnlhomepage.PNG",
    "./assets/gnlops/request.PNG",
    "./assets/gnlops/tracker.PNG"
  ],
   dtr: [
    "./assets/dtrsystem/Login_employee.PNG",
    "./assets/dtrsystem/Loginform_employee.PNG",
    "./assets/dtrsystem/Employee_dashboard.PNG"
  ]
};

// Elements
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close-btn");
const projectLinks = document.querySelectorAll(".project-link");
const carouselImagesContainer = document.querySelector(".carousel-images");

// Open modal + load project data
projectLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const projectId = link.getAttribute("data-project");
    loadProjectImages(projectId);
    modal.classList.add("show");
  });
});

// Close modal
closeBtn.addEventListener("click", () => modal.classList.remove("show"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

// 🖼️ Function to load images dynamically
function loadProjectImages(projectId) {
  const images = projectData[projectId];
  carouselImagesContainer.innerHTML = ""; // clear old images

  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Screenshot ${index + 1}`;
    if (index === 0) img.classList.add("active");
    carouselImagesContainer.appendChild(img);
  });

  // Reinitialize carousel functionality after loading new images
  initCarousel();
}

// 🔄 Carousel controls
function initCarousel() {
  const images = document.querySelectorAll(".carousel-images img");
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  document.querySelector(".carousel-btn.prev").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  };

  document.querySelector(".carousel-btn.next").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  };
}
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const closeBtn = modal.querySelector(".close-btn");
  const carouselImagesContainer = modal.querySelector(".carousel-images");
  const projectDetails = document.getElementById("projectDetails");
  const nextBtn = modal.querySelector(".next");
  const prevBtn = modal.querySelector(".prev");
  let currentSlide = 0;

  // 📦 Project data (carousel + description)
  const projects = {
    goodhabits: {
      images: [
        "./assets/goodhabits/homepage.PNG",
        "./assets/goodhabits/menu.PNG",
        "./assets/goodhabits/cart.PNG",
        "./assets/goodhabits/checkout.PNG",
        "./assets/goodhabits/ordersum.PNG",
        "./assets/goodhabits/yourorder.PNG",
        "./assets/goodhabits/admin_dashboard.PNG",
        "./assets/goodhabits/additem.PNG",
        "./assets/goodhabits/store_inventory.PNG",
        "./assets/goodhabits/orderadmin.PNG",
        "./assets/goodhabits/cs_ordersum.PNG",
        "./assets/goodhabits/order_history.PNG",
        "./assets/goodhabits/delivery_places.PNG",
        "./assets/goodhabits/customer_feedback.PNG",
      ],
     details: `
      <h3>Good Habits – Ecommerce Ordering System</h3>
    <div style="width:100%;max-width:700px;margin:32px auto 0 auto;padding:24px;background:#f8f9fa;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);color:#222;">
      <div style="font-size:1.15rem;font-weight:600;margin-bottom:10px;color:rgb(0,137,201);">Overview:</div>
      <div style="margin-bottom:16px;">
          Good Habits PH is a Filipino-owned e-commerce platform specializing in health and wellness products. 
          The website showcases a variety of items aimed at promoting a balanced and mindful lifestyle.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Key Features:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Product Catalog:</strong> Displays a curated selection of wellness products, such as Healthy Foods, Drinks, and Snacks.</li>
          <li><strong>User-Friendly Interface:</strong> Designed for easy navigation, ensuring a smooth browsing experience.</li>
          <li><strong>Checkout Simulation:</strong> Demonstrates the purchase flow using GCash screenshots (no real payment integration).</li>
          <li><strong>Responsive Design:</strong> Optimized for both desktop and mobile devices.</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Technologies Used:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> PHP, MySQL</li>
          <li><strong>Frameworks / Libraries:</strong> Bootstrap for responsive design</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Role:</div>
      <div style="margin-bottom:16px;">
          As the lead developer, I handled full-stack development including front-end design, back-end integration, and deployment.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Links:</div>
      <div style="margin-bottom:8px;">
          <a href="https://goodhabitsph.com/index.html" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">Visit Good Habits PH</a>
      </div>
      <div>
          <a href="https://github.com/jhonbhenzzon/goodhabitsph" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">GitHub Repository</a>
      </div>
    </div>
  `
},

    learnit: {
      images: [
        "./assets/learn-it/loginlearnit.PNG",
        "./assets/learn-it/userdashboard.PNG",
        "./assets/learn-it/userdashboard.PNG",
        "./assets/learn-it/assessment_page.PNG",
        "./assets/learn-it/coding_assessment.PNG",
        "./assets/learn-it/leaderboards.PNG",
        "./assets/learn-it/library.PNG",
        "./assets/learn-it/profilelearnit.PNG",
        "./assets/learn-it/consultationpage.PNG",
        "./assets/learn-it/codeeditor.PNG",
        "./assets/learn-it/admin_dashboard.PNG",
        "./assets/learn-it/lessonlist.PNG",
        "./assets/learn-it/usermanager.PNG",
        "./assets/learn-it/content_creator.PNG",
        "./assets/learn-it/learntab.PNG",
        "./assets/learn-it/test_tracker.PNG",

      ],
     details: `
     <h3>Learn It – Coding & Learning Platform</h3> 
    <div style="width:100%;max-width:700px;margin:32px auto 0 auto;padding:24px;background:#f8f9fa;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);color:#222;">
      <div style="font-size:1.15rem;font-weight:600;margin-bottom:10px;color:rgb(0,137,201);">Overview:</div>
      <div style="margin-bottom:16px;">
          The Learn IT platform is a web application designed to enhance the learning experience for students while providing admins with comprehensive management tools. Students can access content, take assessments (including coding challenges), and track performance, while admins manage users, communicate, and oversee operations efficiently.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Key Features:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Content & Assessments:</strong> Admins create content displayed on the student interface, including coding tests.</li>
          <li><strong>Leaderboards:</strong> Students ranked by performance to encourage engagement.</li>
          <li><strong>Profile Management & Consultation:</strong> Students can edit profiles and consult admins; messaging system included.</li>
          <li><strong>User Management:</strong> Admins manage student and staff accounts efficiently.</li>
          <li><strong>Built-in Code Compiler:</strong> Supports HTML, CSS, JavaScript, Python, C#, Java.</li>
          <li><strong>Responsive Design:</strong> Optimized for desktop and mobile devices.</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Technologies Used:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> PHP, MySQL</li>
          <li><strong>Frameworks / Libraries:</strong> Bootstrap</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Role:</div>
      <div style="margin-bottom:16px;">
          As lead developer, I implemented the full-stack system, including database architecture, dashboards for students/admins, assessment workflows, messaging, and the integrated code compiler.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Links:</div>
      <div>
          <a href="#" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">GitHub Repository</a>
      </div>
    </div>
  `
},

    gnlops: {
      images: [
        "./assets/gnlops/gnlhomepage.PNG",
        "./assets/gnlops/loginpage.PNG",
        "./assets/gnlops/eng_homepage.PNG",
        "./assets/gnlops/modal_requestform.PNG",
        "./assets/gnlops/purchasingUi.PNG",
        "./assets/gnlops/request_list.PNG",
        "./assets/gnlops/create_po.PNG",
        "./assets/gnlops/creating_po.PNG",
        "./assets/gnlops/admin_interface.PNG",
        "./assets/gnlops/project_analytics.PNG",
        "./assets/gnlops/add_project.PNG",
        "./assets/gnlops/requested_data.PNG",
        "./assets/gnlops/approved.PNG",
        "./assets/gnlops/released.PNG",
        "./assets/gnlops/Oe.PNG",
        "./assets/gnlops/list_data.PNG",
      ],
      details: `
       <h3>GNL Development Corporation Operating System</h3>
    <div style="width:100%;max-width:700px;margin:32px auto 0 auto;padding:24px;background:#f8f9fa;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);color:#222;">
      <div style="font-size:1.15rem;font-weight:600;margin-bottom:10px;color:rgb(0,137,201);">Overview:</div>
      <div style="margin-bottom:16px;">
          The GNL Operating System (GNL OS) is a web-based system developed to streamline and automate GNL’s internal operations. It centralizes multiple workflows, improving efficiency, accountability, and communication within the organization.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Key Features:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Material Requests:</strong> Engineers can submit material requests, routed to office staff for POs and admin approval.</li>
          <li><strong>Other Requests:</strong> Handles reimbursements, payroll, miscellaneous, immediate requests, utilities, and office expenses systematically.</li>
          <li><strong>Workflow Automation:</strong> Tracks all requests efficiently and ensures systematic approval.</li>
          <li><strong>User-Friendly Interface:</strong> Dashboards for engineers, staff, and admins for easy task management.</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Technologies Used:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> PHP, MySQL</li>
          <li><strong>Frameworks / Libraries:</strong> Bootstrap for responsive design</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Role:</div>
      <div style="margin-bottom:16px;">
          As the lead developer, I handled full-stack development including front-end design, back-end integration, and deployment.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Links:</div>
      <div style="margin-bottom:8px;">
          <a href="https://opsgnl.goodhabitsph.com/" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">Visit GNL Operation</a>
      </div>
      <div>
          <a href="https://github.com/jhonbhenzzon/goodhabitsph" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">GitHub Repository</a>
      </div>
    </div>
  `
},

dtr: {
  images: [
    "./assets/dtrsystem/Login_employee.PNG",
    "./assets/dtrsystem/Loginform_employee.PNG",
    "./assets/dtrsystem/employee_dashboard.PNG",
    "./assets/dtrsystem/employee_attendance.PNG",
    "./assets/dtrsystem/admin_dashboard.PNG",
    "./assets/dtrsystem/employee_list.PNG",
    "./assets/dtrsystem/edit_employee.PNG",
    "./assets/dtrsystem/insert_employee.PNG",
    "./assets/dtrsystem/payroll_generator.PNG",

  ],
  details: `
    <h3>Daily Time Record (DTR) System</h3>
    <div style="width:100%;max-width:700px;margin:32px auto 0 auto;padding:24px;background:#f8f9fa;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);color:#222;">
      <div style="font-size:1.15rem;font-weight:600;margin-bottom:10px;color:rgb(0,137,201);">Overview:</div>
      <div style="margin-bottom:16px;">
        A web-based Daily Time Record (DTR) system designed to efficiently track employee attendance, working hours, and generate automated monthly reports for payroll purposes.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Key Features:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
        <li><strong>Attendance Tracking:</strong> Employees can clock in/out and record breaks seamlessly.</li>
        <li><strong>Reports:</strong> Generate monthly attendance and hours worked reports.</li>
        <li><strong>Admin Dashboard:</strong> Admins can monitor attendance, approve adjustments, and manage employee records.</li>
        <li><strong>User-Friendly Interface:</strong> Simple dashboards for employees and administrators for easy navigation.</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Technologies Used:</div>
      <ul style="margin-bottom:16px;padding-left:20px;">
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript & React</li>
        <li><strong>Backend:</strong> PHP, MySQL</li>
        <li><strong>Frameworks / Libraries:</strong> Bootstrap for responsive design</li>
      </ul>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Role:</div>
      <div style="margin-bottom:16px;">
        As the lead developer, I managed full-stack development including front-end design, back-end integration, and system deployment.
      </div>
      <div style="font-size:1.08rem;font-weight:600;margin-bottom:8px;color:rgb(0,137,201);">Links:</div>
      <div>
        <a href="https://github.com/bhenzzon-dev/DTRsystem" style="color:rgb(0,137,201);text-decoration:none;font-weight:500;" target="_blank">GitHub Repository</a>
      </div>
    </div>
  `
}

  };

  // 🖱️ Open modal on "View Project"
  document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const projectKey = link.dataset.project;
      const project = projects[projectKey];

      if (!project) return;

      // Update carousel
      carouselImagesContainer.innerHTML = project.images
        .map((img, index) => `<img src="${img}" class="${index === 0 ? 'active' : ''}" />`)
        .join("");
      currentSlide = 0;

      // Update description
      projectDetails.innerHTML = project.details;

      modal.classList.add("show");
    });
  });

  // ❌ Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // 🖼️ Carousel Controls
  nextBtn.addEventListener("click", () => changeSlide(1));
  prevBtn.addEventListener("click", () => changeSlide(-1));

  function changeSlide(dir) {
    const slides = carouselImagesContainer.querySelectorAll("img");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }
});


