import { useEffect } from 'react';
import shaka from 'shaka-player';
import {ShakaReactWrapperProps} from "../types";

const useUIListenerHook = (
    ui: shaka.ui.Overlay,
    player: shaka.Player,
    props?: ShakaReactWrapperProps
) => {
    useEffect(()=> {
        if(player && ui) {
            const mediaElement = player.getMediaElement();
            const _onPlayHandle = () => {
                props.onPlay && props.onPlay();
            }
            const _onPauseHandle = () => {
                props.onPause && props.onPause();
            }
            const _onEndHandle = () => {
                props.onEnded && props.onEnded();
            }
            mediaElement.addEventListener("play",_onPlayHandle);
            mediaElement.addEventListener("pause",_onPauseHandle);
            mediaElement.addEventListener("ended",_onEndHandle);
        }
    }, [player, ui])
}
export default useUIListenerHook;