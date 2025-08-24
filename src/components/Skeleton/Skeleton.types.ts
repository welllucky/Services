import { ReactNode } from "react";

export type SkeletonType =
  | "text"
  | "circle"
  | "avatar"
  | "card"
  | "rectangle"
  | "page"
  | "ticket";

interface SkeletonCommonProps {
  speed?: number;
  backgroundColor?: string;
  highlightColor?: string;
}

type SkeletonConditionalProps =
  | {
      type?: SkeletonType;
      width?: string;
      height?: string;
      radius?: never;
      children?: never;
      lines?: never;
      quantity?: never;
    }
  | {
      type?: "text";
      width?: string;
      height?: string;
      lines?: number;
      radius?: never;
      children?: never;
      quantity?: never;
    }
  | {
      type?: "circle";
      radius?: string;
      children?: ReactNode;
      width?: never;
      height?: never;
      lines?: never;
      quantity?: never;
    }
  | {
      type?: "avatar";
      radius?: string;
      width?: never;
      height?: never;
      lines?: never;
      children?: never;
      quantity?: never;
    }
  | {
      type?: "page";
      width?: string;
      height?: string;
      radius?: never;
      children?: never;
      lines?: never;
      quantity?: number;
    }
  | {
      type?: "ticket";
      width?: string;
      height?: string;
      radius?: never;
      children?: never;
      lines?: never;
      quantity?: never;
    };

export type SkeletonProps = SkeletonCommonProps & SkeletonConditionalProps;

export type SkeletonTypeProps = Omit<SkeletonProps, "type">;

export type SkeletonPageProps = Pick<
  SkeletonTypeProps,
  "backgroundColor" | "highlightColor" | "speed" | "width" | "height"
> & {
  quantity?: number;
};
