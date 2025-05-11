const steps = [
    {
        title: "Welcome",
        content: "This presentation will guide you through the concepts behind a bank web application, starting from the basics and progressing to advanced topics."
    },
    {
        title: "Programming Languages",
        content: "Bank web applications are typically built using languages like JavaScript for the frontend and Java or Python for the backend."
    },
    {
        title: "Frontend Frameworks",
        content: "Frameworks like React or Angular are used to create dynamic and responsive user interfaces."
    },
    {
        title: "Backend Frameworks",
        content: "Frameworks like Spring Boot (Java) or Django (Python) are used to handle business logic and server-side operations."
    },
    {
        title: "Databases",
        content: "Relational databases like PostgreSQL or MySQL are used to securely store user and transaction data."
    },
    {
        title: "Security Measures",
        content: "Security measures include encryption, password hashing, two-factor authentication, and regular audits to protect user data."
    },
    {
        title: "Server Management",
        content: "Servers are hosted on cloud platforms like AWS or Azure, with load balancing and monitoring tools to ensure reliability."
    },
    {
        title: "Conclusion",
        content: "Bank web applications are complex systems that require careful planning, robust technologies, and strong security measures to function effectively."
    }
];

let currentStep = 0;

function updateStep() {
    const stepTitle = document.getElementById("step-title");
    const stepContent = document.getElementById("step-content");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    stepTitle.textContent = steps[currentStep].title;
    stepContent.textContent = steps[currentStep].content;

    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
}

document.addEventListener("DOMContentLoaded", updateStep);
