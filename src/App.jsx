import React from 'react';

// Both call-to-action buttons and the floating WhatsApp icon open this same chat.
// Use the country code and number without spaces or a leading +.
const WHATSAPP_NUMBER = '919818299706';
const WHATSAPP_MESSAGE = "Hi! I'd like to get 20% extra. Please share the details.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const dishes = [
  {
    number: '01',
    name: 'Sunday roast chicken',
    description: 'Herb-roasted chicken, crisp potatoes, pan gravy, and garden greens.',
    price: '$24',
    image:
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85',
    alt: 'Roast chicken served with herbs and vegetables',
    label: 'A house favorite',
  },
  {
    number: '02',
    name: 'Wild mushroom toast',
    description: 'Sourdough, slow-cooked mushrooms, whipped ricotta, and thyme.',
    price: '$16',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85',
    alt: 'Freshly prepared toast with seasonal toppings',
    label: 'Seasonal',
  },
  {
    number: '03',
    name: 'The long-table salad',
    description: 'Market greens, ripe pear, toasted walnuts, and a little blue cheese.',
    price: '$18',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Colorful seasonal salad with fresh vegetables',
    label: 'From the garden',
  },
];

function ArrowLink({ href, children, light = false }) {
  return (
    <a className={`arrow-link${light ? ' arrow-link--light' : ''}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="The Common Table home">
          <span className="wordmark__mark" aria-hidden="true">ct.</span>
          <span className="wordmark__name">the common<br />table</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#story">Our story</a>
          <a href="#menu">The menu</a>
          <a href="#visit">Come by</a>
        </nav>
        <a className="header-cta" href="#visit">Find a table <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__copy">
            <p className="eyebrow"><span /> A neighborhood kind of place</p>
            <h1>Good food.<br />Good company.</h1>
            <p className="hero__description">
              Pull up a chair. We make the sort of food that brings everyone to the table—and keeps them there.
            </p>
            <div className="hero__actions">
              <a
                className="button button--offer"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get 20% Extra <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button--whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.1 11.9a8.1 8.1 0 0 1-12 7.1L3 20l1.1-5a8.1 8.1 0 1 1 16-3.1Z" />
                  <path d="M8.5 7.9c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.8s1.6-.7 1.8-1.3c.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.7-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.8-1.9Z" />
                </svg>
                WhatsApp Us <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero__note">
              <span className="hero__note-icon" aria-hidden="true">✳</span>
              <span>Made with what’s good<br />and what’s in season.</span>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90"
              alt="A warmly lit table set for a relaxed dinner"
            />
            <div className="image-caption"><span>Good things happen</span><span>around this table.</span></div>
            <span className="hero__image-index">EST. 2014&nbsp; · &nbsp;MADE TO BE SHARED</span>
          </div>
          <span className="hero__side-note">A PLACE TO EAT, STAY AWHILE &nbsp;—&nbsp; EVERY DAY</span>
        </section>

        <section className="welcome-strip" aria-label="Restaurant highlights">
          <p><span className="strip-icon" aria-hidden="true">✳</span> Cooked from scratch</p>
          <p><span className="strip-icon" aria-hidden="true">✳</span> Local when we can</p>
          <p><span className="strip-icon" aria-hidden="true">✳</span> Always room for one more</p>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> A few things we love</p>
              <h2>From our table<br />to yours.</h2>
            </div>
            <div className="section-heading__aside">
              <p>Thoughtful ingredients, familiar comforts, and something new whenever the season turns.</p>
              <ArrowLink href="#visit">See what’s cooking</ArrowLink>
            </div>
          </div>
          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.number}>
                <div className="dish-card__image-wrap">
                  <img src={dish.image} alt={dish.alt} loading="lazy" />
                  <span className="dish-card__label">{dish.label}</span>
                  <span className="dish-card__number">{dish.number}</span>
                </div>
                <div className="dish-card__details">
                  <div>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </div>
                  <span className="dish-card__price">{dish.price}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-note">A little heads-up: our menu follows the seasons, so these favorites may change.</p>
        </section>

        <section className="story-section" id="story">
          <div className="story-section__image">
            <img
              src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1200&q=85"
              alt="Friends sharing a meal around a table"
              loading="lazy"
            />
            <span className="story-section__stamp">Gather<br />'round</span>
          </div>
          <div className="story-section__copy">
            <p className="eyebrow eyebrow--light"><span /> A table for everyone</p>
            <h2>There’s always<br />room for one more.</h2>
            <p>
              We started with a simple idea: make honest food, welcome everyone, and let the good evenings take care of themselves. A few years—and a lot of shared dinners—later, that’s still what we’re here for.
            </p>
            <ArrowLink href="#visit" light>Come meet us</ArrowLink>
            <span className="story-section__signature">Made with care, since 2014</span>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="visit-heading">
            <p className="eyebrow"><span /> Your seat’s waiting</p>
            <h2>Come as you are.</h2>
          </div>
          <div className="visit-grid">
            <div className="visit-block">
              <span className="visit-block__number">01 / FIND US</span>
              <h3>Right around<br />the corner.</h3>
              <p>24 Market Street<br />Brooklyn, NY 11211</p>
              <a href="https://maps.google.com/?q=24+Market+Street+Brooklyn+NY+11211" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
            </div>
            <div className="visit-block">
              <span className="visit-block__number">02 / WHEN WE’RE HERE</span>
              <h3>Most days,<br />most of the day.</h3>
              <p>Monday – Friday &nbsp; 11 am – 10 pm<br />Saturday – Sunday &nbsp; 9 am – 10 pm</p>
              <a href="tel:+17185550148">Call us: (718) 555-0148 <span aria-hidden="true">↗</span></a>
            </div>
            <div className="visit-block visit-block--cta">
              <span className="visit-block__number">03 / MAKE AN EVENING OF IT</span>
              <h3>We saved<br />you a seat.</h3>
              <p>Drop by for a bite or bring the whole crew. There’s always room at our table.</p>
              <a className="button button--rust" href="mailto:hello@thecommontable.com?subject=Save%20me%20a%20table">Save me a table <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home" aria-label="The Common Table home">
          <span className="wordmark__mark" aria-hidden="true">ct.</span>
          <span className="wordmark__name">the common<br />table</span>
        </a>
        <p>Come hungry. Leave happy.</p>
        <a className="back-to-top" href="#home">Back to the top <span aria-hidden="true">↑</span></a>
        <span className="footer-copyright">© 2025 THE COMMON TABLE</span>
      </footer>
      <a
        className="whatsapp-button"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us — ask about the 20% extra offer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.1 11.9a8.1 8.1 0 0 1-12 7.1L3 20l1.1-5a8.1 8.1 0 1 1 16-3.1Z" />
          <path d="M8.5 7.9c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.8s1.6-.7 1.8-1.3c.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.7-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.8-1.9Z" />
        </svg>
      </a>
    </>
  );
}

export default App;
