import { TextTheme } from "@/types";
import { useCallback } from "react";

const textThemes: TextTheme[] = [
	{
		tema: "Viagem Espacial",
		titulo: "Sem Gravidade, Só no Celular 🚀",
		texto:
			"Parece que você está flutuando pelo espaço, mas para aterrissar nas respostas certas, só no celular! Acesse o FC Services e retorne à sua órbita de informações.",
	},
	{
		tema: "Tesouro Enterrado",
		titulo: "X marca o Celular! 🗺️",
		texto:
			"Você descobriu um tesouro, mas o mapa para respostas está no celular! Desenterrar as soluções requer uma busca digital. Acesse o FC Services e desvende os segredos!",
	},
	{
		tema: "Máquina do Tempo",
		titulo: "Viagem no Tempo Digital ⏰",
		texto:
			"Seu bilhete para o passado e futuro está no celular! Acesse o FC Services e faça uma jornada temporal para solucionar qualquer questão.",
	},
	{
		tema: "Circo Mágico",
		titulo: "Palhaçada Sem Celular? Não Dá! 🎪",
		texto:
			"Aqui é um circo de ajuda, mas só podemos lançar os truques mágicos pelo celular! Junte-se ao espetáculo no FC Services e surpreenda-se com as soluções.",
	},
	{
		tema: "Exploração Submarina",
		titulo: "A Profundezas Digitais 🌊",
		texto:
			"Você mergulhou fundo, mas o mapa do tesouro está no celular! Navegue pelo FC Services para encontrar as pérolas de conhecimento.",
	},
	{
		tema: "Selva Amazônica",
		titulo: "Selva Digital, Celular é a Chave! 🌿",
		texto:
			"Você está na selva de dúvidas, mas só o celular pode abrir caminho para as respostas! Explore o FC Services e desbrave a floresta digital.",
	},
	{
		tema: "Laboratório Científico",
		titulo: "Fórmulas no Celular, Não no Papel! 🧪",
		texto:
			"Você está no laboratório, mas as fórmulas mágicas estão no celular! Acesse o FC Services para soluções experimentais.",
	},
	{
		tema: "Espião Secreto",
		titulo: "Missão: Celular Essencial! 🕵️",
		texto:
			"Você é um espião, mas para decifrar os códigos, só no celular! Nossa base secreta é o FC Services, onde todas as respostas são reveladas.",
	},
	{
		tema: "Jardim Encantado",
		titulo: "Flores Digitais no Seu Celular! 🌸",
		texto:
			"Você entrou no jardim encantado, mas as flores digitais só desabrocham no celular! Acesse o FC Services e colha os conhecimentos perfumados.",
	},
	{
		tema: "Biblioteca Encantada",
		titulo: "Livros Mágicos, Só no Celular! 📚",
		texto:
			"Você entrou na biblioteca encantada, mas os livros mágicos só abrem no celular! Acesse o FC Services e descubra os encantos das respostas.",
	},
	{
		tema: "Festa na Praia",
		titulo: "Festa na Areia Digital! 🏖️",
		texto:
			"Você chegou à festa na praia, mas as ondas de respostas só batem no celular! Mergulhe no FC Services e aproveite a brisa digital.",
	},
	{
		tema: "Jogo de Tabuleiro",
		titulo: "No Tabuleiro Digital, Só com o Celular! 🎲",
		texto:
			"Você está no jogo, mas as jogadas vencedoras são só no celular! Avance para o FC Services e conquiste sua solução.",
	},
	{
		tema: "Fábrica de Chocolate",
		titulo: "Doces Digitais, Só no Celular! 🍫",
		texto:
			"Você está na fábrica de chocolate, mas as delícias digitais estão no celular! Acesse o FC Services e saboreie as respostas mais doces.",
	},
	{
		tema: "Estação Espacial",
		titulo: "Viagem Espacial, Só no Celular! 🚀",
		texto:
			"Você embarcou na estação espacial, mas as respostas cósmicas são só no celular! Navegue pelo FC Services e descubra os segredos do universo.",
	},
	{
		tema: "Teatro de Marionetes",
		titulo: "Marionetes Digitais, Só com o Celular! 🎭",
		texto:
			"Você está no teatro de marionetes, mas os cordões da solução só puxam no celular! Acesse o FC Services e dê vida às respostas digitais.",
	},
	{
		tema: "Cidade Subterrânea",
		titulo: "Segredo Subterrâneo, Só no Celular! 🕵️‍♂️",
		texto:
			"Você chegou à cidade subterrânea, mas os segredos só se revelam no celular! Explore o FC Services e descubra as profundezas digitais.",
	},
	{
		tema: "Parque de Aventuras",
		titulo: "Aventuras Digitais, Só com o Celular! 🌟",
		texto:
			"Você está no parque de aventuras, mas a verdadeira jornada começa no celular! Acesse o FC Services e embarque na experiência digital.",
	},
	{
		tema: "Festa do Pijama",
		titulo: "Pijama Digital, Só no Celular! 🌙",
		texto:
			"Você chegou à festa do pijama, mas a diversão digital só começa no celular! Acesse o FC Services e aproveite a noite de respostas.",
	},
	{
		tema: "Laboratório de Alquimia",
		titulo: "Alquimia Digital, Só com o Celular! 🔮",
		texto:
			"Você está no laboratório de alquimia, mas as poções mágicas só borbulham no celular! Acesse o FC Services e descubra os segredos da transmutação digital.",
	},
	{
		tema: "Vila dos Duendes",
		titulo: "Duendes Digitais, Só no Celular! 🧚‍♂️",
		texto:
			"Você chegou à vila dos duendes, mas as travessuras mágicas só acontecem no celular! Explore o FC Services e entre no mundo encantado digital.",
	},
	{
		tema: "Café dos Viajantes",
		titulo: "Café Digital, Só com o Celular! ☕",
		texto:
			"Você está no café dos viajantes, mas as histórias digitais só são servidas no celular! Acesse o FC Services e deguste as respostas aromáticas.",
	},
	{
		tema: "Oficina de Inventores",
		titulo: "Invenções Digitais, Só no Celular! 🛠️",
		texto:
			"Você está na oficina de inventores, mas as criações geniais só surgem no celular! Explore o FC Services e descubra as inovações digitais.",
	},
	{
		tema: "Baile de Máscaras",
		titulo: "Máscaras Digitais, Só com o Celular! 🎭",
		texto:
			"Você está no baile de máscaras, mas as identidades digitais só se revelam no celular! Acesse o FC Services e dance com as respostas surpreendentes.",
	},
];

export const getTextTheme = (): TextTheme => {
	const randomIndex = Math.floor(Math.random() * textThemes.length);
	return textThemes[randomIndex];
}
