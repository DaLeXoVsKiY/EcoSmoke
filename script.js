const dots = document.querySelectorAll('.scroll a');

const removeActiveClass = () => {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
}

const addActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let currrentDot = document.querySelector(`.scroll a[href="#${entry.target.id}"]`);
            removeActiveClass();
            currrentDot.classList.add('active');
        }
    });
};

const options = {
    threshold: 0.8,
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll('section, header');

sections.forEach((section) => {
    observer.observe(section);
});