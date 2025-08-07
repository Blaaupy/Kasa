import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/logements.json";

export function useFindLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const found = data.find((item) => item.id === id);

    if (!found) {
      navigate("/404", { replace: true }); // Redirige vers la page 404
    } else {
      setLogement(found);
    }
  }, [id, navigate]);

  return logement;
}
