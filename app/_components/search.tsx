import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-2 px-5 pt-6">
      <Input placeholder="Buscar restaurantes" className="border-0" />
      <Button size="icon" className="w-12">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
