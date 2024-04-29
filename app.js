function searchJobs() {
    const jobTitle = document.getElementById('jobTitle').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const jobType = document.getElementById('job-type').value.toLowerCase();
    const jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(function(item) {
        const title = item.querySelector('h2').innerText.toLowerCase();
        const loc = item.querySelector('p:nth-of-type(1)').innerText.toLowerCase();
        const type = item.querySelector('p:nth-of-type(2)').innerText.toLowerCase();
        
        if (title.includes(jobTitle) && loc.includes(location) && type.includes(jobType)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelectorAll('a[href^=".job-listing-container"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('exploreJobsButton').addEventListener('click', function() {
    document.querySelector('.job-listing-container').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^=".contact-us"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^=".info"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});