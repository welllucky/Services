import { NoContent } from "@/components";

interface NoResultsProps {
  showNoResults: boolean;
}

export const NoResults = ({ showNoResults }: NoResultsProps) => {
  if (showNoResults) {
    return (
      <NoContent
        alt="Sem resultados"
        title="Nenhum chamado encontrado"
      />
    );
  }

  return null;
};
