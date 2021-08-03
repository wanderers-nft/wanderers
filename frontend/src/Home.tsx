import {About} from "./About";
import {Container} from "react-bootstrap";
import {Roadmap} from "./Roadmap";
import {Team} from "./Team";
import {SocialMedia} from "./SocialMedia";

export function Home() {
    return (
        <Container fluid="xxl">
            <section id="about"/>
            <About/>
            <hr/>
            <section id="roadmap"/>
            <Roadmap/>
            <hr/>
            <section id="team"/>
            <Team/>
            <hr/>
            <section id="social"/>
            <SocialMedia/>
        </Container>
    )
}