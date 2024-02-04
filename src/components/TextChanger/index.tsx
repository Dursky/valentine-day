import React, {useState} from "react"

export const TextChanger: React.FC = () => {
	const [buttonsState, setButtonStates] = useState({agree: 0, denny: 0, mainText: 0, image: 0})
	const [buttonSizes, setButtonSizes] = useState({
		agreeHeight: 50,
		agreeWidth: 100,
		dennyHeight: 50,
		dennyWidth: 100,
	})
	const [isEnd, setIsEnd] = useState(false)

	const mainTexts = [
		"Będziesz moją walentynką?",
		"Czyżby?",
		"Nie masz wyjścia bby...",
		"Klikaj dalej może ci się uda!",
		"Powodzenia, słuchaj, życzę bahhaha",
		"Widzę jak się starasz...",
		"Buziaki bahhahahaha",
		"Zaskoczona? To jeszcze nie koniec...",
		"Przygotuj się na więcej, to dopiero początek!",
		"Co tu się wyprawia? Magia czy co?",
		"Tak trzymaj, jesteś na dobrej drodze!",
		"Ciekawe co będzie dalej, hmm?",
		"Nie poddawaj się, to tylko kolejny krok.",
		"Zaraz zobaczysz, co mam dla Ciebie przygotowane!",
		"Uśmiechnij się, jesteś obserwowana bahahah",
	]

	const agreeButton = [
		"Tak",
		"Oczywiście",
		"Jak najbardziej!",
		"Nie ma innej opcji",
		"Pewnie!",
		"Nie ma chuja",
		"NO KLIKAJ TAK",
		"Zdecydowanie tak",
		"Bez wątpienia",
		"Zgadzam się",
		"Absolutnie",
		"Tylko spróbuj powstrzymać mnie ahhaha",
		"Jasne, że tak",
		"Z całego serca",
		"Za wszelką cenę",
	]

	const dennyButton = [
		"Nie",
		"Nie dasz rady",
		"Taka jesteś?",
		"I tak cię widzę",
		"Próbuj dalej, słuchaj!",
		"Nie przekonasz mnie",
		"NO JAK TO NIE",
		"Bez szans",
		"Nie tym razem",
		"Oj, nie nie",
		"Marzenia ściętej głowy",
		"Zapomnij",
		"Nie i jeszcze raz nie",
		"To nie dla mnie",
		"Może kiedy indziej",
	]

	const images = [
		"images/first.webp",
		"images/second.webp",
		"images/third.webp",
		"images/fourth.webp",
		"images/fifth.webp",
		"images/sixth.webp",
		"images/seventh.webp",
		"images/eight.webp",
		"images/nineth.webp",
		"images/tenth.webp",
		"images/eleventh.webp",
		"images/twelvth.webp",
		"images/13.webp",
		"images/14.webp",
	]

	const onClickHandler = (type: "agree" | "denny") => {
		const randomHeight = Math.floor(Math.random() * (300 - 50 + 1)) + 30
		const randomWidth = Math.floor(Math.random() * (500 - 150 + 1)) + 100

		setButtonSizes((state) => ({
			...state,
			agreeHeight: type === "agree" ? randomHeight : state.agreeHeight,
			agreeWidth: type === "agree" ? randomWidth : state.agreeWidth,
			dennyHeight: type === "denny" ? randomHeight : state.dennyHeight,
			dennyWidth: type === "denny" ? randomWidth : state.dennyWidth,
		}))

		setButtonStates((state) => ({
			agree: state.agree > 13 ? 0 : state.agree + 1,
			denny: state.denny > 13 ? 0 : state.denny + 1,
			mainText: state.mainText > 13 ? 0 : state.mainText + 1,
			image: state.image > images.length - 2 ? 0 : state.image + 1,
		}))

		if (buttonsState.mainText === 13) setIsEnd(true)
	}

	const buttonStyles = {
		padding: 10,
		backgroundColor: "#F6BAD1",
		borderStyle: "none",
		borderRadius: 12,
		color: "white",
		marginLeft: 10,
		marginRightL: 10,
		fontSize: 18,
	}

	return (
		<div>
			{isEnd ? (
				<>
					<p style={{fontSize: 70}}>DZIEKI ZA UWAGE ZUZKA</p>
					<p style={{fontSize: 70}}>BESOS</p>
				</>
			) : (
				<>
					<img src={images[buttonsState.image]} style={{height: 400, width: 400, marginTop: 50}} />
					<p>{mainTexts[buttonsState.mainText]}</p>
					<div style={{display: "flex", justifyContent: "center"}}>
						<button
							onClick={() => onClickHandler("agree")}
							style={{
								...buttonStyles,
								height: buttonSizes.agreeHeight,
								width: buttonSizes.agreeWidth,
							}}>
							{agreeButton[buttonsState.agree]}
						</button>
						<button
							onClick={() => onClickHandler("denny")}
							style={{
								...buttonStyles,
								height: buttonSizes.dennyHeight,
								width: buttonSizes.dennyWidth,
							}}>
							{dennyButton[buttonsState.denny]}
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default TextChanger
