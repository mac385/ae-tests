export class ContactPage {

    constructor (page) {
        this.page = page;
        this.sendMessageButton = page.getByRole('button', {name:'Send message'});

    }
}