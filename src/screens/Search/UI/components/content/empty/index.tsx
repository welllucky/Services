import { NoContent } from "@/components";

interface EmptyContentProps {
  isEmpty: boolean | undefined;
}

export const EmptyContent = ({ isEmpty }: EmptyContentProps) => {
  if (isEmpty) {
    return (
      <NoContent
        alt="caixa vazia"
        title="Procure por chamados e solicitações"
      />
    );
  }

  return null;
};
