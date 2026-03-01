export default function Videos() {
    return (
        <section className="videos" id="videos">
            <div className="videos__header reveal">
                <h2>Vídeos.</h2>
                <span className="videos__header-line"></span>
                <p>Moments en moviment.</p>
            </div>
            <div className="videos__grid">
                <div className="videos__item reveal">
                    <video controls>
                        <source src="/assets/videos/01.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="videos__item reveal reveal-delay-1">
                    <video controls>
                        <source src="/assets/videos/02.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}
