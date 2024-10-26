import { INSTAGRAM_MAX_CHARACTERS, META_MAX_CHARACTERS } from "../libs/constants";
export default function Stats({text}){
    return <section className = "stats">
        <Stat label = "Words" number = {text.split(" ").filter((x) => x !== "").length}/>
        <Stat label = "Characters" number = {text.length}/>
        <Stat label = "Instagram" number = {INSTAGRAM_MAX_CHARACTERS - text.length}/>    
        <Stat label = "Meta" number = {META_MAX_CHARACTERS- text.length}/> 
    </section>
}

function Stat({label, number}){
    return (
        <section className = "stat">
            <span className = {`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>   
            <h2 className = "second-heading">{label}</h2>
        </section>
    );
};