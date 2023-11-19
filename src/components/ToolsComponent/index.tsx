import { useEffect, useState } from "react";
import { useTypeCall } from "../../utils/contexts";
import {
	Attach,
	BorderBottom,
	Camera,
	ContianerGeneralToolsComponent,
	Image,
	ToolsComponentContianer,
	Video,
	Attach,
	BorderBottom,
	Camera,
	ContianerGeneralToolsComponent,
	Image,
	ToolsComponentContianer,
	Video,
} from "./styles";
import anexar from "./svg/Anexar.svg";
import camera from "./svg/Camera.svg";
import imagem from "./svg/Imagem.svg";
import video from "./svg/Video.svg";

interface TypesToolsCompoent {
	// eslint-disable-next-line no-unused-vars
	postImage: (image: Array<File>) => void;
}

export const ToolsComponent = ({ postImage }: TypesToolsCompoent) => {
	const { changeFile } = useTypeCall();
	const [image, setImageUrl] = useState<Array<File>>([]);

	useEffect(() => {
		postImage(image);
		changeFile(image);
	}, [postImage, image, changeFile]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			setImageUrl((state) => [...state, selectedFile]);
		}
	};

	const handleCameraButtonClick = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: true,
			});
			const video = document.createElement("video");
			video.srcObject = stream;
			video.play().catch((err) => console.log(err));

			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");

			video.addEventListener("loadedmetadata", () => {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
			});
			video.addEventListener("loadedmetadata", () => {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
			});

			const takePicture = () => {
				if (context) {
					context.drawImage(video, 0, 0, canvas.width, canvas.height);
					const imageData = canvas.toDataURL("image/png") as unknown as File;
					postImage([imageData]);
					setImageUrl((state) => [...state, imageData]);
					stream.getTracks().forEach((track) => track.stop());
				}
			};

			const takePictureButton = document.createElement("button");
			takePictureButton.textContent = "Take picture";
			takePictureButton.addEventListener("click", takePicture);

			const cancelButton = document.createElement("button");
			cancelButton.textContent = "Cancel";
			cancelButton.addEventListener("click", () => {
				stream.getTracks().forEach((track) => track.stop());
			});
			const cancelButton = document.createElement("button");
			cancelButton.textContent = "Cancel";
			cancelButton.addEventListener("click", () => {
				stream.getTracks().forEach((track) => track.stop());
			});

			const cameraContainer = document.createElement("div");
			cameraContainer.appendChild(video);
			cameraContainer.appendChild(takePictureButton);
			cameraContainer.appendChild(cancelButton);
			const cameraContainer = document.createElement("div");
			cameraContainer.appendChild(video);
			cameraContainer.appendChild(takePictureButton);
			cameraContainer.appendChild(cancelButton);

			const cameraOverlay = document.createElement("div");
			cameraOverlay.style.position = "fixed";
			cameraOverlay.style.top = "0";
			cameraOverlay.style.left = "0";
			cameraOverlay.style.width = "100%";
			cameraOverlay.style.height = "100%";
			cameraOverlay.style.$backgroundColor = "rgba(0, 0, 0, 0.5)";
			cameraOverlay.appendChild(cameraContainer);
			const cameraOverlay = document.createElement("div");
			cameraOverlay.style.position = "fixed";
			cameraOverlay.style.top = "0";
			cameraOverlay.style.left = "0";
			cameraOverlay.style.width = "100%";
			cameraOverlay.style.height = "100%";
			cameraOverlay.style.$backgroundColor = "rgba(0, 0, 0, 0.5)";
			cameraOverlay.appendChild(cameraContainer);

			document.body.appendChild(cameraOverlay);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ContianerGeneralToolsComponent>
			<ToolsComponentContianer>
				<Attach htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
						onChange={handleFileChange}
					/>
					<img
						src={anexar}
						alt="Botão anexar"
					/>
				</Attach>
				<Video htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
						onChange={handleCameraButtonClick}
					/>
					<img
						src={video}
						alt="Botão Video"
					/>
				</Video>
				<Image htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
						onChange={handleFileChange}
					/>
					<img
						src={imagem}
						alt="Botão"
					/>
				</Image>
				<Camera htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
						onChange={handleCameraButtonClick}
					/>
					<img
						src={camera}
						alt="Botão Camera"
					/>
				</Camera>
			</ToolsComponentContianer>

			<BorderBottom />
		</ContianerGeneralToolsComponent>
	);
			<BorderBottom />
		</ContianerGeneralToolsComponent>
	);
};
