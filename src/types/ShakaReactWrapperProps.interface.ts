import extern from "shaka-player"
import {PlayerReferences} from "./PlayerReferences.interface";
import {Stats} from "./States.interface";
import {SuperConfiguration} from "./SuperConfiguration.enum";

export interface ShakaReactWrapperProps {
    sourceString?: string;
    configuration?: extern.PlayerConfiguration | any;
    uiConfiguration?: extern.UIConfiguration | any;
    superConfiguration?: SuperConfiguration | undefined;
    autoPlay?: boolean | undefined;
    playsInline?: boolean | undefined;
    children?: any;
    className?: string;
    playersClassName?: string;
    license?: string;
    manifest?: string;
    subtitle?: string;
    name?: string;

    onLoad?(data: PlayerReferences): void | undefined;

    onPlay?(): void | undefined;

    onPause?(): void | undefined;

    onEnded?(): void | undefined;

    onStatsChanged?(stats: Stats): void | undefined;

    onPlayerError?(event: extern.Error): void | undefined;

    onBuffering?(event: boolean): void | undefined;
}