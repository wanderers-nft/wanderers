import {Col, Row} from "react-bootstrap";
import "./Team.css";

export function SocialMedia() {
    return (
        <Row className="my-5 m-lg-5 m-md-1">
            <Col xl={8}>
                <h1>Follow us.</h1>
            </Col>
            <Col xl={2}>
                <p>Discord</p>
            </Col>
            <Col xl={2}>
                <p>Twitter</p>
            </Col>
        </Row>
    )
}