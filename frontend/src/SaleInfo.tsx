import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {Wanderer} from "./typechain";
import {useEffect, useState} from "react";
import {BigNumber} from "ethers";
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import "./SaleInfo.css";

export interface SaleProps {
    address: Wanderer
}

export function SaleInfo(props: SaleProps) {
    const web3 = useWeb3React<Web3Provider>();

    // Current number minted
    const [supply, setSupply] = useState<BigNumber | null>(null);
    // Max supply
    const [maxSupply, setMaxSupply] = useState<BigNumber | null>(null);
    // Is sale enabled
    const [sale, setSale] = useState<boolean>(false);

    // Update supply
    useEffect(() => {
        const updateSupply = async () => {
            try {
                setSupply(await props.address.totalSupply())
            } catch (e) {
                console.log(e);
            }
        }

        // Register listener
        web3.library!.on("block", () => {
            console.log("update supply");
            updateSupply().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");

        }
    })

    // Update max
    useEffect(() => {
        const updateMaxSupply = async () => {
            try {
                setMaxSupply(await props.address.maxSupply())
            } catch (e) {
                console.log(e);
            }
        }

        // Register listener
        web3.library!.on("block", () => {
            console.log("update max supply");
            updateMaxSupply().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    })

    // Update sale
    useEffect(() => {
        const updateSale = async () => {
            try {
                setSale(await props.address.sale())
                setSale(true)
            } catch (e) {
                console.log(e);
            }
        }
        web3.library!.on("block", () => {
            console.log("update sale status");
            updateSale().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    })

    return (
        <Col>
            <Container>
                {sale ?
                    <>
                        <Row>
                            <Col>
                                <ProgressBar
                                    className="progress-bar-minty"
                                    now={supply ? supply.toNumber() : 0}
                                    max={maxSupply ? maxSupply.toNumber() : 1000}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-2 sale-progress-words">
                                <h2>{supply ? supply.toString() : "..."} / {maxSupply ? maxSupply.toString() : "..."} sold</h2>
                            </Col>
                        </Row>
                    </>
                    :
                    <Row>
                        <Col className="mt-2 sale-progress-words">
                            <h3>The sale has not begun yet... Stay tuned.</h3>
                        </Col>
                    </Row>}
            </Container>

        </Col>

    )
}