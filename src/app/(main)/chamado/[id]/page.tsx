import { IssuePage } from "@/screens/chamado";
import { Metadata } from "next";

// export async function generateStaticParams() {
// 	const posts = await fetch("https://.../posts").then((res) => res.json());

// 	return posts.map((post) => ({
// 		slug: post.slug,
// 	}));
// }

export const metadata: Metadata = {
	title: { default: `Chamado`, template: "%s | Services" },
};

export default function Issue() {
	return (
		<>
			<IssuePage />
		</>
	);
}
