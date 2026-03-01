const chapters = [
    {
        date: 'Capítol 01',
        title: 'Les primeres vegades',
        desc: ' Quan estàvem lluny, però molt a prop.',
        src: '/assets/photos/01.jpg',
    },
    {
        date: 'Capítol 02',
        title: 'Reshulona',
        desc: 'A vegades xulita i seria.',
        src: '/assets/photos/02.jpg',
    },
    {
        date: 'Capítol 03',
        title: 'Riures',
        desc: 'Sempre trobem una manera de fer-mos riure.',
        src: '/assets/photos/03.jpg',
    },
    {
        date: 'Capítol 04',
        title: 'Créixer junts.',
        desc: 'Vull que seguim ensenyant-nos coses noves cada dia',
        src: '/assets/photos/04.jpg',
    },
    {
        date: 'Capítol 05',
        title: 'Noves aventures.',
        desc: 'Que ens ajudem a perdre la por a aquest món hostil i ens recolzem incondicionalment',
        src: '/assets/photos/05.jpg',
    },
    {
        date: 'Capítol 06',
        title: 'Instants de pau.',
        desc: 'Enmig del caos, tu ets la meva calma.',
        src: '/assets/photos/06.jpg',
    },
    {
        date: 'Capítol 07',
        title: 'Somnis compartits.',
        desc: 'I continuem construint un espai, la nostra caseta, on esitguem tranquils, agust i en pau amb el món',
        src: '/assets/photos/13.jpg',
    },

]

export default function Timeline() {
    return (
        <section className="timeline" id="historia">
            <div className="timeline__header reveal">
                <h2>La nostra història</h2>
                <span className="timeline__header-line"></span>
                <p></p>
            </div>

            <div className="timeline__items">
                {chapters.map((ch, i) => (
                    <div className="timeline__item reveal" key={i}>
                        <div className="timeline__text">
                            <div className="timeline__chapter-num">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="timeline__date">{ch.date}</span>
                            <h3 className="timeline__title">{ch.title}</h3>
                            <p className="timeline__desc">{ch.desc}</p>
                        </div>
                        <div className={`timeline__image-wrapper ${ch.src ? 'timeline__image-wrapper--loaded' : ''}`}>
                            {ch.src ? (
                                <img src={ch.src} alt={ch.title} loading="lazy" />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 'var(--size-small)',
                                    color: 'var(--color-muted)',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                }}>
                                    foto {String(i + 1).padStart(2, '0')}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
