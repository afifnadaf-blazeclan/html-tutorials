class DataRepository{

    constructor(){
        this.products = [];
    }

    getProducts(){
        let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
            method:'GET',
        });
        return response;
    }

    addNewProduct(productData){
        let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
            method:'POST',
            body: JSON.stringify(productData),
            headers:{
            'Content-Type':'application/json'
            }
        });
        return response;
    
    }


    // send ID in header 
    updateProduct(productData, ProductRowId){
        let response = fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}`,{
            method:'PUT',
            body: JSON.stringify(productData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    deleteProduct(ProductRowId){
        let response = fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

}