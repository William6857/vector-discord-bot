module.exports = {
	name: 'holidays',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "p2z6QkW.gif");
	},
};
