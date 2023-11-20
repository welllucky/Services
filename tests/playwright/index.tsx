// Import styles, initialize component theme here.
// import '../src/common.css';
import { GlobalStyle } from "@/styles";
import { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

const App = (children: ReactElement) => {
	return (
		<>
			<GlobalStyle />
			<main>{children}</main>
		</>
	);
};

export default App;
