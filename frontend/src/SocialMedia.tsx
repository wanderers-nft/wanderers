import {Col, Image, Row} from "react-bootstrap";
import "./SocialMedia.css";
import social_discord from "./assets/social-discord.png";
import social_twitter from "./assets/social-twitter.png";


export function SocialMedia() {
    return (
        <Row className="my-5 m-lg-5 m-md-1 pt-5">
            <Col xl={8}>
                <h1>Wander with us.</h1>
            </Col>
            <Col xl={2} lg={3} md={3} sm={4} xs={6} className="media-col">
                <a href="https://discord.gg/8XaURCgFfq">
                    <Image src={social_discord} className="social"/>
                    <p>Discord</p>
                </a>
            </Col>
            <Col xl={2} lg={3} md={3} sm={4} xs={6} className="media-col">
                <a href="https://twitter.com/wanderers_nft">
                    <Image src={social_twitter} className="social"/>
                    <p>@wanderers_nft</p>
                </a>
            </Col>
        </Row>
    )
}