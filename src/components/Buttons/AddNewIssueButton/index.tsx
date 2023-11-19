import Link from "next/link";
import { PlusIcon } from "@/assets/Icons";
import { ButtonNewCalled } from "./styles";

interface AddNewIssueButtonStyleProps {
	iconColor?: string;
	iconSize?: number;
	backgroundColor?: string;
	borderRadius?: number;
	hasShadow?: boolean;
}

export interface AddNewIssueButtonProps {
	size?: number;
	icon?: string;
	styles?: AddNewIssueButtonStyleProps;
	onClick?: () => void;
}

export const AddNewIssueButton = ({
	size,
	// icon,
	styles,
	onClick,
}: AddNewIssueButtonProps) => {
	return (
		<ButtonNewCalled
			styles={styles}
			size={size}
			onClick={onClick}>
			<PlusIcon />
		</ButtonNewCalled>
	);
};
