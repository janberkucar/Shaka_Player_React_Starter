import "./App.css";

import ShakaPlayerDASHWrapper from "components/VOD/ShakaPlayerDASHWrapper";
import ShakaPlayerHLSWrapper from "components/VOD/ShakaPlayerHLSWrapper";
import ShakaPlayerLiveWrapper from "./components/Live/ShakaPlayerLiveWrapper";


function App() {
    // const license = config.video.license;
    // const manifest = config.video.manifest;
    // const subtitle = config.video.subtitle;

    const license = "License from env";
    const manifest = "Manifest from env";
    const subtitle = "Subtitle from env";

    const STREAMS = [
        {
            name: 'Angel One MPEG-DASH',
            src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        },
    ];

    return (
        <div className="App h-100">
            <div className="d-flex flex-column align-items-center h-100 my-auto">
                <div className="d-flex">
                    <h1 className="text-uppercase font-monospace">Shaka player starter kit demo</h1>
                </div>
                <div className="d-flex h-100 w-100 mb-4">
                    <ShakaPlayerDASHWrapper
                        license={license}
                        manifest={STREAMS[0].src.toString()}
                        subtitle={subtitle}
                    />
                </div>
                <div className="d-flex h-100">
                    <ShakaPlayerHLSWrapper/>
                </div>
                <div className="d-flex h-100">
                    <ShakaPlayerLiveWrapper/>
                </div>
            </div>
        </div>
    );
}

export default App;
