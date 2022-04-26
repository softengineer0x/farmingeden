

// import WalletConnect from "../../components/wallet/walletconnect";
import { Component } from "react";
import Header from "../../components/header";
import ComponentIntroduction from "../../components/introduction";
import ComponentStake from '../../components/stake';
import ComponentDetail from '../../components/detail';
// import WalletConnect from "../../components/";


function Home() {
    return (
            <div>
                <header className="page-header">
                    <Header />
                    {/* <ComponentAction />
                    <ComponentAdvertise /> */}
                </header>
                <ComponentIntroduction />
                <ComponentStake />
                <ComponentDetail />
            </div>
    );
}

export default Home;
