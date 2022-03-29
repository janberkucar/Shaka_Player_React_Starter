import Player from 'shaka-player';
import {MutableRefObject} from "react";
import {ShakaReactWrapperProps} from "../types";

const useUIHook = (
    player: Player,
    videoReference: MutableRefObject<HTMLVideoElement>,
    uiContainerReference: MutableRefObject<HTMLDivElement>,
    props?: ShakaReactWrapperProps
) => {

}

export default useUIHook;