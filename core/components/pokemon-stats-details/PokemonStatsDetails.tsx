import {PokemonStat} from "@/lib/types";
import {Progress} from "@/components/ui/progress";
import {STATS_ICONS} from "@/core/constants/pokemon.contants";

interface StatisticIconProps {
    stats: PokemonStat[];
}
const PokemonStatsDetails = ({ stats}: StatisticIconProps) => {
 return stats.map((stat) => (
         <div key={stat.stat.name} className="space-y-2">
             <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                     {STATS_ICONS[stat.stat.name]}
                     <span className="text-sm font-medium capitalize">
                      {stat.stat.name.replace("-", " ")}
                    </span>
                 </div>
                 <span className="text-sm text-muted-foreground">
                    {stat.base_stat}/255
                  </span>
             </div>
             <Progress
                 value={(stat.base_stat / 255) * 100}
                 className="h-2"
             />
         </div>
     ));
};

export default PokemonStatsDetails;