import { Thumbnail } from "../Thumbnail";

export function SearchResult({ title, id, imgUrl }) {

  function onAddClick() {
    console.log("Add clicked!");
  }

  return <article className="search-result">
    <Thumbnail url={imgUrl}/>
    <span className="fs14">{title}</span>
    <div className="button-wrapper flex row justify-end">
      <button className="flex row align-center justify-center" onClick={onAddClick}>Add</button>
    </div>
  </article>;
}
