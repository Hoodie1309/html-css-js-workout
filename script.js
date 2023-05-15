// console.log('Hello from Nerdbord!')

const box = document.querySelector('.box')

let i = 0

const changingColorBox = () => {
	const colors = ['red', 'blue', 'yellow', 'green']
	box.style.borderColor = colors[i]
	i = (i + 1) % colors.length
}

setInterval(changingColorBox, 4000)
