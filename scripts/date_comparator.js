
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
    
        var message = "";
        var leftSec  = 0;

        var diff = (secondDate - firstDate)/1000;
        diff = Math.abs(Math.floor(diff));

        var years = Math.floor(diff/(24*60*60*365))
        if (years > 0) {
            leftSec = diff - (years * 24*60*60*365); 
            message += years + " Years, "
        }

        var months = Math.floor(leftSec/(24*60*60*(365/12)))
        if (months > 0) {
            leftSec = leftSec - (months * 24*60*60*(365/12)); 
            message += months + " Months, "
        }
    
        var days = Math.floor(leftSec/(24*60*60));
        if (days > 0) {
            leftSec = leftSec - (days * 24*60*60);
            message += days + " Days, "
        } 
    
        var hrs = Math.floor(leftSec/(60*60));
        if (hrs > 0) {
            leftSec = leftSec - (hrs * 60*60);
            message += hrs + " Hours, "
        } 
    
        var min = Math.floor(leftSec/(60));
        if (min > 0) {
            leftSec = leftSec -( min * 60);
            message += min + " Min, "
        } 
    
        document.getElementById("dateDifference").innerHTML =  message + " and " + leftSec + " seconds.";
    

    }else{
        alert('Please eneter valid date.')
    }


}