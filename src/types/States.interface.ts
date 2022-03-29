import extern from "shaka-player";
import {MediaTimeStats} from "./MediaTimeStats.interface";

export interface Stats extends MediaTimeStats, extern.Stats {
}
