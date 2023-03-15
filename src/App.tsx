import React from "react";
import "./App.css";
import {Navbar} from './components/Navbar'
import Section from "./components/Section";
import {getSections} from "./DummyText";
export const App = () => {
    const sectionsList  = getSections()
    return (
        <div className="App">
          <Navbar />
            {sectionsList.map(section => {
                return (
                    <Section
                        title={section.title}
                        subtitle={section.subtitle}
                        dark={section.dark}
                        id={section.id}
                        key={section.id}
                    />
                )
            })}
        </div>
    );
}
