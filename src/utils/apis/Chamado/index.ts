/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { IOpenTicketForm } from "@/app/(app)/(form)/template";
import { InfoUnityProps } from "@/components/InformationHistory/InfoUnity";
import { httpClient } from "@/utils";

interface IChamado {
  id: string;
  resume: string;
  description: string;
  date: string;
  historic: InfoUnityProps[];
  priority: string;
  inProgress: boolean;
  hasEndend: boolean;
}

export class ChamadoAPI {
  base_url: string | undefined;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_APIS_BASE_URL;
  }

  getChamado = (id: string) => {
    const { data, error, isLoading } = httpClient<IChamado>(
      `${this.base_url}chamado/${id}`,
    );
    return { data, error, isLoading };
  };

  getChamados = () => {
    const { data, error, isLoading } = httpClient<IChamado[]>(
      `${this.base_url}chamado`,
    );
    return { data, error, isLoading };
  };

  postChamado = (issueData: IOpenTicketForm) => {
    const { error, isLoading } = httpClient(
      `${this.base_url}chamado?issue_id`,
      "POST",
    );
    return { error, isLoading };
  };
}
