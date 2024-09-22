import { redirect } from "next/navigation";

const EntryPoint = () => {
	async function leadUser() {
		"use server";

		redirect("/home");
	}

	return leadUser();
};

export default EntryPoint;
