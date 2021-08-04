import {Button, Col, Container, Row} from "react-bootstrap";
import "./Buy.css"
import {InjectedConnector} from "@web3-react/injected-connector";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {AccountInfo} from "./AccountInfo";
import {SaleInfo} from "./SaleInfo";
import {Wanderer__factory} from "./typechain";


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

    const RINKEBY = Wanderer__factory
        .connect("0xD3955A8b3bD5E17aE97d9a19Cba661541b11c3b2", web3.library!)

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
                        <Row className="buy-now-banner mt-3">
                            <SaleInfo address={RINKEBY}/>
                        </Row>
                    </>
                    : <div/>
            }


        </Container>
    )
}