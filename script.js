var image=null;
var imgcanvas;
var blurValue=50;
var blur=0.5;
function upload(){
  imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("image");
image =  new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function makeGray(){
  if(image==null||! image.complete()){
    alert="Image Not Loaded";
    return;
  }
  for(var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeGreen(){
  if(image==null||! image.complete()){
    alert="Image Not Loaded";
    return;
  }
  for(var pixel of image.values()){
    var avg = ((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
    if (avg < 128){
      pixel.setRed(0);
      pixel.setBlue(0);
      pixel.setGreen(2*avg);
    } 
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(200);
      pixel.setBlue(2*avg-255);
    }
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeRed(){
  if(image==null||! image.complete()){
    alert="Image Not Loaded";
    return;
  }
  for(var pixel of image.values()){
    var avg = ((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
    if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setBlue(0);
      pixel.setGreen(0);
    } 
    else{
      pixel.setRed(200);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeBlue(){
  if(image==null||! image.complete()){
    alert="Image Not Loaded";
    return;
  }
  for(var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 143){
      pixel.setRed(0);
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
    } 
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(200);
    }
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeRainbow(){
  if(image==null|| !image.complete()){
    alert("Image not uploaded");
    return;
  }
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var y = pixel.getY();
    var h = image.getHeight();
    
    if(y < h/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    else if(y >= h/7 && y < (2*h)/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);
      }
    }
    else if(y >= (2*h)/7 && y < (3*h)/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    else if(y >= (3*h)/7 && y < (4*h)/7){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    else if(y >= (4*h)/7 && y < (5*h)/7){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    else if(y >= (5*h)/7 && y < (6*h)/7){
      if(avg < 128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg - 51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    else if(y >= (6*h)/7 && y <= h){
      if(avg < 128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else{
        pixel.setRed(0.4*avg + 153);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg + 153);
      }
    }
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeBlur(){
  if(image == null || !image.complete()){
    alert("Image not uploaded");
    return;
  }
  for(var pixel of image.values()){
    if(Math.random() > blur){
      var x = pixel.getX();
      var y = pixel.getY();
      
      var newx=x + (2*Math.floor(Math.random()*(blurValue + 1)) - blurValue);
      var newy = y + (2*Math.floor(Math.random()*(blurValue + 1)) - blurValue);
      
      if((newx < image.getWidth() && newx >= 0) && (newy < image.getHeight() && newy >= 0)){
        var newpixel = image.getPixel(newx, newy);
        image.setPixel(x,y,newpixel);
      }
    }
  }
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function clearImage() {
  var imgTemp = document.getElementById("can");
  var clearImg = imgTemp.getContext("2d");
  clearImg.clearRect(0, 0, imgTemp.width, imgTemp.height);
}
