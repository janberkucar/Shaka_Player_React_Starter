import shaka from "shaka-player";
import {MediaTimeStats} from "./MediaTimeStats.interface";

export interface Stats extends MediaTimeStats, shaka.extern.Stats {
}
