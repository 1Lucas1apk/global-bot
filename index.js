const { exec } = require('child_process')

exec('git add .', (err, stdout ) => console.log(err, stdout))
