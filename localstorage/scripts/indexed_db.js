var IndexedDBLogic = function(){

    var myDatabase;
    var cartTable;
    var billTable;

    this.createDatabase = function(){
        myDatabase = window.indexedDB.open('ShoppingMart',1);

        myDatabase.onupgradeneeded = function(e){
            var dbRef = e.target.result;
            cartTable = dbRef.createObjectStore('cart',{keyPath:'cart_id'});
            billTable = dbRef.createObjectStore('bill',{keyPath: 'bill_id'});
           
            var columConstraints = {unique:false};
           
            cartTable.createIndex('id', "ProductId", columConstraints);
            cartTable.createIndex('name', "ProductName", columConstraints);
            cartTable.createIndex('price','Price', columConstraints);
            cartTable.createIndex('category', 'CategoryName', columConstraints);
            cartTable.createIndex('manufacturer', 'Manufacturer', columConstraints);
            cartTable.createIndex('description', 'Description', columConstraints);

            billTable.createIndex('product_ids','billId', columConstraints);
            billTable.createIndex('bill_total', 'OrderTotal', columConstraints);
            billTable.createIndex('orderedOn', 'OrderedOn', columConstraints);

            document.getElementById('dbStatus').innerText = "Database created successfully with objectstore.";
        };

        myDatabase.onsuccess = function(e){
            document.getElementById('dbStatus').innerText = "Database is created successfully."
        }

        myDatabase.onerror = function(e){
            document.getElementById('dbStatus').innerText = "Database creation failed."
        }   
    }


    this.addCartItem = function(product){
        myDatabase = window.indexedDB.open('ShoppingMart');
        var cartid = this.generateUniqueKey(cartTable);
        if (myDatabase) {
            
            myDatabase.onsuccess = function(e){
                var transaction = e.target.result.transaction('cart','readwrite');
                cartTable = transaction.objectStore('cart');

                var cartObject =  {
                    "cart_id" : cartid,
                    "id" : product.id,
                    "name" : product.name,
                    "price" : product.price,
                    "category" : product.categoryName,
                    "manufacturer" : product.manufacturerName,
                    "description" : product.description
                };

                var saveCartItem = cartTable.add(cartObject)

                saveCartItem.onsuccess = function(e){
                    document.getElementById('cartStatus').innerText = "Product added in cart successfully."
                };

                saveCartItem.onerror = function(e){
                    document.getElementById('cartStatus').innerText = "Not able to add product in cart."
                }   
            }

        }else{
            document.getElementById('cartStatus').innerText = 'Error in Save Operation, may be database is not open';
        }

    }


    this.getCartItems = function(){
        myDatabase = window.indexedDB.open('ShoppingMart');
        if(myDatabase){
            myDatabase.onsuccess = function(e){
                var transaction = e.target.result.transaction('cart','readwrite');
                cartTable = transaction.objectStore('cart');
                var reader = cartTable.openCursor();
                reader.onsuccess = function(cartItems){
                    var cartProducts = [];
                    var readCursor = cartItems.target.result;
                    if (readCursor) {
                        cartProducts.push(readCursor.value);
                        readCursor.continue();
                    }
                    console.log("Cart Items are : " +  JSON.stringify(cartProducts));
                    return cartProducts;
                }

                reader.onerror = function(error){
                    document.getElementById('cartStatus').innerText = 'Error while fetching cart data.';
                }
            }
        }
    }

    this.generateUniqueKey = function(prefix){
        var chars = "0123456789";
        var idLength = 4;
        var result = prefix;
        for (var i = idLength; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

}