var FormValidator = function(){

    this.isNegativeNumber = function(value){
        console.log("Received number " + value);
        if (value <= 0 ) {
            alert("Please enter valid number")
            return 0;
        }
        return value;
    };

}