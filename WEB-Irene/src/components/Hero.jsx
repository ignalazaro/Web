export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__particles">
                <span className="hero__particle"></span>
                <span className="hero__particle"></span>
                <span className="hero__particle"></span>
                <span className="hero__particle"></span>
                <span className="hero__particle"></span>
                <span className="hero__particle"></span>
            </div>

            <span className="hero__ornament-top">✦ ✦ ✦</span>

            <span className="hero__label reveal">una història d&apos;amor</span>
            <h1 className="hero__title reveal reveal-delay-1">Irene</h1>
            <span className="hero__line reveal reveal-delay-2"></span>
            <p className="hero__subtitle reveal reveal-delay-3">
                Una història que tot just comença.
            </p>

            <span className="hero__ornament-bottom">✦ ✦ ✦</span>
            <span className="hero__scroll-hint">scroll ↓</span>
        </section>
    )
}
