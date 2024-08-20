const menuButton = document.querySelector('.button_more');
const hiddenTabs = document.querySelectorAll('.hidden');
const planTabs = document.querySelectorAll('.plan');

function updateVisibility() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
    const isDesktop = window.matchMedia('(min-width: 1120px)').matches;

    if (isMobile) {
        hiddenTabs.forEach(tab => {
            tab.style.display = 'flex';
        });
        planTabs.forEach(tab => {
            tab.style.display = 'flex';
        });
    } else if (isTablet) {
        hiddenTabs.forEach(tab => {
            tab.style.display = 'none';
        });
        planTabs.forEach(tab => {
            tab.style.display = 'none';
        });
    } else if (isDesktop) {
        hiddenTabs.forEach(tab => {
            tab.style.display = 'none';
        });
        planTabs.forEach(tab => {
            tab.style.display = 'flex';
        });
    }
}

updateVisibility();

menuButton.addEventListener('click', function () {
    hiddenTabs.forEach(tab => {
        tab.style.display = tab.style.display === 'flex' ? 'none' : 'flex';
    });

    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
    if (isTablet) {
        planTabs.forEach(tab => {
            tab.style.display = tab.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    menuButton.textContent = menuButton.textContent === 'Показать всё' ? 'Скрыть' : 'Показать всё';
    menuButton.classList.toggle('up');
});

window.addEventListener('resize', updateVisibility);
