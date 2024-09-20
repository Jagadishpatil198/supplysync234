class AdminHomePage{
    get addProductLink()
    {
        return $("//a[text()='Add Products']")
    }
    get addRetailersLink()
    {
        return $("//a[text()='Add Retailers']")
    }
    get addManufacturerLink()
    {
        return $("//a[text()='Add Manufacturer']")
    }
    get addDistributorLink()
    {
        return $("//a[text()='Add Distributor']")
    }
    get addManageUnitLink()
    {
        return $("//a[text()='Manage Unit']")
    }
    get addManageCategoryLink()
    {
        return $("//a[text()='Manage Category']")
    }
    get addAreaLink()
    {
        return $("//a[text()='Manage Area']")
    }
    get addCahngePasswordLink()
    {
        return $("//a[text()='Change Password']")
    }
    get homeLink()
    {
        return $("//a[text()='Home']")
    }
    get retailerLink()
    {
        return $("//a[text()='Retailers']")
    }
    get manufacturersLink()
    {
        return $("//a[text()='Manufacturers']")
    }
    get distributorsLink()
    {
        return $("//a[text()='Distributors']")
    }
    get productsLink()
    {
        return $("//a[text()='Products']")
    }
    get ordersLink()
    {
        return $("//a[text()='Orders']")
    }
    get invoiceLink()
    {
        return $("//a[text()='Invoice']")
    }
    get logoutButton()
    {
        return $("//input[@class='submit_button']")
    }
     get Welcometext()
     {
        return $("//h1[text()='Welcome Admin']")
     }
    
}
export default new AdminHomePage()









