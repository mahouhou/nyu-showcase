import React, { useState } from "react";

import bio from "./data/bio";
import { ReactComponent as Stamp } from "./assets/LOGO-STAMP-01.svg";
import Trailer from "./components/Trailer";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  //Stores clicked bio data
  const [popState, setPopState] = useState(null);

  function handleClick(name) {
    //Get name of bio that was clicked
    //Initially spread bio data onto bioState
    const bioState = [...bio];
    //Filter bioState for the clicked bio data
    let popStateTemp = bioState.filter((state) => {
      if (state.name === name) {
        //If there's a match, flip the popShow state
        //state.popShow = !state.popShow;
        return true;
      }
      return false;
    });
    //Set popState to popStateTemp
    setPopState(popStateTemp[0]);
  }

  //Map bio for student bio grid => this should get rendered only once
  const Grid = bio.map((student) => (
    //Upon clicking a bio, call handleClick function and pass the name prop
    <div
      className="bio"
      onClick={() => {
        handleClick(student.name);
      }}
    >
      <figure>
        <img
          src={require("/src/assets/portraits/" +
            student.name.split(" ")[0] +
            ".webp")}
          alt={student.name}
        ></img>
        <figcaption>
          <h3>{student.name}</h3>
        </figcaption>
      </figure>
    </div>
  ));

  function PopOut({ data }) {
    let linkList = data.url.map((list) => (
      <a href={`https://${list}`} target="_blank">
        {list}
      </a>
    ));
    return (
      <div className="mask">
        <div className="pop">
          <div className="btn-wrap">
            <button onClick={closePop}>X</button>
          </div>
          <div className="pop-bio">
            <img
              src={require("/src/assets/portraits/" +
                data.name.split(" ")[0] +
                ".webp")}
              alt={data.name}
            ></img>
            <div className="pop-bio-copy">
              <h3>{data.name}</h3>
              <p>{data.bio}</p>
              {data.url && linkList}
              {data.linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${data.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/{data.linkedin}
                </a>
              )}
              {data.facebook && (
                <a
                  href={`https://www.facebook.com/${data.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook.com/{data.facebook}
                </a>
              )}
              {data.vimeo && (
                <a
                  href={`https://vimeo.com/${data.vimeo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  vimeo.com/{data.vimeo}
                </a>
              )}
              {data.insta && (
                <a
                  href={`https://www.instagram.com/${data.insta}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{data.insta}
                </a>
              )}
              {data.email && <p>email: {data.email}@nyu.edu</p>}
              {data.gmail && <p>email: {data.gmail}@gmail.com</p>}
            </div>
          </div>
          <figure className="pop-film">
            <img
              src={require("/src/assets/stills/" + data.still + ".webp")}
              alt={data.title}
            ></img>
            <figcaption>
              <strong>{data.title}:</strong> <em>{data.logline}</em>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }

  function closePop() {
    setPopState(null);
  }

  return (
    <div className="App">
      <header>
        <p>
          May 7<span className="time">5 - 8pm</span>
        </p>
        <Stamp title="The 2nd Year Showcase" />
        <p>
          May 8<span className="time">2 - 6pm</span>
        </p>
      </header>
      <Trailer />
      <Intro />
      {popState && <PopOut data={popState} />}
      <section className="grid-section">
        <h2>Meet The Filmmakers</h2>
        <div className="grid-wrap">{Grid}</div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
