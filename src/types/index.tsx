import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { ReactNode } from "react";

type IssueStatus = "inProgress" | "notStarted" | "closed" | "blocked";

type InfoUnityProps = {
  id: string;
  description: string;
  icon?: string;
};

type InfoDisplayProps = {
  id: string;
  nome: string;
  date: string;
  $status: string;
  isUpdated?: boolean;
  color?: string;
  $borderColor?: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

interface ITicket {
  id: string;
  resume: string;
  description: string;
  date: string;
  historic?: InfoUnityProps[];
  priority: "baixa" | "média" | "alta";
  type: string;
  status: IssueStatus;
  createdAt?: Date;
  updatedAt?: Date;
  closedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  closedBy?: string;
  unity: string;
  sector: string;
}

type IssueDto = {
  idChamado: number;
  nome: string;
  dataRelato: string;
  descricao: string;
  prioridade: string;
  horarioAbertura: string;
  horarioUltimaAtualizacao: string;
  $status: string;
  tempoDecorrido: string;
  empregado_Matricula: number;
  tipo: string;
};

type IconProps = {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  color?: string;
};

type OptionMenuStyleProps = {
  $isSelected?: boolean;
  $backgroundColor?: string;
  $highlightTextColor?: string;
};

type OptionMenuProps = {
  name: string;
  path: string;
  alt: string;
  icon: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  $isSelected?: boolean;
  color?: string;
  $highlightTextColor?: string;
};

type IconButtonProps = {
  path?: string;
  alt?: string;
  icon: string | StaticImport;
  color?: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onHover?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type NoContentProps = {
  title?: string;
  icon?: string | ReactNode;
  alt?: string;
  color?: string;
  fontSize?: string;
};

type TextTheme = {
  theme?: string;
  title: string;
  text: string;
};

export type * from "./DataTag";
export type * from "./Themes";

export type {
  IconButtonProps,
  IconProps,
  InfoDisplayProps,
  InfoUnityProps,
  IssueDto,
  IssueStatus,
  ITicket,
  NoContentProps,
  OptionMenuProps,
  OptionMenuStyleProps,
  TextTheme,
};
