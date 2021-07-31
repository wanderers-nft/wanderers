import video_placeholder from "./assets/video_placeholder.png"
import "./Home.css";
import {Col, Image, Row} from "react-bootstrap";

export function About() {
    return (
            <Row className="about">
                <Col>
                    <p>The Wanderers are an infamous band of intergalactic space voyagers known for their legendary
                        travels. That was - until their disappearance on August 15, 2021.</p>
                </Col>
                <Col>
                    <Image src={video_placeholder} alt="video placeholder" fluid/>
                </Col>
            </Row>
    )
}