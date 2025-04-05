function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img); // Resolve when image loads
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
        img.src = url; // Start loading the image
    });
}

async function displayImages(imageUrls) {
    const container = document.getElementById('image-container');
    for (const url of imageUrls) {
        try {
            const img = await loadImage(url);
            container.appendChild(img); // Add image to the DOM
        } catch (error) {
            console.error(error.message);
        }
    }
}

const urls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

displayImages(urls);