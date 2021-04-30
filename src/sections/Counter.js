import React from "react";
import CounterCard from "../components/Counter";

import { HCDAta } from "../Data/Home_Data";
function Counter({ data, cls, overlay }) {
  return (
    <section id="counter" className={`${cls ? cls : "index-3 gray_bg"}`}>
      <div className="container">
        <div className="col-lg-12">
          <div className="row row-safari">
            {HCDAta.map((data) => {
              const { icon, counter, title } = data;
              return (
                <CounterCard
                  key={counter}
                  icon={icon}
                  counter={counter}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </div>
      {overlay ? <div className="overlay"></div> : ""}
    </section>
  );
}

export default Counter;
