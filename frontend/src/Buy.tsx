import {Button, Col, Container, Row} from "react-bootstrap";
import "./Buy.css"
import {InjectedConnector} from "@web3-react/injected-connector";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {AccountInfo} from "./AccountInfo";
import {Sale} from "./Sale";


// FIXME: Move to mainnet before launch
export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        // 1,      // Mainnet
        4,      // Rinkeby
    ],
})

export function Buy() {
    const web3 = useWeb3React<Web3Provider>();

    const onClickConnect = async () => {
        await web3.activate(injectedConnector);
    }

    return (
        <Container fluid="xxl">
            <Row>
                <Col className="buy-now-banner">
                    <h1>Mint now!</h1>
                </Col>
            </Row>
            <Row>
                <Col className="buy-now-banner mt-3 mb-3">
                    {
                        web3.active ?
                            <AccountInfo/>
                            :
                            <Button className="btn-minty" onClick={onClickConnect}>
                                Connect to Metamask
                            </Button>
                    }
                </Col>
            </Row>
            {
                web3.active ?
                    <>
                        <hr/>
                        <Row>
                            <Col className="buy-now-banner mt-3">
                                <Sale/>
                            </Col>
                        </Row>
                    </>
                    : <div/>
            }


        </Container>
    )
}