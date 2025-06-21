// Animate header on page load
document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('.mainHeader');
    mainHeader.style.opacity = 0;
    mainHeader.style.transform = 'translateY(-40px)';
    setTimeout(() => {
        mainHeader.style.transition = "opacity 1.2s, transform 1.2s";
        mainHeader.style.opacity = 1;
        mainHeader.style.transform = 'translateY(0)';
    }, 200);

    // Animate sections
    document.querySelectorAll('section, .container').forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
            el.style.transition = "opacity 1s, transform 1s";
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 600 + i * 250);
    });

    // Skill tag sparkle effect
    document.querySelectorAll('.skills ul li').forEach((li) => {
        li.addEventListener('mouseenter', () => {
            li.classList.add('sparkle');
            setTimeout(() => li.classList.remove('sparkle'), 400);
        });
    });

    // Button feedback
    const submitBtn = document.querySelector('form input[type="button"]');
    submitBtn.addEventListener('click', () => {
        submitBtn.value = "Submitted!";
        submitBtn.style.background = "linear-gradient(90deg, #43aa8b 70%, #a8dadc 100%)";
        setTimeout(() => {
            submitBtn.value = "Submit";
            submitBtn.style.background = "linear-gradient(90deg, #457b9d 70%, #1d3557 100%)";
        }, 1800);
    });
});

// Add sparkle animation CSS for skills
const style = document.createElement('style');
style.textContent = `
.skills ul li.sparkle {
    box-shadow: 0 0 16px 4px #e6394688, 0 0 42px 14px #a8dadc44;
    background: linear-gradient(90deg, #e63946 60%, #a8dadc 100%) !important;
    color: #22223b !important;
    transition: box-shadow 0.3s, background 0.3s, color 0.3s;
}
`;
document.head.appendChild(style);