const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Funcionalidade de Login', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('Deve logar com sucesso com credenciais válidas', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(await InventoryPage.title).toBeDisplayed();
    });

    it('Deve exibir erro ao tentar logar com senha incorreta', async () => {
        await LoginPage.login('standard_user', 'senha_errada');
        await expect(await LoginPage.errorMessage).toBeDisplayed();
    });
});
