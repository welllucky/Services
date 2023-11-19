/* eslint-disable no-unused-vars */
import {
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
	createContext,
} from "react";

interface TypeCallContextProps {
	resumo: string;
	tipo: string;
	descricao: string;
	code: string;
	dataOcorrido: string;
	file: Array<File>;
	idChamado: string;
	changeTipo(value: string): void;
	changeResumo(value: string): void;
	changeDescricao(value: string): void;
	changeDataOcorrido(value: string): void;
	changeFile(value: Array<File>): void;
	changeCode(value: string): void;
}

interface TypeCallProviderProps {
	children: ReactNode;
}

export const TypeCallContext = createContext({} as TypeCallContextProps);

export const TypeCallProvider = ({ children }: TypeCallProviderProps) => {
	const [resumo, setResumo] = useState<string>("");
	const [tipo, setTipo] = useState<string>("");
	const [idChamado, setIdChamado] = useState<string>("");
	const [descricao, setDescricao] = useState<string>("");
	const [dataOcorrido, setDataOcorrido] = useState<string>("");
	const [file, setFile] = useState<Array<File>>([]);
	const [code, setCode] = useState<string>("");

	const changeTipo = useCallback((value: string) => {
		setTipo(value);
	}, []);

	const changeResumo = useCallback((value: string) => {
		setResumo(value);
	}, []);

	const changeDescricao = useCallback((value: string) => {
		setDescricao(value);
	}, []);

	const changeDataOcorrido = useCallback((value: string) => {
		setDataOcorrido(value);
	}, []);

	const changeIdChamado = useCallback((value: string) => {
		setIdChamado(value);
	}, []);

	const changeFile = useCallback((value: Array<File>) => {
		setFile(value);
	}, []);

	const changeCode = useCallback((value: string) => {
		setCode(value);
	}, []);

	const typeCallContextProviderValue = useMemo(() => {
		return {
			tipo,
			resumo,
			dataOcorrido,
			descricao,
			file,
			code,
			idChamado,
			changeResumo,
			changeDataOcorrido,
			changeDescricao,
			changeTipo,
			changeFile,
			changeCode,
			changeIdChamado,
		};
	}, [
		tipo,
		resumo,
		dataOcorrido,
		descricao,
		file,
		code,
		idChamado,
		changeResumo,
		changeDataOcorrido,
		changeDescricao,
		changeTipo,
		changeFile,
		changeCode,
		changeIdChamado,
	]);

	return (
		<TypeCallContext.Provider value={typeCallContextProviderValue}>
			{children}
		</TypeCallContext.Provider>
	);
};

export const useTypeCall = (): TypeCallContextProps => {
	const typeCallContext = useContext(TypeCallContext);

	if (!typeCallContext) {
		throw new Error("usetypeCall must be used within an typeCallProvider");
	}

	return typeCallContext;
};
