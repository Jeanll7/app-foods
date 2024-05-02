import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Buscar restaurantes"
        className="border-0 outline-neutral-200 focus:outline-none"
      />
      <Button size="icon" className="w-12">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
