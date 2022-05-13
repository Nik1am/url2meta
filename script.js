const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url_text = urlParams.get('text');
window.onload = function() {
try {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d');
    ctx.font = "32px Monospace";
    ctx.textAlign = "center"
    ctx.fillText(url_text, 240, 240);
    imageurl = canvas.toDataURL("image/png")
    document.getElementsByTagName('meta').namedItem('metatitle').setAttribute('content',url_text)
    document.getElementsByTagName('meta').namedItem('image').setAttribute('content',imageurl)
}
catch(err) {
    console.log(err.message);return false;
}
}
