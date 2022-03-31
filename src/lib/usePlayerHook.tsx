import {MutableRefObject, useEffect, useState} from "react";
import {ShakaReactWrapperProps} from "../types";
import shaka from 'shaka-player'
import UseUIHook from "./useUIHook";
import {SuperConfiguration} from "../types/SuperConfiguration.enum";
import {streamingConfig} from "config/streamingConfig";

const usePlayerHook = (
    videoReference: MutableRefObject<HTMLVideoElement>,
    uiContainerReference: MutableRefObject<HTMLDivElement>,
    props?: ShakaReactWrapperProps
) => {
    const [player, setPlayer] = useState<shaka.Player | null>(null);
    const ui = UseUIHook(player, videoReference, uiContainerReference, props);

    useEffect(() => {
        shaka.polyfill.installAll();

        const mainPlayer = new shaka.Player(videoReference.current);
        setPlayer(mainPlayer);

        return () => {
            mainPlayer.destroy();
        };
    }, []);

    useEffect(() => {
        if (player && props.onLoad) {
            props.onLoad({
                player: player,
                ui: ui,
                videoElement: videoReference.current,
            });
        }
    }, [player]);

    useEffect(() => {
        if (player && props.configuration) {
            player.configure(props.configuration);
        } else if (player && props.superConfiguration) {
            switch (props.superConfiguration) {
                case SuperConfiguration.STREAMING:
                    player.configure(streamingConfig.player);
                    break;
                default:
                    player.configure({});
                    break;
            }
        }
    }, [player, props.configuration]);

    useEffect(() => {
        if (player && props.sourceString && shaka.Player.isBrowserSupported()) {
            const initLoad = async () => {
                try {
                    await player.load(props.sourceString);
                } catch (e) {
                    props.onPlayerError && props.onPlayerError(e);
                }
            };
            initLoad();
        }
    }, [player, props.sourceString]);

    return {player, ui};
}
export default usePlayerHook;