import { useEffect, useRef } from "react";
import shaka from "shaka-player";
import {ShakaReactWrapperProps} from "../types";

const useStatsHook = (player: shaka.Player, props?: ShakaReactWrapperProps) => {
    const timer = useRef<shaka.util.Timer | null>(null);
    useEffect(()=> {
        if(player) {
            const _sendStats = () => {
                const stats = player.getStats();
                const mediaCurrentTime = player.getMediaElement() && Math.floor(player.getMediaElement().currentTime);
                const mediaEndTime = Math.floor(player.seekRange().end);
                const additionalStats = { mediaCurrentTime, mediaEndTime};
                props.onStatsChanged &&
                    props.onStatsChanged({...stats, ...additionalStats});
            }
            const _timer = new shaka.util.Timer(() => {
                _sendStats();
            });
            _timer.tickEvery(1);
            timer.current = _timer;    
        };
        
        return () => {
            (player && timer) && timer.current.stop(); 
        };
    }, [player])
};

export default useStatsHook;