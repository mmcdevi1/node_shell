const fs = require('fs');

module.exports = function () {
	return new Promise ((resolve, reject) => {
		// return fs.readdir('./', 'utf8', (err, files) => {
		// 	if (err) {
		// 		reject(err)
		// 	} else {
		// 		resolve(files)
		// 		// process.stdout.write('\n\nprompt > ')
		// 	}
		// })

		resolve({name: 'mike'})
	})
}