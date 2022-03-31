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
        {
            name: 'Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (HLS)',
            src: 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8',
        },
        {
            name: 'Tears of Steel (live, DASH, Server Side ads)',
            src: 'https://storage.googleapis.com/shaka-live-assets/player-source.mpd',
        }

    ];

    return (
        <div className="App h-100">
            <div className="d-flex flex-column align-items-center h-100">
                <h1 className="text-uppercase font-monospace my-5">Shaka player starter kit demo</h1>
                <div className="d-flex h-100 w-100 mb-5">
                    <ShakaPlayerDASHWrapper
                        license={license}
                        manifest={STREAMS[0].src.toString()}
                        name={STREAMS[0].name.toString()}
                        subtitle={subtitle}
                    />
                </div>
                <div className="d-flex h-100 w-100 my-5">
                    <ShakaPlayerHLSWrapper
                        license={license}
                        sourceString={STREAMS[1].src.toString()}
                        name={STREAMS[1].name.toString()}
                        subtitle={subtitle}
                    />
                </div>
                <div className="d-flex h-100 w-100 my-5">
                    <ShakaPlayerLiveWrapper
                        license={license}
                        sourceString={STREAMS[2].src.toString()}
                        name={STREAMS[2].name.toString()}
                        subtitle={subtitle}

                    />
                </div>
            </div>
        </div>
    );
}

export default App;
