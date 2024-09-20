class AddProductsPage{
    get productNameTextField()
    {
        return $("//input[@name='txtProductName']")
    }
    get priceNameTextfield()
    {
        return $("//input[@name='txtProductPrice']")
    }
    get unitTypeDropdown()
    {
        return $("//select[@name='cmbProductUnit']")
    }
    get categoryDropdown()
    {
        return $("//select[@name='cmbProductCategory']")
    }
    get stockManagementRadioEnableButton()
    {
        return $("//input[@type='radio' and @value='1']")
    }
    get stockManagementRadioDisableButton()
    {
        return $("//input[@type='radio' and @value='2']")
    }
    get stockManagementDescriptionTextfield()
    {
        return $("//textarea[@name='txtProductDescription']")
    }
    get addProductButton()
    {
        return $("//input[@value='Add Product']")
    }
}
export default new AddProductsPage();