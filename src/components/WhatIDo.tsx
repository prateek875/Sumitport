import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const clickHandlersRef = useRef(new Map<HTMLDivElement, EventListener>());

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const containers = [...containerRef.current];
    const clickHandlers = clickHandlersRef.current;

    if (ScrollTrigger.isTouch) {
      containers.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler: EventListener = () => handleClick(container);
          clickHandlers.set(container, handler);
          container.addEventListener("click", handler);
        }
      });
    }

    return () => {
      containers.forEach((container) => {
        if (container) {
          const handler = clickHandlers.get(container);
          if (handler) {
            container.removeEventListener("click", handler);
            clickHandlers.delete(container);
          }
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>GRAPHIC DESIGN</h3>
              <h4>Visual Communication That Converts</h4>
              <p>
                Designing high-impact social creatives, campaign assets,
                presentations, reports, and marketing collaterals with a
                strong focus on clarity, hierarchy, and brand consistency.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Adobe Photoshop</div>
                <div className="what-tags">Adobe Illustrator</div>
                <div className="what-tags">Adobe InDesign</div>
                <div className="what-tags">CorelDraw</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">PPT Design</div>
                <div className="what-tags">Figma</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BRANDING & MOTION</h3>
              <h4>Storytelling Through Design Systems</h4>
              <p>
                Building complete brand experiences with motion graphics,
                web visuals, and campaign films. From identity to execution,
                every output is crafted to support strategy and audience impact.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">After Effects</div>
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">Adobe Animate</div>
                <div className="what-tags">Adobe XD</div>
                <div className="what-tags">Element 3D</div>
                <div className="what-tags">Branding</div>
                <div className="what-tags">Web Design</div>
                <div className="what-tags">Motion Graphics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
