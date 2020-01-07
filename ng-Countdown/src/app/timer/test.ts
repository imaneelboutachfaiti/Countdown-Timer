export const logDate = (date : Date) => {
    var test =new Date(date);
        var now = new Date().getTime(); 
        var t = test .getTime();
       
        var diff = t - now; 
        var days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((diff % (1000 * 60)) / 1000); 
      document.getElementById("day").innerHTML=days.toString();
      document.getElementById("hour").innerHTML =hours.toString(); 
        document.getElementById("minute").innerHTML = minutes.toString();  
        document.getElementById("second").innerHTML =seconds.toString();
}