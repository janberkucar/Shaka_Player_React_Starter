import Player from "shaka-player";
import ui from "shaka-player";

export interface PlayerReferences {
    player: Player;
    ui: ui.Overlay;
    videoElement: HTMLVideoElement;
}