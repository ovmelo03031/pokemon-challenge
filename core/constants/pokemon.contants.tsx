import {PockemonStatType} from "@/lib/types";
import {Footprints, Heart, Shield, Swords, Target, Zap} from "lucide-react";

export const STATS_ICONS: Record<PockemonStatType, React.JSX.Element> = {
    hp: <Heart className="w-5 h-5" />,
    attack: <Swords className="w-5 h-5" />,
    defense: <Shield className="w-5 h-5" />,
    "special-attack": <Zap className="w-5 h-5" />,
    "special-defense": <Target className="w-5 h-5" />,
    speed: <Footprints className="w-5 h-5" />,
};