import {ShakaReactWrapperProps} from "../types";
import {useRef} from "react";

const ShakaReactWrapper = (props: ShakaReactWrapperProps) => {

    // * Initialize reference values with null.
    const videoReference = useRef<HTMLVideoElement>(null);
    const uiContainerReference = useRef<HTMLDivElement>(null);

    // * Initialize React hooks.
    // const { player, ui } Hooks.usePlayer(videoReference, uiContainerReference, props);

    return <div>test</div>;
}
export default ShakaReactWrapper