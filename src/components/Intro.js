const Intro = () => (
    <section className="intro-section">
        <h2>Come See The Show!</h2>
        <div className="banner">
            <p className="title"> 2 Days <br /> 24 Films </p>
            <p>May 7<span className="time">5 - 8pm</span></p>
            <p>May 8<span className="time">2 - 6pm</span></p>
        </div>
        <p>The NYU Second Year Showcase is a celebration of the biggest event in our Graduate Film calendar;
            a screening of a year’s worth of work by 24 young writers and directors.
            Students travelled to 5 different countries and 7 different states to make these films,
            directing their own as well as crewing for one another.
            Come join us to watch these new stories take shape on the big screen!</p>
        <a
        className="btn"
        href="https://www.eventbrite.com/e/2022-graduate-film-second-year-showcase-day-one-tickets-328353954517"
        target="_blank"
        rel="noreferrer">
            Day 1 Tickets
        </a>
        <a
        className="btn"
        href="https://www.eventbrite.com/e/2022-graduate-film-second-year-showcase-day-two-tickets-328364546197
        "
        target="_blank"
        rel="noreferrer">
            Day 2 Tickets
        </a>
    </section>
);

export default Intro;