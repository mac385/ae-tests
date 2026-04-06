export class AboutUsPage {

    constructor(page) {
        this.page = page;
        this.AboutUsPage = page.getByRole('link', {name:'About us'});
        //page.getByRole('button', { name: 'Place Order' });
    }

}