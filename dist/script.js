document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.grid-container');

    const birbSVG = `
        <svg class="birb" aria-hidden="true" viewBox="0 0 120 120" role="img" aria-label="A bird that bobbles its head">
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle class="birb-bod" cx="60" cy="60" r="30"></circle>
                <polyline class="foot" points="45,95 50,90 55,95" fill="none"></polyline>
                <polyline class="foot" points="60,95 65,90 70,95" fill="none"></polyline>
                <g class="birb-head">
                    <circle cx="60" cy="30" r="15"></circle>
                    <circle cx="50" cy="25" r="5" fill="white"></circle>
                    <circle cx="70" cy="25" r="5" fill="white"></circle>
                    <circle cx="50" cy="25" r="1" fill="black"></circle>
                    <circle cx="70" cy="25" r="1" fill="black"></circle>
                    <path class="beak" d="M 60 40 Q 50 50 60 60 Q 70 50 60 40 Z" fill="white"></path>
                </g>
            </g>
        </svg>`;

    for (let i = 0; i < 1000; i++) {
        const birbWrapper = document.createElement('div');
        birbWrapper.className = 'birb-wrapper';
        birbWrapper.innerHTML = birbSVG;
        gridContainer.appendChild(birbWrapper);

        const birbHead = birbWrapper.querySelector('.birb-head');
        let timeoutId;

        // Mouse events for desktop
        birbWrapper.addEventListener('mouseenter', () => {
            birbHead.style.animationPlayState = 'running';
            clearTimeout(timeoutId);
        });

        birbWrapper.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                birbHead.style.animationPlayState = 'paused';
            }, 3000); // Continue animation for 3 seconds after hover ends
        });

        // Touch events for mobile
        birbWrapper.addEventListener('touchstart', () => {
            birbHead.style.animationPlayState = 'running';
            clearTimeout(timeoutId);
        });

        birbWrapper.addEventListener('touchend', () => {
            timeoutId = setTimeout(() => {
                birbHead.style.animationPlayState = 'paused';
            }, 3000); // Continue animation for 3 seconds after touch ends
        });
    }
});
