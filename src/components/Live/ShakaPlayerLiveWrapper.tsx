import {ShakaReactWrapperProps} from "types";
import {useRef} from "react";
import * as Hooks from '../../lib'

const ShakaPlayerLiveWrapper = (props: ShakaReactWrapperProps) => {

    const videoReference = useRef<HTMLVideoElement>(null);
    const uiContainerReference = useRef<HTMLDivElement>(null);

    // * Initialize React hooks.
    const {player, ui} = Hooks.usePlayerHook(videoReference, uiContainerReference, props);
    Hooks.usePlayerListenerHook(player, props);
    Hooks.useUIListenerHook(ui, player, props);
    Hooks.useStatsHook(player, props);

    const {
        className,
        playersClassName,
        superConfiguration,
        configuration,
        uiConfiguration,
        name,
        onLoad,
        onPlay,
        onPause,
        onEnded,
        onBuffering,
        onStatsChanged,
        onPlayerError,
        ...newProps
    } = props;

    return (
        <div className="LivePlayer" ref={uiContainerReference}>
            <h3>Live</h3>
            <h5>{name}</h5>
            <video ref={videoReference} className={props.playersClassName} {...newProps}
            />
        </div>
    );
};
export default ShakaPlayerLiveWrapper