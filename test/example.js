drawBox(
`
     ⚠

A small and very useful CLI utility for drawing boxes and messages, 
as well as some more things just to make it better!

It still has no support for ansi colors,
which break the box borders, but i hope them will be fixed soon.

Highly customizable, allows for editing padding (left and right), upper/down padding
with newlines (which everyone knows). allows for editing borders, corners...

Sadly, it won't work with too small terminals, so have caution!
`, {
	building: {
		up: `\x1b[${rnd};1m⌢\x1b[0m`,
		left: `\x1b[${rnd};1m(\x1b[0m`,
		down: `\x1b[${rnd};1m⌣\x1b[0m`,
		right: `\x1b[${rnd};1m)\x1b[0m`,
		corners: [` `, ` `, ` `, `\x1b[${rnd};1mV\x1b[0m`]
	},
	pad: 1
	}
)