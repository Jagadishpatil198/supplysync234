class AddManufacturePage{
    get addManufactureName()
    {
        return $("//input[@id='manufacturer:name']")
    }
    get addManufactureEmail()
    {
        return $("//input[@name='txtManufacturerEmail']")
    }
    get addManufacturePhonenumber()
    {
        return $("//input[@name='txtManufacturerPhone']")
    }
    get addManufactureUsername()
    {
        return $("//input[@name='txtManufacturerUname']")
    }
    get addManufacturePassword()
    {
        return $("//input[@name='txtManufacturerPassword']")
    }
    get addManufactureButton()
    {
        return $("//input[@value='Add Manufacturer']")
    }
}
export default new AddManufacturePage();