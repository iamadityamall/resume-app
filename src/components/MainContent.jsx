import React from "react";

const MainContent = () => {
  return (
    <main className="bg-black min-h-screen pt-14">
      <section className="z-10 bg-primary w-[95vw] mx-auto p-4 font-secondary">
        {/* header */}
        <header className="flex flex-col items-center justify-between space-y-1">
          <div className="flex text-[8px] items-center space-x-5">
            <div className="text-ternary">
              <h1 className="font-primary/700 font-extrabold text-black text-lg">
                Aditya Harendra Mall
              </h1>
              <p className="font-secondary leading-3">
                Seeking a position in a reputable organization to start my
                career and grow, working with my skills and knowledge.
              </p>
            </div>
            <div className="text-ternary space-y-0.5 flex flex-col w-32">
              <h6 className="font-bold">+91 90299 92818</h6>
              <a
                href="mailto:contact.adityamall@gmail.com"
                className="underline underline-offset-2 text-blue-700 font-bold text-[7px]"
              >
                contact.adityamall@gmail.com
              </a>
              <div>
                <h6>Navi Mumbai, MH</h6>
                <h6>400709</h6>
              </div>
            </div>
          </div>

          <div className="h-[1.5px] w-[90vw] bg-secondary"></div>
        </header>
        <main className="flex py-4 w-full space-x-2">
          {/* left section */}
          <article className="w-[60vw] text-[8px] flex flex-col space-y-4">
            <div className="flex flex-col space-y-1" id="projects">
              <h2 className="text-[9px] font-bold text-secondary">PROJECTS</h2>
              <div className="flex flex-col space-y-2 text-ternary">
                <div>
                  <h4 className="text-black font-bold">Project Title</h4>
                  <ul className="list-disc text-[7px] relative left-4 w-5/6">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Soluta, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, culpa?
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold">Project Title</h4>
                  <ul className="list-disc text-[7px] relative left-4 w-5/6">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Soluta, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, culpa?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1" id="skills">
              <h3 className="font-bold text-secondary text-[9px]">SKILLS</h3>
              <ul className="list-disc relative left-4 w-[90%] text-[7px] text-ternary">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-1" id="certification">
              <h3 className="font-bold text-secondary text-[9px]">
                CERTIFICATION
              </h3>
              <ul className="list-disc relative left-4 w-[90%] text-[7px] text-ternary">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, soluta.
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-1" id="experience">
              <h2 className="text-[9px] font-bold text-secondary">
                OTHER EXPERIENCES
              </h2>
              <div className="flex flex-col space-y-2 text-ternary">
                <div>
                  <h4 className="text-black font-bold">Job Title</h4>
                  <p>month year - month year</p>
                  <ul className="list-disc text-[7px] relative left-4 w-5/6">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Soluta, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, culpa?
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold">Job Title</h4>
                  <p>month year - month year</p>
                  <ul className="list-disc text-[7px] relative left-4 w-5/6">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Soluta, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, culpa?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* right section */}
          <article className="w-[30vw] text-[8px] text-ternary flex flex-col space-y-4">
            <div className="flex flex-col space-y-1" id="education">
              <h3 className="text-[9px] font-bold text-secondary">EDUCATION</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-0.5">
                  <h4 className="text-[7px]">
                    <span className="font-bold text-[8px] text-black">
                      University of Mumbai
                    </span>
                    , Mumbai
                  </h4>
                  <p className="text-[7px] italic">
                    B.E in Mechanical Engineering
                  </p>
                  <p className="text-[7px]">June 2012 - May 2017</p>
                  <p className="text-[7px]">Cgpa: 6.45</p>
                </div>
                <div className="flex flex-col space-y-0.5">
                  <h4 className="text-[7px]">
                    <span className="font-bold text-[8px] text-black">
                      Fr. Agnel Polytechnic
                    </span>
                    , Mumbai
                  </h4>
                  <p className="text-[7px] italic">
                    Diploma in Mechanical Engineering
                  </p>
                  <p className="text-[7px]">June 2012 - May 2017</p>
                  <p className="text-[7px]">Cgpa: 6.45</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col space-y-1 leading-relaxed"
              id="extracurricular"
            >
              <h3 className="font-bold text-secondary text-[9px]">
                EXTRA CURRICULAR
              </h3>
              <ul className="list-disc relative left-4 w-5/6 text-[7px] text-ternary">
                <li>
                  Worked as a soccer assistant coach for Fr.Agnel School from
                  2014-17
                </li>
                <li>Attemped UPSC ESE exam for the year 2018-20</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-1" id="languages">
              <h3 className="font-bold text-secondary text-[9px]">LANGUAGES</h3>
              <ul className="list-disc relative left-4 w-5/6 text-[7px] text-ternary">
                <li>English, Hindi, Marathi</li>
              </ul>
            </div>
          </article>
        </main>
      </section>
    </main>
  );
};

export default MainContent;
