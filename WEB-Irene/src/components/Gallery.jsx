import { useState, useEffect } from 'react'

export default function Gallery() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const res = await fetch('/content/photos.json?v=' + Date.now());
                if (!res.ok) throw new Error('Failed to load');
                const data = await res.json();
                setPhotos(data);
            } catch (err) {
                console.error("Error loading photos.json, using default placeholders", err);
                setPhotos(
                    Array.from({ length: 6 }, (_, i) => ({
                        id: i + 1,
                        src: null,
                        alt: `Placeholder ${i + 1}`,
                        caption: `Moment ${String(i + 1).padStart(2, '0')}`,
                    }))
                );
            }
        };
        loadPhotos();
    }, []);

    return (
        <section className="gallery" id="galeria">
            <div className="gallery__header reveal">
                <h2>Instants.</h2>
                <span className="gallery__header-line"></span>
                <p>No calen paraules.</p>
            </div>

            <div className="gallery__grid">
                {photos.map((photo, i) => (
                    <div className={`gallery__item reveal reveal-delay-${Math.min(i + 1, 4)}`} key={photo.id}>
                        <div className="gallery__placeholder">
                            {photo.src ? (
                                <img src={photo.src} alt={photo.alt} loading="lazy" />
                            ) : (
                                <span className="gallery__placeholder-icon">
                                    {String(photo.id).padStart(2, '0')}
                                </span>
                            )}
                        </div>
                        <span className="gallery__caption">{photo.caption}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
