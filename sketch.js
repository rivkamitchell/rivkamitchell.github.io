var canvas;
let size = 18;
let d = [];
let cols;
let rows;
let clr_blue = [0,0,153];
let clr_red = [255,0,94];
let grid_pts = [];
let start = new Date().getTime();


function setup(){
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background('black');
  cols = 2*width/(size);
  rows = 2*height/(size);
  
  for (let i = 0; i < width; i += width/cols){
    for (let j = 0; j < height; j += height/rows){
      grid_pts.push([i,j, 0]);
    }
  }

  for (var element of grid_pts) {
        fill('white');
        rect(element[0], element[1],9,9,3);
  }
  grid_pts = [];
  for (let i = 0; i < width; i += 18*width/cols){
    for (let j = 0; j < height; j += 18*height/rows){
      grid_pts.push([i,j, 0]);
    }
  }


}

// This creates the 18x18 tile we want with color blue
function tile(clr,fade){
  let c = [];
  // Create the 2D array which holds colors
  if (fade == 0){
    for (let i = 0; i < size; i++){
      c[i] = [];
      for (let j = 0; j < size; j++){
        c[i][j] = color(255,255,255);
      }
    }
  }
  for (let i = 0; i < size; i++){
    c[i] = [];
    for (let j = 0; j < size; j++){
      
      // Put the yellow in
      if ((i == 0 && j == 9) || (i == 9 && j == 0)){
        c[i][j] = color(255, 205,0,fade);
      }
      
      // Put the light blue in
      else if ((i == 0 && ([6,7,8,10,11,12]).includes(j)) || ([6,7,8,10,11,12]).includes(i) && j == 0){
        c[i][j] = color(183,255,254,fade);
      }
      else if (((i == size - 1 && ([8,9,10]).includes(j))) || (j == size - 1 && ([8,9,10]).includes(i))) {
        c[i][j] = color(183, 255, 254,fade);
      }
      else if ((i == 1 && ([8,9,10]).includes(j)) || (j == 1 && ([8,9,10]).includes(i))){
        c[i][j] = color(183, 255, 254,fade);
      }
      
      else if (((i == 9) && ([2,3,15,16]).includes(j))|| (([2,3,15,16]).includes(i) && j == 9))  {
        c[i][j] = color(183, 255, 254,fade);
      }
      
      // Put the medium blue in 
      //color(102,153,204)
      else if ((i == 0 && ([3,4,5,13,14,15]).includes(j)) || (j == 0 && ([3,4,5,13,14,15]).includes(i)) || (i == size - 1 && ([5,6,7,11,12,13]).includes(j)) || (j == size - 1 && ([5,6,7,11,12,13]).includes(i))){
        c[i][j] = color(102, 153, 204,fade);
      }
      else if((i == 1 && ([5,6,7,11,12,13]).includes(j)) || (j == 1 && ([5,6,7,11,12,13]).includes(i)) || (i == size - 2 && ([7,8,10,11]).includes(j)) || (j == size - 2 && ([7,8,10,11]).includes(i)) ){
        c[i][j] = color(102, 153, 204,fade);
      }
      else if ((i == 2 && ([7,8,10,11]).includes(j)) || (j == 2 && ([7,8,10,11]).includes(i))|| (i == size - 3 && ([8,10]).includes(j)) || (j == size - 3 && ([8,10]).includes(i))) {
        c[i][j] = color(102, 153, 204,fade);
      }
      else if ((i == 3 && ([8,10]).includes(j)) || (j == 3 && ([8,10]).includes(i)) || (i == size - 4 && ([8,9,10]).includes(j)) || (j == size - 4 && ([8,9,10]).includes(i))){
        c[i][j] = color(102, 153, 204,fade);
      }
      else if ((i == 4 && ([8,9,10]).includes(j)) || (j == 4 && ([8,9,10]).includes(i)) || (i == 9 && ([5,6,12,13]).includes(j)) || (j == 9 && ([5,6,12,13]).includes(i))){
        c[i][j] = color(102, 153, 204,fade);
      }
      
      // Put the white in
      // color(252,252,242)
      
      else if ((i == 0 && ([0,1,2,16,17]).includes(j)) || (j == 0 & ([0,1,2,16,17]).includes(i)) || (i == size - 1 && ([0, 3,4,14,15]).includes(j)) || (j == size - 1 && ([3,4,14,15]).includes(i))){
        c[i][j] = color(252,252,242,fade);
      }
      else if ((i == 1 && ([3,4, size - 3, size - 4]).includes(j)) || (j == 1 && ([3,4, size - 3, size - 4]).includes(i)) || (i == size - 2 && ([5,6,12,13]).includes(j)) || (j == size - 2 && ([5,6,12,13]).includes(i))){
        c[i][j] = color(252,252,242,fade);
      }
      else if ((i == 2 &&([5,6,12,13]).includes(j)) || (j == 2 && ([5,6,12,13]).includes(i)) || (([7,11]).includes(i) && ([3,4,size - 3, size - 4]).includes(j)) || (([7,11]).includes(j) && ([3,4, size - 3, size - 4]).includes(i))) {
        c[i][j] = color(252,252,242,fade);
      }
      else if ((i == 9 || j == 9) || (([8,10]).includes(i) && ([5,6,12,13]).includes(j)) || (([8,10]).includes(j) && ([5,6,12,13]).includes(i))){
        c[i][j] = color(252,252,242,fade);
      }
      else {
        c[i][j] = color(clr[0], clr[1], clr[2],fade);
      }
    }
  }
  return c;
}

function draw(){
  
  let index = Math.floor(Math.random()*grid_pts.length);
  let fade = 240;
  
  if (grid_pts[index][2] == 0) {
    grid_pts[index][2] = clr_red;
    fade = 240;
  }
  else {
    grid_pts[index][2] = 0;
    fade = 0;
  }
    
  let tiling = tile(grid_pts[index][2], fade);
  
    for (let n = 0; n < size; n++){
      for (let m = 0; m < size; m++){
        fill('white');
        rect(grid_pts[index][0]+n*size/2, grid_pts[index][1] + m*size/2, size/2, size/2, 3);

        fill(tiling[n][m]);
        rect(grid_pts[index][0]+n*size/2, grid_pts[index][1] + m*size/2, size/2, size/2, 3);
      }
    }
  wait(1000);
  
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    cols = 2*width/(size);
    rows = 2*height/(size);
  
  for (let i = 0; i < width; i += width/cols){
    for (let j = 0; j < height; j += height/rows){
      grid_pts.push([i,j, 0]);
    }
  }

  for (var element of grid_pts) {
        fill('white');
        rect(element[0], element[1],9,9,3);
  }
  grid_pts = [];
  for (let i = 0; i < width; i += 18*width/cols){
    for (let j = 0; j < height; j += 18*height/rows){
      grid_pts.push([i,j, 0]);
    }
  }
  
}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
// function mouseClicked(){
//     noLoop();
// }


