import "./App.css";
import ShakaPlayerWrapper from "./components/ShakaPlayerWrapper";

function App() {
  // const license = config.video.license;
  // const manifest = config.video.manifest;
  // const subtitle = config.video.subtitle;

  const license = "License from env";
  const manifest = "Manifest from env";
  const subtitle = "Subtitle from env";

  return (
    <div className="App h-100">
      <div className="d-flex flex-column align-items-center h-100 my-auto">
        <div className="d-flex">
          <h1>Shaka player starter kit demo</h1>
        </div>
        <div className="d-flex h-100">
          <ShakaPlayerWrapper
            license={license}
            manifest={manifest}
            subtitle={subtitle}
          ></ShakaPlayerWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
