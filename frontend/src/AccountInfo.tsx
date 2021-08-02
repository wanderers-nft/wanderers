import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import "./AccountInfo.css";
import {useEffect, useState} from "react";
import {BigNumber} from "ethers";
import {formatEther} from "ethers/lib/utils";
import {Button} from "react-bootstrap";

export function AccountInfo() {
    const web3 = useWeb3React<Web3Provider>();
    const [nativeBalance, setNativeBalance] = useState<BigNumber | null >(null);

    useEffect(() => {
        web3.library!.on("block", () => {
            web3.library!.getBalance(web3.account!).then((r) => {
                setNativeBalance(r)
            })
        })

        return () => {
            web3.library!.removeAllListeners("block");
        }
    })

    const onClick = async () => {
        web3.deactivate();
    }

    return (
        <div className="account-info">
            <p>Connected address: {web3.account!}</p>
            <p>Balance: {
                (nativeBalance == null) ? "..." : parseFloat(formatEther(nativeBalance)).toFixed(5)
            } ETH</p>
            <Button className="btn-minty-smaller" onClick={onClick}>Disconnect</Button>
        </div>
    )
}