function generateUI(){
    return {
        select:function(dataSource){
            if(dataSource === undefined){
                return '<option>Invalid Data Source</option>';
            }
            if(dataSource.length === 0 ){
                return '<option>No Records</option>';
            }
            var option="";
            for(var i=0; i< dataSource.length;i++){
                option += '<option value="'+dataSource[i]+ '">'+ dataSource[i] +'</option>'; 
            }
            return option;
        },

        radio : function(dataSource, group){
            if (dataSource == undefined) {
                return '<option>Invalid Data Source</option>';
            }
            if (dataSource.length == 0) {
                return '<option>No Records</option>';
            }
            var options="";
            for (let index = 0; index < dataSource.length; index++) {
                var element = dataSource[index];
                options += '<input type="radio" name="'+group+'" id="'+element+'" value="'+element+'" onclick="{handleClick(this)}">'+element;
            }
            return options;
        },

        table:function(dataSource){
           
            if(dataSource === undefined){
                return '<div>Invalid Data Source</div>';
            }
            if(dataSource.length === 0 ){
                return '<div>No Records</div>';
            }

            console.log("Table data source : " + Object.keys(JSON.parse(dataSource[0])));
            // logic for generating the table
            var table="";
            // get all keys for the 0th record
            var headers = Object.keys(JSON.parse(dataSource[0]));

            console.log('Data source headers : ' + headers);
            
            table+= "<table style='border:solid;'>";
            table += "<thead><tr>"
            for(var c=0;c<headers.length;c++){
                table+= "<th style='border:solid; padding:5px; font-size: 13px;'>"+headers[c].toUpperCase()+"</th>"; 
            }    
            table+="</tr></thead>";
            table+="<tbody>";
            for(var row=0;row<dataSource.length;row++){
                console.log("dataSource retrive : " + dataSource[row]);
                var data = JSON.parse(dataSource[row]);
                table+="<tr id=\""+data[headers[0]]+"\" draggable=\"true\">"; // each row is a JSON object from JSON Array
                for(var d=0;d<headers.length;d++){
                    var element = headers[d];
                    console.log('element value ' + element);
                    console.log('Data value ' + data[element]);
                    // dataSource[row][headers[d]], for every row in data source, read every property (key) value 
                    table+= "<td style='border:solid; padding:5px; font-size: 13px;'>"+data[element]+"</td>"; 
                }  
                table+="</tr>";
            }
            table+="</tbody>";
            table+="</table>";
            return table;
        },
        tableHeader:function(dataSource) {
            var table = "<table><thead><tr>";
            var headers = Object.keys(dataSource);
            for(var c=0;c<headers.length;c++){
                table+= "<th style='border:solid; padding:5px; font-size: 13px;'>"+headers[c].toUpperCase()+"</th>"; 
            }  
            table+="</tr></thead></table>";

            return table;
        },
        generateTableRow:function(product){
            var keysList = Object.keys(product);
            var tableRow = "<tr id=\""+product[keysList[0]]+"\">"
            for (let index = 0; index < keysList.length; index++) {
                const element = keysList[index];
                tableRow += "<td style='border:solid; padding:5px; font-size: 13px;'>"+product[element]+"</td>"   
            }
            tableRow += "</tr>"
            return tableRow;
        },
    };
}