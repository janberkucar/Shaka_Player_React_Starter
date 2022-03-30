import {ShakaReactWrapperProps} from "../../types";
import {useRef} from "react";
import * as Hooks from '../../lib'

const ShakaPlayerHLSWrapper = (props: ShakaReactWrapperProps) => {

    // * Initialize reference values with null.
    const videoReference = useRef<HTMLVideoElement>(null);
    const uiContainerReference = useRef<HTMLDivElement>(null);

    // * Initialize React hooks.
    const {player, ui} = Hooks.usePlayerHook(videoReference, uiContainerReference, props);

    return (
        <div className="HLSPlayer">
            <h3>HLS</h3>
        </div>
    );
}
export default ShakaPlayerHLSWrapper