export const streamingConfig = {
    player: {
        manifest: {
            dash: {
                ignoreMinBufferTime: true,
            }
        },
        streaming: {
            lowLatencyMode: true,
            inaccurateManifestTolerance: 0,
            rebufferingGoal: 1,
            smallGapLimit: 1,
            jumpLargeGaps: true,
            durationBackoff: 0
        }
    },
    ui: {
        addSeekBar: false,
        controlPanelElements: ["play_pause", "time_and_duration", "mute", "fullscreen"],
    }
};