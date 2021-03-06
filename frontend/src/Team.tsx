import {Col, Container, Image, Row} from "react-bootstrap";
import team_nick from "./assets/team_nick.png";
import team_emerald from "./assets/team_emerald.png";
import team_wyatt from "./assets/team_wyatt.png";
import team_landon from "./assets/team_landon.png";
import "./Team.css";

export function Team() {
    return (
        <Row className="my-5 m-lg-5 m-md-1 pb-3">
            <Col xl={3}>
                <h1>Meet the team.</h1>
            </Col>
            <Col>
                <Container>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={4} xs={5} className="team-col">
                            <Image src={team_nick} className="team"/>
                            <h3>Nick</h3>
                            <p>Animation/Design</p>
                            <a href="https://twitter.com/motionbynick" className="team-clickable">
                                @motionbynick
                            </a>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={5} className="team-col">
                            <Image src={team_emerald} className="team"/>
                            <h3>Emerald</h3>
                            <p>Programmer</p>
                            <a href="https://github.com/the-emerald" className="team-clickable">
                                @the-emerald
                            </a>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={5} className="team-col">
                            <Image src={team_wyatt} className="team"/>
                            <h3>Wyatt</h3>
                            <p>Illustration</p>
                            <p>Lives in the woods</p>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={5} className="team-col">
                            <Image src={team_landon} className="team"/>
                            <h3>Landon</h3>
                            <p>Sound Design</p>
                            <a href="https://www.instagram.com/landos.soundo/" className="team-clickable">
                                @lando.soundo
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}