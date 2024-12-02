"use client";
import React from "react";
import { tools, skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My 
        <span className="text-purple"> Skills & Tools</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-24 max-lg:mt-10">
          {tools.map((tool) => (
            <React.Fragment key={tool.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={tool.nameImg}
                  alt={tool.name}
                  width={tool.id === 4 || tool.id === 5 ? 60 : 100}
                  className="md:w-32 w-28"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
