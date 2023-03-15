import React from "react";
type sectionProps = { title: string, subtitle: string, dark: boolean, id: string }
export default function Section(props: sectionProps) {
    return (
        <div className={"section" + (props.dark ? " section-dark" : "")}>
            <div className="section-content" id={props.id}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}
