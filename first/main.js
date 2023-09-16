import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Get references to HTML table cells
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");

// Create a scene for each cell
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();
const scene5 = new THREE.Scene();
const scene6 = new THREE.Scene();

// Set the background color for all scenes
const lightGrayColor = new THREE.Color("white");
scene1.background = lightGrayColor;
scene2.background = lightGrayColor;
scene3.background = lightGrayColor;
scene4.background = lightGrayColor;
scene5.background = lightGrayColor;
scene6.background = lightGrayColor;

// Create a camera for each cell
const camera1 = new THREE.PerspectiveCamera(40, cell1.clientWidth / cell1.clientHeight, .5, 1000);
const camera2 = new THREE.PerspectiveCamera(40, cell2.clientWidth / cell2.clientHeight, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(30, cell3.clientWidth / cell3.clientHeight, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(50, cell4.clientWidth / cell4.clientHeight, 0.1, 1000);
const camera5 = new THREE.PerspectiveCamera(100, cell5.clientWidth / cell5.clientHeight, 0.1, 1000);
const camera6 = new THREE.PerspectiveCamera(70, cell6.clientWidth / cell6.clientHeight, 0.1, 1000);

// Create a renderer for each cell
const renderer1 = new THREE.WebGLRenderer();
const renderer2 = new THREE.WebGLRenderer();
const renderer3 = new THREE.WebGLRenderer();
const renderer4 = new THREE.WebGLRenderer();
const renderer5 = new THREE.WebGLRenderer();
const renderer6 = new THREE.WebGLRenderer();

// Set the size of each renderer to match its respective cell
renderer1.setSize(cell1.clientWidth, cell1.clientHeight);
renderer2.setSize(cell2.clientWidth, cell2.clientHeight);
renderer3.setSize(cell3.clientWidth, cell3.clientHeight);
renderer4.setSize(cell4.clientWidth, cell4.clientHeight);
renderer5.setSize(cell5.clientWidth, cell5.clientHeight);
renderer6.setSize(cell6.clientWidth, cell6.clientHeight);

// Append each renderer's DOM element to its respective cell
cell1.appendChild(renderer1.domElement);
cell2.appendChild(renderer2.domElement);
cell3.appendChild(renderer3.domElement);
cell4.appendChild(renderer4.domElement);
cell5.appendChild(renderer5.domElement);
cell6.appendChild(renderer6.domElement);

// Create GLTF loader
const loader = new GLTFLoader();



const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(1, 1, 1);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(1, 1, 1);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);

directionalLight4.position.set(40, 10, 10);



const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight5.position.set(1, 1, 1);
const directionalLight6 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight6.position.set(1, 1, 1);

scene1.add(directionalLight); // Add this light to your scene
scene2.add(directionalLight2); // Add this light to your scene
scene3.add(directionalLight3); // Add this light to your scene
scene4.add(directionalLight4); // Add this light to your scene
scene5.add(directionalLight5); // Add this light to your scene
scene6.add(directionalLight6);



function loadModelWithCacheBusting(modelPath, scene) {
    const timestamp = Date.now();
    const cacheBustingPath = `${modelPath}?v=${timestamp}`;
    loader.load(cacheBustingPath, (gltf) => {
        const model = gltf.scene;

        if(modelPath=="/low_poly_adventurer.glb")
        {
            model.position.set(0, 130, 1);

        }
        else if("/dr_mario.glb"== modelPath)
        {
            model.position.set(0,-15,0)
        }
        else if( modelPath=="/ultra_low_poly_animated_character_mixamo_based.glb")
        {
            model.position.set(0,-1,0)
        }

        else if("/snowman_-_blockbech_project.glb"== modelPath)
        {
            model.position.set(0,-1,1)
        }
        else if("/ralph_el_demoledor.glb"== modelPath)
        {
            model.position.set(0,-15,1)
        }
        else if("/low-poly_sekiro.glb"==modelPath)
        {
            model.position.set(0, -125, 0);

        }
        // else
        // {
        //     model.position.set(0, 0, 0);

        // }
        scene.add(model);

    });
}
// Load 3D models and add them to their respective scenes with cache-busting
loadModelWithCacheBusting('/dr_mario.glb', scene1);
loadModelWithCacheBusting('/ralph_el_demoledor.glb', scene2);
loadModelWithCacheBusting('/ultra_low_poly_animated_character_mixamo_based.glb', scene3);

loadModelWithCacheBusting('/snowman_-_blockbech_project.glb', scene4);
loadModelWithCacheBusting('/low_poly_adventurer.glb', scene5);
loadModelWithCacheBusting('/low-poly_sekiro.glb', scene6);


// Position the cameras
// camara1.position.y=1;
camera1.position.z = 200;
camera2.position.z = 150;
camera3.position.z = 10;
camera4.position.z = 5;
camera5.position.z = 300;

camera6.position.z = 1000;

// Create OrbitControls for specific scenes
// const controls1 = new OrbitControls(camera1, renderer1.domElement);
// const controls2 = new OrbitControls(camera2, renderer2.domElement);
// const controls3 = new OrbitControls(camera3, renderer3.domElement);
// const controls4 = new OrbitControls(camera4, renderer4.domElement);
// const controls5 = new OrbitControls(camera5, renderer5.domElement);
// const controls6 = new OrbitControls(camera6, renderer6.domElement);

// Animate the scenes
function animate() {
    requestAnimationFrame(animate);

    // Update your animations or interactions here

    controls1.update();
    controls2.update();
    controls3.update();
    controls4.update();
    controls5.update();
    controls6.update();
    // camera6.position.x+=.6
    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
    renderer3.render(scene3, camera3);
    renderer4.render(scene4, camera4);
    renderer5.render(scene5, camera5);
    renderer6.render(scene6, camera6);
}

animate();

















