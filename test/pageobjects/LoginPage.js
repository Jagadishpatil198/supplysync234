
class Loginpage{
    get adminName()
    {
        return $("//input[@id='login:username']")
    }
    get adminPassword()
    {
        return $("//input[@id='login:password']")
    }
    get loginTypeDropdown()
    {
        return $("//select[@id='login:type']")
    }
    get loginButton()
    {
        return $("//input[@class='submit_button']")
    }
    async Login(adminName,adminPaaword,visibletext)
    {
        await this.adminName.setValue(adminName);
        await this.adminPassword.setValue(adminPaaword)
        await this.loginTypeDropdown.selectByVisibleText(visibletext)
        await this.loginButton.click();
    
    }
}
export default new Loginpage();