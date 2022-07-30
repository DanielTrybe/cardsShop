import { CardDetailsTemplate } from "templates";
import { useParams } from "react-router-dom";
import CardDetailsProvider from "services/context/CardDetails";

function CardDetails() {
  const { id } = useParams();
  if (!id) {
    return (
      <>
        <h1>preciso de um id para buscar a carta</h1>
      </>
    );
  }

  return (
    <CardDetailsProvider>
      <CardDetailsTemplate cardId={id} />;
    </CardDetailsProvider>
  );
}

export default CardDetails;
