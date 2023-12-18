enum Size {
	SMALL, MEDIUM, LARGE
}
type ButtonType = {
	text: string
	onClick(): void
	size: Size
}

export const Button = ({ text, onClick}: ButtonType) => {

	return <button onClick={onClick}>{text}</button>
}