import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './index.css'

const scene = new THREE.Scene();

  // create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 30;

// create a cylinder
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 30 ); 
const material = new THREE.MeshBasicMaterial( {color: 'red', wireframe:true} ); 
const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );
scene.add(cylinder);

// set up renderer
const canvas: HTMLCanvasElement = document.querySelector('canvas')!;
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
const controls = new OrbitControls( camera, renderer.domElement );

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    controls.update(); 

    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    cylinder.rotation.x += 0.01
 }

animate()
