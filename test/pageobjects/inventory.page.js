const { $ } = require('@wdio/globals')

class InventoryPage {
    get title() { return $('.title'); }
    get firstAddToCartButton() { return $('button.btn_inventory'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get cartBadge() { return $('.shopping_cart_badge'); }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}

module.exports = new InventoryPage();