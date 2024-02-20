import { CiSearch } from "react-icons/ci";

export function SearchField() {
  return (
    <form className="w-full flex items-center justify-center gap-2 md:max-w-[500px] bg-zinc-100 p-2 px-2 rounded-md">
      <input
        type="text"
        className="w-full h-full outline-none bg-zinc-100 text-zinc-900 border-0"
        autoComplete="off"
        placeholder="Pesquisar"
      />
      <button type="submit">
        <CiSearch className="font-bold text-2xl text-black" />
      </button>
    </form>
  );
}
