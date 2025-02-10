import { ReactNode } from "react";

export type SkeletonType = "text" | "circle" | "avatar" | "card" | "rectangle";

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
    }
  | {
      type?: "text";
      width?: string;
      height?: string;
      lines?: number;
      radius?: never;
      children?: never;
    }
  | {
      type?: "circle";
      radius?: string;
      children?: ReactNode;
      width?: never;
      height?: never;
      lines?: never;
    }
  | {
      type?: "avatar";
      radius?: string;
      width?: never;
      height?: never;
      lines?: never;
      children?: never;
    };

export type SkeletonProps = SkeletonCommonProps & SkeletonConditionalProps;

export type SkeletonTypeProps = Omit<SkeletonProps, "type">;
