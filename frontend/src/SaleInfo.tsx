import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {Wanderer} from "./typechain";
import {useEffect, useState} from "react";
import {BigNumber} from "ethers";
import {Col, Container, Form, ProgressBar, Row} from "react-bootstrap";
import "./SaleInfo.css";
import {formatEther} from "ethers/lib/utils";

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
    // Max per tx
    const [perTx, setPerTx] = useState<BigNumber | null>(null);
    // Cost per nft
    const [cost, setCost] = useState<BigNumber | null>(null);

    // Update supply
    useEffect(() => {
        const updateSupply = async () => {
            console.log("update supply", web3.library!.blockNumber);
            try {
                setSupply(await props.address.totalSupply())
            } catch (e) {
                console.log(e);
            }
        }

        // Register listener
        web3.library!.on("block", () => {
            updateSupply().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    }, [web3.library, web3.account, props.address])

    // Update max
    useEffect(() => {
        const updateMaxSupply = async () => {
            console.log("update max supply", web3.library!.blockNumber);
            try {
                setMaxSupply(await props.address.maxSupply())
            } catch (e) {
                console.log(e);
            }
        }

        // Register listener
        web3.library!.on("block", () => {
            updateMaxSupply().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    }, [web3.library, web3.account, props.address])

    // Update sale
    useEffect(() => {
        const updateSale = async () => {
            console.log("update sale status", web3.library!.blockNumber);
            try {
                setSale(await props.address.sale())
                setSale(true)
            } catch (e) {
                console.log(e);
            }
        }
        web3.library!.on("block", () => {
            updateSale().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    }, [web3.library, web3.account, props.address])

    // Update max per tx
    useEffect(() => {
        const updateMaxPer = async () => {
            console.log("update max per tx", web3.library!.blockNumber);
            try {
                setPerTx(await props.address.maxPerTx())
            } catch (e) {
                console.log(e);
            }
        }
        web3.library!.on("block", () => {
            updateMaxPer().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    }, [web3.library, web3.account, props.address])

    // Update max per tx
    useEffect(() => {
        const updateCost = async () => {
            console.log("update price per", web3.library!.blockNumber);
            try {
                setCost(await props.address.pricePer())
            } catch (e) {
                console.log(e);
            }
        }
        web3.library!.on("block", () => {
            updateCost().then(() => {
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    }, [web3.library, web3.account, props.address])

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
                        <Row>
                            <Col className="sale-progress-words my-2">
                                <h3>Cost: {cost ? parseFloat(formatEther(cost)).toFixed(2) : "..."} ETH each</h3>
                            </Col>
                        </Row>
                        <Form className="quantity">
                            <Row className="mt-4">
                                <Col className="sale-quantity align-content-center">
                                    <h3>Quantity:</h3>
                                </Col>
                                <Col>
                                    <Form.Group controlId="buyFormQuantity">
                                        <Form.Control
                                            type="number"
                                            placeholder="1"
                                            min="1"
                                            max={perTx ? perTx.toNumber() : 10}
                                            defaultValue="1"
                                            className="w-25"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="sale-progress-words">
                                    <p className="mt-2">(max {perTx ? perTx.toNumber() : 10} per tx)</p>
                                </Col>
                            </Row>
                        </Form>
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