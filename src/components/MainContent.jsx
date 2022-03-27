import React from "react";

const MainContent = () => {
  return (
    <main className="bg-black/90 min-h-screen pt-14">
      <section className="z-10 bg-primary w-[95vw] h-screen mx-auto p-6">
        <header className="flex flex-col items-center justify-between space-y-2">
          <div className="flex  text-[10px] items-end space-x-10">
            <div className="text-ternary tracking-wide">
              <h1 className="font-primary/700 font-extrabold text-black text-lg">
                Aditya Harendra Mall
              </h1>
              <p className="font-secondary leading-3">
                Seeking a position in a reputable organization to start my
                career and grow, working with my skills and knowledge.
              </p>
            </div>
            <div className="text-ternary space-y-1">
              <h6 className="font-bold">+91 90299 92818</h6>
              <a
                href="mailto:contact.adityamall@gmail.com"
                className="underline underline-offset-2 text-blue-700 font-bold"
              >
                contact.adityamall@gmail.com
              </a>
              <div>
                <h6>Navi Mumbai, MH</h6>
                <h6>400709</h6>
              </div>
            </div>
          </div>

          <div className="h-[1.5px] w-[85vw] mx-auto bg-secondary/80"></div>
        </header>
      </section>
    </main>
  );
};

export default MainContent;
