
export class SignUpPage {


    constructor(page) {
        this.page = page;
        this.SignUpButton=page.getByRole('button', {name: 'Sign up'});
    }
}