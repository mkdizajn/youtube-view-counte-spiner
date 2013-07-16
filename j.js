if(document.getElementById("watch7-views-info"))
{
    var countElement = document.getElementById("watch7-views-info").getElementsByTagName('span')[0].childNodes[0];

}
if(!countElement)
{
    alert('The youtube spinner cannot be ran on this page.');
}
else
{
    if(typeof intervalId != "undefined")
    {
        console.log(intervalId);
        window.clearInterval(intervalId);
        intervalId = undefined;
        //alert('its running');
    }
    else
    {

        var ytCount  = countElement.textContent;

        ytCount = ytCount.replace(/,/gi, "");

    //    console.log(ytCount);
        var intervalId = window.setInterval(function(){
            ytCount++;
            //console.log(ytCount);
            fmtCount = ytCount;
            var rgx = /(\d+)(\d{3})/;

            while(rgx.test(fmtCount)) {
                    //fmtCount = fmtCount+ '';
                    fmtCount = fmtCount.toString().replace(rgx, '$1' + ',' + '$2');
                    //console.log(fmtCount);
            }
            //console.log(ytCount);
            countElement.textContent = fmtCount;
        }, 150);
    }


}
