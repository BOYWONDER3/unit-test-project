const FileSystem = require('./FileSystem')
const Account  = require('./Account')


describe('#deposit', () => {
    test('it adds money to the account', async () => {
        
        // create an account with a name and balance
        const account = await createAccount('kyle', 0)
        // call the deposit method
        const amount = 10
        const spy = jest.spyOn(FileSystem, 'write').mockReturnValue(Promise.resolve())
        await account.deposit(amount)
        // check the balance of the account
        expect(account.balance).toBe(amount)
        // check the file is correct
        expect(spy).toBeCalledWith(account.filePath, amount)
    })
})


describe('#withdraw', () => {

})


async function createAccount (name, balance) {
    const spy = jest.spyOn(FileSystem, 'read').mockReturnValueOnce(Promise.resolve(balance))
    const account = await Account.find(name)

    return account 
}