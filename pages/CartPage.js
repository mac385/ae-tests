
export class CartPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

}