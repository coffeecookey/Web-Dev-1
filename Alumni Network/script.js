// Sample data (in a real application, this would come from a backend)
const events = [
    { title: "Annual Alumni Meet", date: "2024-07-15", location: "IGDTUW Campus" },
    { title: "Tech Talk: AI in Healthcare", date: "2024-08-22", location: "Virtual" },
    { title: "Career Fair", date: "2024-09-10", location: "IGDTUW Auditorium" }
];

const alumni = [
    { name: "Priya Sharma", graduationYear: 2020, company: "Google" },
    { name: "Neha Gupta", graduationYear: 2018, company: "Microsoft" },
    { name: "Anjali Desai", graduationYear: 2019, company: "Amazon" }
];

const jobs = [
    { title: "Software Engineer", company: "TechCorp", location: "Delhi" },
    { title: "Data Scientist", company: "AI Solutions", location: "Bangalore" },
    { title: "Product Manager", company: "StartupX", location: "Mumbai" }
];

// Populate events
function populateEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('card');
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

// Populate alumni directory
function populateAlumni() {
    const alumniList = document.getElementById('alumni-list');
    alumni.forEach(alum => {
        const alumCard = document.createElement('div');
        alumCard.classList.add('card');
        alumCard.innerHTML = `
            <h3>${alum.name}</h3>
            <p>Graduation Year: ${alum.graduationYear}</p>
            <p>Company: ${alum.company}</p>
        `;
        alumniList.appendChild(alumCard);
    });
}

// Populate job board
function populateJobs() {
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
        `;
        jobList.appendChild(jobCard);
    });
}

// Search alumni
function searchAlumni() {
    const searchInput = document.getElementById('search-alumni');
    const alumniList = document.getElementById('alumni-list');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredAlumni = alumni.filter(alum => 
            alum.name.toLowerCase().includes(searchTerm) ||
            alum.company.toLowerCase().includes(searchTerm)
        );

        alumniList.innerHTML = '';
        filteredAlumni.forEach(alum => {
            const alumCard = document.createElement('div');
            alumCard.classList.add('card');
            alumCard.innerHTML = `
                <h3>${alum.name}</h3>
                <p>Graduation Year: ${alum.graduationYear}</p>
                <p>Company: ${alum.company}</p>
            `;
            alumniList.appendChild(alumCard);
        });
    });
}

// Handle mentorship form submission
function handleMentorshipForm() {
    const form = document.getElementById('mentorship-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Mentorship form submitted:', data);
        alert('Thank you for signing up for the mentorship program!');
        form.reset();
    });
}

// Initialize the page
function init() {
    populateEvents();
    populateAlumni();
    populateJobs();
    searchAlumni();
    handleMentorshipForm();
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);