// Assuming you have an array of projects and education data
const projects = [
    { title: "Spa Reservation System", technology: "C" },
    { title: "Real Estate Management System", technology: "C++" },
    { title: "DNA Corpus", technology: "C++" },
    { title: "Parallel Progtramming-Comparison of sorting Algortihtms using Pthreads vs openmp vs serial", technology: "C, Shell-bash, Linux" },
    { title: "Clinic Management System", technology: "C#, ASP.NET, html, css, javascript, bootstrap" },
    { title: "Sorting Algorithm Visualization", technology: "Windows forms" },
    { title: "implementation of pipelining protocols", technology: "Python" },
    { title: "Plane Abstration Game", technology: "Python" },
    { title: "Student Portal System", technology: "html, css, javascript" },
    // Add more projects
];

const education = [
    { grade: "9th", course: "Biology, Mathematics, Physics, Chhemistry" },
    { grade: "10th", course: "Biology, Mathematics, Physics, Chhemistry" },
    { grade: "11th", course: "Mathematics, Physics, Chhemistry" },
    { grade: "12th", course: "Mathematics, Physics, Chhemistry" },
    { grade: "Semester 1", course: "PF, Cal, ICT, ECC, Pst" },
    { grade: "Semester 2", course: "OPP, Discrete, ISE, CPS, ISL" },
    { grade: "Semester 3", course: "DS, DLD, CAL, LA, FOM" },
    { grade: "Semester 4", course: "OS, COAL, PROB, DE, TOA" },
    { grade: "Semester 5", course: "DB, PDC, ALGO, SDA, GT" },
    { grade: "Semester 6", course: "CN, AI, NC, TBW, WP" }

    // Add more education details
];

// Display projects on Projects page
function displayProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.innerHTML = `<h3>${project.title}</h3><p>Technology: ${project.technology}</p>`;
        projectsSection.appendChild(projectCard);
    });
}

// Filter projects based on technology
function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const filteredProjects = projects.filter(project => project.technology.toLowerCase() === filterValue);

    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = '';
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.innerHTML = `<h3>${project.title}</h3><p>Technology: ${project.technology}</p>`;
        projectsSection.appendChild(projectCard);
    });
}

// Display education details on Education page
function displayEducation() {
    const educationSection = document.getElementById('education');
    educationSection.innerHTML = '';
    education.forEach(course => {
        const courseDetails = document.createElement('div');
        courseDetails.innerHTML = `<p>Grade: ${course.grade}, Course: ${course.course}</p>`;
        educationSection.appendChild(courseDetails);
    });
}

// Function calls to display content when the pages load
if (document.URL.includes("index.html")) {
    displayProjects();
} else if (document.URL.includes("projects.html")) {
    displayProjects();
} else if (document.URL.includes("education.html")) {
    displayEducation();
}
