
class AddRetailerPage
{
    get userNameTextfield()
    {
        return $("//input[@name='txtRetailerUname']")

    }
    get passwordTextfield()
    {
        return $("//input[@name='txtRetailerPassword']")

    }
    get areacodeDropdown()
    {
        return $("//select[@id='retailer:areaCode']")

    }
    get phonenumberTextfield()
    {
        return $("//input[@name='txtRetailerPhone']")

    }
    get emailTextfield()
    {
        return $("//input[@name='txtRetailerEmail']")

    }
    get addressTextfield()
    {
        return $("//textarea[@name='txtRetailerAddress']")

    }
    get addRetailerButton()
    {
        return $("//input[@value='Add Retailer']")

    }
    async addretailer()
    {
       
        await this.userNameTextfield.setValue("jagadishp");
        await this.passwordTextfield.setValue("JP198@bldea")
        await this.areacodeDropdown.selectByVisibleText("MNGR (Maninagar)");
        await this.phonenumberTextfield.setValue("9090909090");
        await this.emailTextfield.setValue("jp@gmail.com");
        await this.addressTextfield.setValue("bengaluru india");
        await this.addRetailerButton.click();
    }
}
export default new AddRetailerPage();





