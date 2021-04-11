
function compareDates(){

    var firstString = document.getElementById('dateFirst').value;
    var secondString = document.getElementById('dateSecond').value;

    var firstDateSplit = firstString.split(',');
    var firstDateTimes = firstDateSplit[3].split(":");
    var firstDate = new Date(firstDateSplit[0], firstDateSplit[1], firstDateSplit[2], firstDateTimes[0], firstDateTimes[1], firstDateTimes[2]);


    var secondDateSplit = secondString.split(',');
    var secondDateTimes = secondDateSplit[3].split(":");
    var secondDate = new Date(secondDateSplit[0], secondDateSplit[1], secondDateSplit[2], secondDateTimes[0], secondDateTimes[1], secondDateTimes[2]);

    const diffTime = secondDate - firstDate
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    var numberOfYears = Math.floor(diffTime/diffDays);



    if(diffTime >= 0){
    
        var differenceDate = new Date(secondDate.getFullYear()-firstDate.getFullYear(),
                                        secondDate.getMonth()-firstDate.getMonth(),
                                        secondDate.getDay()-firstDate.getDay(),
                                        secondDate.getHours()-firstDate.getHours(), 
                                        secondDate.getMinutes()-firstDate.getMinutes(), 
                                        secondDate.getSeconds()-firstDate.getSeconds());

        console.log(differenceDate.getYear() + "Year(s), " + 
        differenceDate.getMonth()+ "Month(s), " + 
        differenceDate.getDate() + "Days, " +  
        differenceDate.getHours() + " Hours, " +
        differenceDate.getMinutes()+ " Minutes, ", +
        differenceDate.getSeconds() + " seconds.");    

        document.getElementById('dateDifference').innerText = differenceDate.getYear() + "Year(s), " + 
        differenceDate.getMonth()+ "Month(s), " + 
        differenceDate.getDate() + "Days, " +  
        differenceDate.getHours() + " Hours, " +
        differenceDate.getMinutes()+ " Minutes, ", +
        differenceDate.getSeconds() + " seconds.";

    }else{
        alert('Please eneter valid date.')
    }


}