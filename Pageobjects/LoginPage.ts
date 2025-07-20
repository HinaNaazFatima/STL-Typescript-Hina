export class LoginPage{
    page: any;
    username: any;
    password: any;
    signInButton: any;

    constructor(page)
    {
        this.page=page;
        this.username=page.locator('#userEmail');
        this.password= page.locator('#userPassword');
        this.signInButton=page.locator('.login-btn');

    }
    async goTo()
    {
        await this.page.goto('https://rahulshettyacademy.com/client');
        console.log(await this.page.title())
    }

    async validLogin(username,password ){

        await this.username.fill(username);
        await this.password.fill(password );
        await this.signInButton.click();
        //await this.page.waitForLoadState("networkidle");
        //await this.page.waitFor();
    }
}
//module.exports={LoginPage};
