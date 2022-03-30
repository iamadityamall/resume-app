import React from "react";
import { education, extracurricular, languages } from "../resumeData";

const MainContent = () => {
  return (
    <main
      className="bg-black min-h-screen pt-14 bg-black/80 xl:pt-24"
      // style={{
      //   backgroundImage: `url(
      //     "https://googledrive.in30minutes.com/wordpress/wp-content/uploads/2021/02/c1-Google-Drive-home-2020.png"
      //   )`,
      // }}
    >
      <section className="z-10 bg-primary w-[95vw] mx-auto p-4 font-secondary xl:w-[55vw] flex flex-col items xl:p-8">
        {/* header */}
        <header className="flex flex-col items-center justify-between space-y-1 xl:space-y-3">
          <div className="flex text-[8px] items-center space-x-5 xl:space-x-3">
            <div className="text-ternary space-y-2">
              <h1 className="font-primary/700 font-extrabold text-black text-lg xl:text-5xl">
                Aditya Harendra Mall
              </h1>
              <p className="font-secondary leading-3 xl:text-sm xl:w-5/6">
                Seeking a position in a reputable organization to start my
                career and grow, working with my skills and knowledge.
              </p>
            </div>
            <div className="text-ternary space-y-0.5 flex flex-col w-32 xl:text-sm xl:w-48">
              <h6 className="font-bold">+91 90299 92818</h6>
              <a
                href="mailto:contact.adityamall@gmail.com"
                className="underline underline-offset-2 text-blue-700 font-bold text-[7px] xl:text-xs"
              >
                contact.adityamall@gmail.com
              </a>
              <div>
                <h6>Navi Mumbai, MH</h6>
                <h6>400709</h6>
              </div>
            </div>
          </div>

          <div className="h-[1.5px] w-full bg-secondary"></div>
        </header>

        <main className="flex p-4 w-full space-x-2">
          {/* left section */}
          <article className="w-[60vw] text-[8px] flex flex-col space-y-4 xl:space-y-8">
            <div className="flex flex-col space-y-1" id="projects">
              <h2 className="text-[9px] font-bold text-secondary xl:text-lg">
                PROJECTS
              </h2>
              <div className="flex flex-col space-y-2 text-ternary">
                <div className="xl:space-y-1">
                  <h4 className="text-black font-bold xl:text-sm">
                    Project Title
                  </h4>
                  <ul className="list-disc text-[7px] xl:text-xs xl:space-y-1">
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
                <div className="xl:space-y-1">
                  <h4 className="text-black font-bold xl:text-sm">
                    Project Title
                  </h4>
                  <ul className="list-disc text-[7px] xl:text-xs xl:space-y-1">
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
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                SKILLS
              </h3>
              <ul className="list-disc w-[90%] text-[7px] text-ternary xl:text-xs xl:space-y-1">
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
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                CERTIFICATION
              </h3>
              <ul className="list-disc  w-[90%] text-[7px] text-ternary xl:text-xs xl:space-y-1">
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
            <div
              className="flex flex-col space-y-1"
              id="experience xl:space-y-9"
            >
              <h2 className="text-[9px] font-bold text-secondary xl:text-lg">
                OTHER EXPERIENCES
              </h2>
              <div className="flex flex-col space-y-2 text-ternary xl:space-y-6">
                <div className="xl:space-y-1">
                  <h4 className="text-black font-bold xl:text-sm">Job Title</h4>
                  <p className="italic xl:text-xs">month year - month year</p>
                  <ul className="list-disc text-[7px] xl:text-xs xl:space-y-1">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicingelit.
                      Soluta, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, culpa?
                    </li>
                  </ul>
                </div>
                <div className="xl:space-y-1">
                  <h4 className="text-black font-bold xl:text-sm">Job Title</h4>
                  <p className="italic xl:text-xs">month year - month year</p>
                  <ul className="list-disc text-[7px] xl:text-xs xl:space-y-1">
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
            <div
              className="flex flex-col space-y-1 xl:space-y-2"
              id="education"
            >
              <h3 className="text-[9px] font-bold text-secondary xl:text-lg">
                EDUCATION
              </h3>
              <div className="flex flex-col space-y-2 xl:space-y-8">
                {education.map((education) => {
                  return (
                    <article
                      className="flex flex-col space-y-0.5"
                      key={education.id} >
                      <h4 className="text-[7px] xl:text-sm">
                        <span className="font-bold text-[8px] xl:text-sm text-black">
                          {education.college}
                        </span>
                        , {education.city}
                      </h4>
                      <p className="text-[7px] italic xl:text-xs">
                        {education.degree}
                      </p>
                      <p className="text-[7px] xl:text-xs">{education.year}</p>
                      <p className="text-[7px] xl:text-xs">{`${education.scoreMetric} : ${education.score}`}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div
              className="flex flex-col space-y-1 leading-relaxed xl:space-y-3"
              id="extracurricular"
            >
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                EXTRA CURRICULAR
              </h3>
              <ul className="list-disc relative left-4 w-5/6 text-[7px] text-ternary xl:text-xs xl:space-y-3">
                {extracurricular.map((item) => (
                  <li key={item.id}>{item.info}</li>
                ))}
              </ul>
            </div>
            <div
              className="flex flex-col space-y-1 xl:space-y-3"
              id="languages"
            >
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                LANGUAGES
              </h3>
              <ul className="list-disc relative left-4 w-5/6 text-[7px] text-ternary xl:text-xs">
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </article>
        </main>
      </section>
    </main>
  );
};

export default MainContent;
