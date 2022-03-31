import shaka from 'shaka-player';
import {MutableRefObject, useEffect, useState} from "react";
import {ShakaReactWrapperProps} from "../types";
import { SuperConfiguration } from 'types/SuperConfiguration.enum';
import { streamingConfig } from 'config';
import { vodConfig } from 'config/vodConfig';

const useUIHook = (
    player: shaka.Player,
    videoReference: MutableRefObject<HTMLVideoElement>,
    uiContainerReference: MutableRefObject<HTMLDivElement>,
    props?: ShakaReactWrapperProps
) => {
    const [ui, setUi] = useState<shaka.ui.Overlay | null>(null);
    useEffect(()=> {
        if(player && shaka.ui) {
            const uiObject = new shaka.ui.Overlay(
                player,
                uiContainerReference.current,
                videoReference.current
            );
            setUi(uiObject)
        };
        return () => {
            if (ui) ui.destroy();
        };
    },
    [player]);

    useEffect(()=> {
        if(ui && props.uiConfiguration) {
            ui.configure(props.uiConfiguration);
        } else if(props.superConfiguration) {
            switch (props.superConfiguration) {
                case SuperConfiguration.STREAMING:
                    ui.configure(streamingConfig);
                    break;
                case SuperConfiguration.VOD:
                    ui.configure(vodConfig);
                default:
                    ui.configure();
                    break;
            }
        }
    }, [ui, props])

    return ui;
}

export default useUIHook;