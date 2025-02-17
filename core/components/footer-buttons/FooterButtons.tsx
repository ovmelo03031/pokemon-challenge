import {Button} from "@/components/ui/button";
import {usePokemon} from "@/core/context/PokemonContext";

const FooterButtons = () => {
    const {
        page,
        setPage,
        totalPages
    } = usePokemon();

    const onPreviousPage = () => setPage(Math.max(1, page - 1));
    const onNextPage = () => setPage(Math.min(totalPages, page + 1));

    return <div className="flex justify-center items-center gap-4 mt-8">
     <Button
         variant="outline"
         onClick={onPreviousPage}
         disabled={page === 1}
     >
         Previous
     </Button>
     <span className="text-sm">
              Page {page} of {totalPages}
            </span>
     <Button
         variant="outline"
         onClick={onNextPage}
         disabled={page === totalPages}
     >
         Next
     </Button>
 </div>;
};

export default FooterButtons;