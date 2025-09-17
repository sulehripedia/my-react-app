import ScrollVideo from '../components/ScrollVideo';

const Trading = () => (
  <>
    <ScrollVideo />
    <main className="main-content">
      <section className="hero">
        <h1>
          Montfort is a <br />
          global commodity <br />
          trading and asset <br />
          investment company.
        </h1>
        <p>
          We trade, refine, store, and transport energy and commodities. We also invest in related
          assets and provide innovative services with integrity and efficiency to create long-term
          value for our clients.
        </p>
        <a href="">What We Are</a>
      </section>

      <section className="section">
        <h1 className="h1-home">
          We provide energy solutions with integrity and efficiency through our different business
          divisions.
        </h1>
        <p>
          Montfort's interlinked divisions complement each other, providing integrated services that
          leverage their combined expertise. This synergy enhances our operational efficiency,
          enabling us to drive collective success in the global market and deliver exceptional value
          to our stakeholders.
        </p>
      </section>

      <section className="trading-h1">
        <p>Montfort Trading</p>
        <h1>Operating Efficiently by Leading with Innovation.</h1>
        <a href="">Montfort Trading</a>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>Reach out to discover how Montfort can help your business succeed on the global stage.</p>
      </section>
      {/* <Footer /> */}
    </main>
  </>
);

export default Trading;
