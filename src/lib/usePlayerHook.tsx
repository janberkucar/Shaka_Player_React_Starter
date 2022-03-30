import {MutableRefObject, useState} from "react";
import {ShakaReactWrapperProps} from "../types";
import Player from 'shaka-player'
import UseUIHook from "./useUIHook";

const usePlayerHook = (
    videoReference: MutableRefObject<HTMLVideoElement>,
    uiContainerReference: MutableRefObject<HTMLDivElement>,
    props?: ShakaReactWrapperProps
) => {
    const [player, setPlayer] = useState<Player | null>(null);
    const ui = UseUIHook(player, videoReference, uiContainerReference, props);
    
    // React.useEffect(() => {
    //     ShakaPolyfill.installAll();
    //
    //     const mainPlayer = new ShakaPlayer(videoRef.current);
    //     setPlayer(mainPlayer);
    //
    //     return () => {
    //         mainPlayer.destroy();
    //     };
    // }, []);
    //
    // React.useEffect(() => {
    //     if (player && props.onLoad) {
    //         props.onLoad({
    //             player: player,
    //             ui: ui,
    //             videoElement: videoRef.current,
    //         });
    //     }
    // }, [player]);
    //
    // React.useEffect(() => {
    //     if (player && props.config) {
    //         player.configure(props.config);
    //     } else if (player && props.superConfig) {
    //         switch (props.superConfig) {
    //             case SuperConfig.STREAMING:
    //                 player.configure(Configs.streamingConfig.player);
    //                 break;
    //             default:
    //                 player.configure({});
    //                 break;
    //         }
    //     }
    // }, [player, props.config]);
    //
    // React.useEffect(() => {
    //     if (player && props.src && ShakaPlayer.isBrowserSupported()) {
    //         const initLoad = async () => {
    //             try {
    //                 await player.load(props.src);
    //             } catch (e) {
    //                 props.onPlayerError && props.onPlayerError(e);
    //             }
    //         };
    //         initLoad();
    //     }
    // }, [player, props.src]);

    return {player, ui};
}
export default usePlayerHook;