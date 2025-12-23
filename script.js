const img = document.getElementById('tilting-png');
        const range = 15; // Max tilt degrees
        let ticking = false;

        img.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = img.getBoundingClientRect();
                    
                    // 1. Find the center of the image
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // 2. Find mouse position relative to the image top-left (0 to Width)
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;

                    // 3. Calculate rotation based on distance from the center
                    // Result is between -0.5 and 0.5
                    const xPercent = (mouseX - centerX) / rect.width;
                    const yPercent = (mouseY - centerY) / rect.height;

                    // 4. Apply rotation
                    // X-axis movement rotates around Y, Y-axis movement rotates around X
                    const rotateY = xPercent * range;
                    const rotateX = -(yPercent * range);

                    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Smoothly reset when mouse leaves the image
        img.addEventListener('mouseleave', () => {
            img.style.transform = `rotateX(0deg) rotateY(0deg) scale(1.0)`;
        });