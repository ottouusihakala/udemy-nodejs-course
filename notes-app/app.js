const fs = require('fs')
//fs.writeFileSync('notes.txt', 'Another test of fs')

fs.appendFileSync('notes.txt', 'Appended text')
