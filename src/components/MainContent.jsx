import React from "react";
import {
  header,
  certifications,
  experiences,
  education,
  extracurricular,
  projects,
  skills,
  volunteering,
} from "../resumeData";

const MainContent = () => {
  const { name, summary, phone, links, email, location } = header;
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
          <div className="flex text-[8px] items-center space-x-5 xl:space-x-3 w-full justify-between">
            <div className="text-ternary w-[60vw] xl:w-[60%] xl:space-y-2">
              <h1 className="font-primary/700 font-extrabold text-black text-lg xl:text-5xl">
                {name}
              </h1>
              <p className="font-secondary leading-3 xl:text-sm xl:w-5/6">
                {summary}
              </p>
            </div>
            <div className="text-ternary space-y-0.5 flex flex-col xl:text-sm w-[30vw] xl:w-[30%]">
              <h6 className="font-bold">{phone}</h6>
              <a
                href="mailto:contact.adityamall@gmail.com"
                className="underline underline-offset-2 text-blue-700 font-bold text-[7px] xl:text-xs"
              >
                {email}
              </a>
              <div className="flex space-x-1">
                {links.map((link) => {
                  const { id, path, linkName } = link;
                  return (
                    <a href={path} target="_blank" rel="noreferrer"
                    key={id}
                    className="text-blue-600 font-secondary text-[8px] font-semibold xl:text-xs">
                      {linkName}
                    </a>
                  );
                })}
              </div>
              <div>
                <h6>{location}</h6>
              </div>
            </div>
          </div>

          <div className="h-[1.5px] w-full bg-secondary"></div>
        </header>

        <main className="flex p-2 w-full space-x-6">
          {/* left section */}
          <article className="w-[60vw] text-[8px] flex flex-col space-y-4 xl:space-y-8">
            <div className="flex flex-col space-y-1" id="projects">
              <h2 className="text-[9px] font-bold text-secondary xl:text-lg">
                PROJECTS
              </h2>
              <div className="flex flex-col space-y-2 text-ternary">
                {projects.map((project) => {
                  const { id, title, link, info } = project;
                  return (
                    <div className="xl:space-y-1 space-y-1" key={id}>
                      <h4 className="text-black font-bold xl:text-sm">
                        {title}
                      </h4>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[6px] text-blue-600 font-secondary xl:text-xs"
                      >
                        {link}
                      </a>
                      <ul className="list-disc text-[7px] xl:text-xs xl:space-y-1 ml-4">
                        {info.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col space-y-1" id="skills">
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                SKILLS
              </h3>
              <ul className="list-disc w-[90%] text-[7px] text-ternary space-y-1 xl:text-xs ml-4">
                {skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </div>
            <div className="flex flex-col space-y-1" id="certification">
              <h3 className="font-bold text-secondary text-[9px] xl:text-lg">
                CERTIFICATION
              </h3>
              <ul className="list-disc  w-[90%] text-[7px] text-ternary xl:text-xs space-y-1 ml-4">
                {certifications.map((certifcate) => {
                  return <li key={certifcate.id}>{certifcate.info}</li>;
                })}
              </ul>
            </div>
            <div
              className="flex flex-col space-y-1"
              id="experience xl:space-y-9"
            >
              <h2 className="text-[9px] font-bold text-secondary xl:text-lg">
                VOLUNTEERING EXPERIENCES
              </h2>
              <div className="flex flex-col space-y-2 text-ternary xl:space-y-6">
                {volunteering.map((volunteer) => {
                  const { id, company, location, title, year, info } =
                    volunteer;
                  return (
                    <article className="space-y-1" key={id}>
                      <h4 className="text-black font-bold xl:text-sm">
                        {`${company},`}{" "}
                        <span className="font-normal">{`${location} - ${title}`}</span>
                      </h4>
                      <p className="italic xl:text-xs">{year}</p>
                      <ul className="list-disc text-[7px] xl:text-xs space-y-1 ml-4">
                        {info.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </article>
                  );
                })}
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
                      key={education.id}
                    >
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
              <p className="text-[7px] text-ternary xl:text-xs">
                English, Hindi, Marathi
              </p>
            </div>
            <div
              className="flex flex-col space-y-1"
              id="experience xl:space-y-9"
            >
              <h2 className="text-[9px] font-bold text-secondary xl:text-lg">
                OTHER EXPERIENCE
              </h2>
              <div className="flex flex-col space-y-2 text-ternary xl:space-y-6">
                {experiences.map((experience) => {
                  const { id, company, location, title, year, info } =
                    experience;
                  return (
                    <article className="space-y-1" key={id}>
                      <h4 className="text-black font-bold text-[7px] xl:text-sm">
                        {`${company},`}{" "}
                        <span className="font-normal text-[7px] xl:text-xs">{`${location} - ${title}`}</span>
                      </h4>
                      <p className="italic xl:text-xs text-[7px]">{year}</p>
                      <ul className="list-disc text-[7px] xl:text-xs space-y-1 ml-4">
                        {info.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </article>
        </main>
      </section>
    </main>
  );
};

export default MainContent;
