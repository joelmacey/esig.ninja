function convert (){
  var can = document.getElementById('imageView');
  var img = new Image();
  img.src = can.toDataURL();
  downloadURI(img.src, 'signature')
}
function downloadURI(uri, name)
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
