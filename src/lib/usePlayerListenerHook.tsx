import { useEffect } from "react";
import shaka from "shaka-player";
import {ShakaReactWrapperProps} from "../types";

const usePlayerListenerHook = (player: shaka.Player, props?: ShakaReactWrapperProps) => {
    useEffect(()=> {
        const _onPlayerErrorEvent = (error: shaka.extern.Error | any) => {
            props.onPlayerError && props.onPlayerError(error)  
        };
        const _onBufferingEvent = (bufferStatus: any) => {
            const booleanOfBuffering: boolean = bufferStatus.buffering;
            props.onBuffering && props.onBuffering(booleanOfBuffering);
        };
        if (player) {
            player.addEventListener("error", _onPlayerErrorEvent);
            player.addEventListener("buffering", _onBufferingEvent);
        }
    }, [player]);
}
export default usePlayerListenerHook;