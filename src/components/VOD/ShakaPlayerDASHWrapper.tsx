import React, {useEffect, useRef, useState} from "react";
import shaka from "shaka-player";

// * Drm Interface.
export enum DrmType {
    widevine = "widevine",
    playready = "playready",
}

// * Player Interface.
export type PlayerProps = {
    manifest: string;
    license: string;
    subtitle: string;
    type?: DrmType;
};

// * Global player variable.
let player: any;

function usePlayerState(videoRef: any) {
    const [playerState, setPlayerState] = useState({
        playing: false,
        currentTime: 0,
    });

    useEffect(() => {
        // console.log("player");
    }, [videoRef]);

    async function configurePlayer(manifest: any, license: any, subtitle: any) {
        console.log("initialize player");
        player = new shaka.Player(videoRef.current);
        if (videoRef.current !== null) {
            // player.addEventListener('error', onErrorEvent)
            player.configure({
                drm: {
                    servers: {
                        "com.widevine.alpha": license,
                    },
                    advanced: {
                        "com.widevine.alpha": {
                            videoRobustness: "SW_SECURE_CRYPTO",
                            audioRobustness: "SW_SECURE_CRYPTO",
                        },
                    },
                },
                preferredTextLanguage: "pt-br",
            });

            await player.load(manifest);

            console.log("loaded video");
            console.log(subtitle);
            await addSubtitleToVideo(
                subtitle,
                "pt-br",
                "subtitle",
                "text/vtt",
                "",
                "Português"
            );
            console.log("getConfiguration..:", player.getConfiguration());
            console.log("getTextTracks..:", player.getTextTracks());

            console.log("player..:", player);
        }
    }

    //Add Text Track
    const addSubtitleToVideo = async (
        subtitle: any,
        language: string,
        kind = "subtitle",
        mine = "text/vtt",
        codec = "",
        label: string
    ) => {
        console.log("addSubtitleToVideo...", subtitle);
        await player.addTextTrack(subtitle, language, kind, mine, codec, label);
    };

    // Add subtitle
    const findTextTrack = async (language: any) => {
        const track: any = await player.getTextTracks().filter((t: any) => {
            return t.language === language;
        });

        console.log("track found..:", track);
        addSubtitle(track);
    };

    const addSubtitle = (track: any) => {
        player.selectTextTrack(track);
        player.setTextTrackVisibility(true);
        console.log("Legenda adicionada!");
    };

    useEffect(() => {
        console.log("playerState..:", playerState.playing);
        playerState.playing ? videoRef.current.play() : videoRef.current.pause();
    }, [playerState.playing]);

    function togglePlay() {
        console.log("toggle play called", videoRef);
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,
        });
    }

    function handleTimeUpdate() {
        setPlayerState({
            ...playerState,
            currentTime: videoRef.current.currentTime,
        });
    }


    function handleChangeVideoCurrentTimeManualy(event: any) {
        console.log(event.target.value);
        setPlayerState({
            ...playerState,
            currentTime: event.target.value,
        });
        videoRef.current.currentTime = event.target.value;
    }

    return {
        playerState,
        configurePlayer,
        findTextTrack,
        togglePlay,
        handleTimeUpdate,
        handleChangeVideoCurrentTimeManualy,
    };
}

const ShakaPlayerDASHWrapper = ({manifest, license, subtitle}: PlayerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // * States
    const {
        playerState,
        configurePlayer,
        findTextTrack,
        togglePlay,
        handleTimeUpdate,
        handleChangeVideoCurrentTimeManualy,
    } = usePlayerState(videoRef);

    useEffect(() => {
        configurePlayer(manifest, license, subtitle);
    }, []);

    return (
        <div className="DASHPlayer">
            <h3>DASH</h3>
            <video ref={videoRef} width="320" onTimeUpdate={handleTimeUpdate} controls={true}
                   preload="none"
            />
        </div>
    );
};

export default ShakaPlayerDASHWrapper;
