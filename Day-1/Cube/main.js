import * as THREE from 'three';

/**
 * to display anything in threeJs we need 3 things scene, camera and renderer
 * Here we are using PerspectiveCamera which is a type of camera which has 4 params
 * 1. Field of view (fov) - 75
 * 2. Aspect ratio - window.innerWidth / window.innerHeight
 * 3. Near clipping plane - 0.1
 * 4. Far clipping plane - 1000
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
/**
 * WebGLRenderer is used to render the scene
 * to render the scene we need to set the size of the renderer
 * and then append the renderer.domElement to the body
 * renderer setSize method takes 2 params width and height and also there can be a third param which updateStyle which is by default true 
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/**
 * to create a cube we need 3 things geometry, material and mesh
 * geometry is the shape of the object, here we are using BoxGeometry. These objects are made up of vertices and faces
 * material is the color of the object, here we are using MeshBasicMaterial.
 * mesh is the combination of geometry and material
 * color : #FF0000 is equvalent to 0xFF0000
 */
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


