//POST Login to Server
const urlParams = new URLSearchParams(window.location.search);
const finalLink=urlParams.get('fl');

document.getElementById("templateLink").innerHTML = '<a href="'+finalLink+'">"'+finalLink+'"</a>';
document.getElementById("linkArea").style.display = "block";