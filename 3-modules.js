// Common, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayPurr = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind')

sayPurr('big purr')
sayPurr(names.femi)
sayPurr(names.esther)
