


var mouseX = 0,
mouseY = 0,
windowHalfX = window.innerWidth / 2,
windowHalfY = window.innerHeight / 2,
SEPARATION = 200,
AMOUNTX = 10,
AMOUNTY = 10,
camera,
scene,
renderer;

init();
animate();

function init() {

var container,
  separation = 100,
  amountX = 50,
  amountY = 50,
  particle;

container = document.createElement( 'div' );
document.body.appendChild( container );

scene = new THREE.Scene();

renderer = new THREE.CanvasRenderer({ alpha: true }); // gradient; this can be swapped for WebGLRenderer
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

camera = new THREE.PerspectiveCamera(
  75,
window.innerWidth / window.innerHeight,
1,
10000
);
camera.position.z = 100;

  // particles
var PI2 = Math.PI * 2;
var material = new THREE.SpriteCanvasMaterial({
  color: 0xffffff,
  program: function ( context ) {
          context.beginPath();
  context.arc( 0, 0, 0.5, 0, PI2, true );
  context.fill();
}
});

var geometry = new THREE.Geometry();

for ( var i = 0; i < 100; i ++ ) {
particle = new THREE.Sprite( material );
particle.position.x = Math.random() * 2 - 1;
particle.position.y = Math.random() * 2 - 1;
particle.position.z = Math.random() * 2 - 1;
particle.position.normalize();
particle.position.multiplyScalar( Math.random() * 10 + 450 );
particle.scale.x = particle.scale.y = 10;
scene.add( particle );
geometry.vertices.push( particle.position );
}

// lines
var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
scene.add( line );

// mousey
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
  
   window.addEventListener( 'resize', onWindowResize, false );

} // end init();

function onWindowResize() {

windowHalfX = window.innerWidth / 2;
windowHalfY = window.innerHeight / 2;

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove(event) {

mouseX = event.clientX - windowHalfX;
mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart( event ) {

  if ( event.touches.length > 1 ) {

  event.preventDefault();

mouseX = event.touches[ 0 ].pageX - windowHalfX;
mouseY = event.touches[ 0 ].pageY - windowHalfY;

}
}

function onDocumentTouchMove( event ) {

if ( event.touches.length == 1 ) {

  event.preventDefault();

mouseX = event.touches[ 0 ].pageX - windowHalfX;
mouseY = event.touches[ 0 ].pageY - windowHalfY;

  }
}

function animate() {

  requestAnimationFrame( animate );
render();

}

function render() {
  
camera.position.x += ( mouseX - camera.position.x ) * .05;
camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
camera.lookAt( scene.position );

renderer.render( scene, camera );

}

selected=document.querySelector(".selected");






seats=document.querySelector(".seats");
let section=[
    eie={
        column:25,
        rows:12,
        seats:360,
    },
    shboys1={
        column:1,
        row:1,
        seats:1,
    },
    shboys2={
        column:1,
        row:1,
        seats:1,
    },
    shgirls1={
        column:1,
        row:1,
        seats:1,
    },
    shgirls2={
        column:1,
        row:1,
        seats:1,
    },
    eee={
        column:1,
        row:1,
        seats:1,
    },
    ece1={
        column:1,
        row:1,
        seats:1,
    },
    ece2={
        column:1,
        row:1,
        seats:1,
    },
    mba={
        column:1,
        row:1,
        seats:1,
    },
    mca={
        column:1,
        row:1,
        seats:1,
    },
    voulnteers={
        column:1,
        row:1,
        seats:1,
    },
    csa1={
        column:1,
        row:1,
        seats:1,
    },
    cse2={
        column:1,
        row:1,
        seats:1,
    },

];
v=1;
count=0;
const Alph = [" ","A ", "B ", "C ", "D ", "E ", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for(j=1;j<=section[0].rows;j++)
{
    l=document.createElement("span");
    l.classList.add("flex");
    g=document.createElement("div");
    g.classList.add("alpha");
    g.innerHTML=Alph[j]+" ";
    l.appendChild(g);

    for(i=1;i<=section[0].column;i++)
{
    
k=document.createElement("div");
k.classList.add("seat");
k.innerHTML=v;
v++;
l.appendChild(k);

}
v=1;
seats.appendChild(l);


}
amount=0;
book=document.querySelector(".book");

document.querySelectorAll(".seat").forEach(element => {
element.addEventListener("click",(e)=>{
    
j=e.target;

        v=j.innerHTML;
        z=j.parentNode.querySelector(".alpha").innerHTML;
        v=z+v;
if(j.classList=="seat" && count<=5)
{
        j.classList.add("green");
        
        li=document.createElement("span");
        li.classList.add("dd");
        li.innerHTML=v;
        selected.appendChild(li);
        
       amount=amount+100;
}
else{
     j.classList.remove("green");
     document.querySelectorAll(".dd").forEach(element => {
        if(element.innerHTML==v)
        {
            element.parentNode.removeChild(element);
        }
    
       
     });
     
     amount=amount-100;
     
     
}
book.innerHTML="Book and continue ₹"+amount; 
});
});



