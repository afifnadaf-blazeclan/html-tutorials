var ValidateForm = function(){
    this.checkNumeric = function(value){
        console.log('Received Values is = ' + parseInt(value));

        if(!parseInt(value) && value.substr(0,1) == '-'){
            alert('Value must be number');
        }
        value = 0;
        return value;
    };

    this.checkForName = function(value){
        console.log('Received Name is : ' + value);

        if(value.length > 0 && !value.match(/[a-zA-Z]/)){
            alert('Enter valid Employer name');
        }
        value = "";
        return value;
    }

};