import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer</h4>
                <h5>On Purpose</h5>
              </div>
              <h3>Jun 2021 – Present</h3>
            </div>
            <p>
              Leading creative execution across graphics design, web design,
              branding, and motion graphics for national and global campaigns.
              Delivered visual work for clients and initiatives including USAID,
              Bayer, Smart Power India, YuWaah!, GEAPP, Convergence India,
              GIZ (Karo Sambhav, SUP, EY), BRLF, and Glosolar.in.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer</h4>
                <h5>Scribble Solutions</h5>
              </div>
              <h3>Oct 2020 – May 2021</h3>
            </div>
            <p>
              Worked on branding and communication design projects with a focus
              on graphics, web design, and motion graphics. Key brand work
              included Ananta Hotels & Resorts, Vamika Silver, G.K. Chudiwalas,
              Gems Paradise, Caffe Birraio, and SoulStir.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer</h4>
                <h5>Vowels Advertising</h5>
              </div>
              <h3>May 2018 – Sep 2020</h3>
            </div>
            <p>
              Delivered branding, graphics, and digital design solutions for
              hospitality and lifestyle clients including Taj Jai Mahal Palace,
              Holiday Inn, Radisson Gwalior, Hotel Diggi Palace, Candour Dubai,
              Burger Farm, JKJ Jeweller, and other premium brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
