const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        const projectCard = image.parentElement;
        const projectLink = projectCard.querySelector('a').href;
        window.open(projectLink, '_blank');
    });

    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
