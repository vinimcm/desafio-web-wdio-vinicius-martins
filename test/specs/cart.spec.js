const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Funcionalidade de Carrinho', () => {

    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um item ao carrinho', async () => {
        await InventoryPage.addFirstItemToCart();
        await expect(InventoryPage.cartBadge).toHaveText('1');
    });

    it('Deve acessar o carrinho após adicionar item', async () => {
        await InventoryPage.openCart();
        const url = await browser.getUrl();
        const assert = require('assert');
        assert.ok(url.includes('cart.html'), `URL atual "${url}" não contém "cart.html"`);
    });
});