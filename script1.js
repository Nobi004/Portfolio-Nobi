const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');

// Resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove the active class from the currently active resume list and box
        document.querySelector('.resume-list.active').classList.remove('active');
        document.querySelector('.resume-box.active').classList.remove('active');
        
        // Add the active class to the clicked resume list and the corresponding box
        list.classList.add('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// Portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove the active class from the currently active portfolio list
        document.querySelector('.portfolio-list.active').classList.remove('active');
        
        // Add the active class to the clicked portfolio list
        list.classList.add('active');
    });
});
    