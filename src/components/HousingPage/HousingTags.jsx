import "./HousingTags.scss";
import { useFindLogement } from "./FindId";

export default function HousingTags() {
  const logement = useFindLogement();
  if (!logement || !logement.tags) {
    return null;
  }

  return (
    <div className="tags">{generateTags(logement.tags)}</div>
  );
}

function generateTags(tags) {
  return (
    <>
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </>
  );
}
