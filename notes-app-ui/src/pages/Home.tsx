// src/pages/Home.tsx
import ScrollVideo from '../components/ScrollVideo';
import TabsSection from '../components/TabsSection';

const Home = () => (
  <>
    <ScrollVideo />
    <main className="main-content">
      <section className='home-logo'>
        <img src="/assets/logo.png"></img>
      </section>
      <section className="hero">
        <h1>
         Landmark Infrastructure<br />
         Financial Engineering<br />
         High Technology<br />
         Investments<br />
        </h1>
        <p>
          With our task force of experts in financial engineering, our core business consists in leveraging strong strategic 
          alliances commercial conglomerates for the design and long term financing of major businesses and programs that
           governments rank among their priorities to implement.
        </p>
<a href="#" className="link-button">
   Who We Are
  <span className="arrow-circle">
    <svg
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>
      </section>

      <section className="section">
        <h1 className="h1-home">
          we back challengers that leverage disruptive technology
        </h1>
        <p>
          Montfort's interlinked divisions complement each other, providing integrated services that
          leverage their combined expertise. This synergy enhances our operational efficiency,
          enabling us to drive collective success in the global market and deliver exceptional value
          to our stakeholders.
        </p>
      </section>
{/* 
      <section className="trading-h1">
        <p>Montfort Trading</p>
        <h1>Operating Efficiently by Leading with Innovation.</h1>
        <a href="">Montfort Trading</a>
      </section> */}

      <section className="alone">
        <h1>Sapramin has been highly successful over the years and excelled at leveraging its strategic alliances and partnerships with major industry and finance corporations for the design and structuring of landmark projects</h1>
        {/* <p>Sapramin aims at creating value through tailor-made, innovative and sophisticated technical engineering and financial 
          solutions. We want to resolve the challenging problems associated with the structuring and implementing of high-quality,
           large-scale programs for developing countries.
         </p> */}
      </section>
      <TabsSection />
    </main>
  </>
);

export default Home;
