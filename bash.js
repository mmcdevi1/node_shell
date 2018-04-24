const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt >');

process.stdin.on('data', data => {
	let cmd = data.toString().trim();	

	if (cmd === 'pwd') {
		cmd = pwd();
	} else if (cmd === 'ls') {
		cmd = ls()
					.then(res => { return res.name })
					.catch(e => console.log(e));
	}

	process.stdout.write(`${cmd}`);
	process.stdout.write('\nprompt >')
})