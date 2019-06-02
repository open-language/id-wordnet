const idWordnet = require('./index')

describe('Test if the package is usable', () => {
    test('Check version number', () => {
        expect(idWordnet.version).toBe("1.2")
    })
})