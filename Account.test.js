const FileSystem = require('./FileSystem')

describe('#deposit', () => {
    test('it adds money to the account', () => {
        
        // create an account with a name and balance
        // call the deposit method
        // check the balance of the account
        // check the file is correct
        const spy = jest.spyOn(FileSystem, 'write').mockReturnValue(promise.resolve())
        expect(spy).toBeCalledWith(filePath, balance)
    })
})