export interface AddNewIssueButtonStyleProps {
  iconColor?: string;
  iconSize?: number;
  $backgroundColor?: string;
  borderRadius?: number;
  hasShadow?: boolean;
}

export interface AddNewIssueButtonProps {
  size?: number;
  // icon?: string;
  $styles?: AddNewIssueButtonStyleProps;
  onClick: () => void;
}
