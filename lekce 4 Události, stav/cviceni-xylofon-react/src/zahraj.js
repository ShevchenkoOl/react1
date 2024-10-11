export const zahraj = (ton) => {
	const zvuk = new Audio(`./assets/${ton}.mp3`)
	zvuk.play()
}
