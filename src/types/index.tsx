import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import React from "react";

type IssueMobileProps = {
	id: string;
	nome: string;
	date: string;
	$status: string;
	isUpdated?: boolean;
	color?: string;
	borderColor?: string;
	isClicked?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

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
	width?: string;
	height?: string;
	color?: string;
};

type OptionMenuStyleProps = {
	$isClicked?: boolean;
};

type OptionMenuProps = {
	name: string;
	path: string;
	alt: string;
	iconUnselect: StaticImageData;
	iconSelect: StaticImageData;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	$isSelected?: boolean;
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

type BoxEmptyProps = {
	title?: string;
	icon?: string;
	alt?: string;
	color?: string;
	fontSize?: string;
};

type TextTheme = {
	tema?: string;
	titulo: string;
	texto: string;
};

export type * from "./Themes";

export type {
	IssueMobileProps,
	IconProps,
	OptionMenuStyleProps,
	OptionMenuProps,
	IconButtonProps,
	BoxEmptyProps,
	IssueDto,
	TextTheme,
};
