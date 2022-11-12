/* 
┌──────────────────────────┐
│ A simple JS CLI project! │
└──────────────────────────┘
*/

String.prototype.printableCharLength = function() {
	return (this.replace(/(\033|\x1b|\001b)\[(\d+|;)+m/g, "")).length
}

let range = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

let drawBox = (data = ["Please input something!", "Never gonna give you up!"], config = {
	building: {
		up: "─",
		left: "│",
		down: "─",
		right: "│",
		corners: ["┌", "┐", "└", "┘"]
	},
	pad: 2
}) => {

	let building = config.building

	let extraPad = config.pad ? config.pad : 0

	let out = ""

	if (typeof data !== "string") {
		let sorted = data.map(x => x)
		let size = sorted.sort((f, s) => s.printableCharLength() - f.printableCharLength())[0].printableCharLength()
		
		console.log(building.corners[0] + building.up.repeat(size + config.pad + extraPad) + building.corners[1])
		
		data.forEach(line => {
			console.log(building.left + " ".repeat(config.pad) + line.padEnd(size + config.pad) + building.right)
		})
		
		console.log(building.corners[2] + building.down.repeat(size + config.pad + extraPad) + building.corners[3])
	} else {
		let array = data.split("\n")
		let sorted = array.map(x => x)

		let size = sorted.sort((f, s) => s.printableCharLength() - f.printableCharLength())[0].printableCharLength()
		
		console.log(building.corners[0] + building.up.repeat(size + config.pad + extraPad) + building.corners[1])
		
		array.forEach(line => {
			console.log(building.left + " ".repeat(config.pad) + line.padEnd(size + config.pad) + building.right)
		})
		
		console.log(building.corners[2] + building.down.repeat(size + config.pad + extraPad) + building.corners[3])
	}

	return out

}