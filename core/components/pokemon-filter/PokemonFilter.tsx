import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { usePokemon } from "@/core/context/PokemonContext";

const PokemonFilter = () => {
 const { searchQuery, setSearchQuery, selectedType, setSelectedType, types, setPage } = usePokemon();

 return <div className="flex flex-col items-center mb-8">
     <h1 className="text-4xl font-bold mb-8">Pokédex</h1>
     <div className="w-full max-w-xl flex items-center space-x-4">
         <div className="relative ">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
             <Input
                 type="text"
                 placeholder="Search Pokemon..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="pl-10"
             />
         </div>
         <Select
             value={selectedType}
             onValueChange={(value) => {
                 setSelectedType(value);
                 setPage(1);
             }}
         >
             <SelectTrigger className='m-0 w-[200px]'>
                 <SelectValue placeholder="Filter by type" />
             </SelectTrigger>
             <SelectContent>
                 <SelectItem value="all">All Types</SelectItem>
                 {types.map((type) => (
                     <SelectItem key={type.name} value={type.name}>
                         {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                     </SelectItem>
                 ))}
             </SelectContent>
         </Select>
     </div>
 </div>;
};

export default PokemonFilter;