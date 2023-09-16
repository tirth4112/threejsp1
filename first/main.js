import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();
const scene5 = new THREE.Scene();
const scene6 = new THREE.Scene();

const lightGrayColor = new THREE.Color("white");
scene1.background = lightGrayColor;
scene2.background = lightGrayColor;
scene3.background = lightGrayColor;
scene4.background = lightGrayColor;
scene5.background = lightGrayColor;
scene6.background = lightGrayColor;

const camera1 = new THREE.PerspectiveCamera(40, cell1.clientWidth / cell1.clientHeight, .5, 1000);
const camera2 = new THREE.PerspectiveCamera(40, cell2.clientWidth / cell2.clientHeight, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(30, cell3.clientWidth / cell3.clientHeight, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(50, cell4.clientWidth / cell4.clientHeight, 0.1, 1000);
const camera5 = new THREE.PerspectiveCamera(100, cell5.clientWidth / cell5.clientHeight, 0.1, 1000);
const camera6 = new THREE.PerspectiveCamera(70, cell6.clientWidth / cell6.clientHeight, 0.1, 1000);

const renderer1 = new THREE.WebGLRenderer();
const renderer2 = new THREE.WebGLRenderer();
const renderer3 = new THREE.WebGLRenderer();
const renderer4 = new THREE.WebGLRenderer();
const renderer5 = new THREE.WebGLRenderer();
const renderer6 = new THREE.WebGLRenderer();

renderer1.setSize(cell1.clientWidth, cell1.clientHeight);
renderer2.setSize(cell2.clientWidth, cell2.clientHeight);
renderer3.setSize(cell3.clientWidth, cell3.clientHeight);
renderer4.setSize(cell4.clientWidth, cell4.clientHeight);
renderer5.setSize(cell5.clientWidth, cell5.clientHeight);
renderer6.setSize(cell6.clientWidth, cell6.clientHeight);

cell1.appendChild(renderer1.domElement);
cell2.appendChild(renderer2.domElement);
cell3.appendChild(renderer3.domElement);
cell4.appendChild(renderer4.domElement);
cell5.appendChild(renderer5.domElement);
cell6.appendChild(renderer6.domElement);

const lightintensity=5;
const directionalLight = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight.position.set(1, -2, 1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight2.position.set(1, 1, 1);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight3.position.set(1, 1, 1);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight4.position.set(40, 10, 10);

const directionalLight5 = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight5.position.set(1, 1, 1);

const directionalLight6 = new THREE.DirectionalLight(0xffffff, lightintensity);
directionalLight6.position.set(1, 1, 1);

scene1.add(directionalLight);
scene2.add(directionalLight2);
scene3.add(directionalLight3);
scene4.add(directionalLight4);
scene5.add(directionalLight5);
scene6.add(directionalLight6);

const loader = new FBXLoader();

function loadModelWithCacheBusting(modelPath, scene, camera) {
    const timestamp = Date.now();
    const cacheBustingPath = `${modelPath}?v=${timestamp}`;

    loader.load(cacheBustingPath, (fbx) => {
        fbx.position.set(0, 10, 20);
        scene.add(fbx);

        focusCameraOnObject(camera, fbx);
    });
}

loadModelWithCacheBusting('/onj/4/little_boy_B.fbx', scene1, camera1);
loadModelWithCacheBusting('/onj/4/casual_Female_G.fbx', scene2, camera2);
loadModelWithCacheBusting('/onj/4/casual_Male_G.fbx', scene3, camera3);
loadModelWithCacheBusting('/onj/4/Doctor_Male_B.fbx', scene4, camera4);
loadModelWithCacheBusting('/onj/4/people_freePack_webGl_ani.fbx', scene5, camera5);
loadModelWithCacheBusting('/onj/4/police_Female_A.fbx', scene6, camera6);

function focusCameraOnObject(camera, object) {
    const boundingBox = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const radius = boundingBox.getSize(new THREE.Vector3()).length() / 2;
    const distance = radius / Math.tan((camera.fov * Math.PI) / 360);
    camera.position.copy(center);
    camera.position.z += distance;
    camera.lookAt(center);
}


function animate() {
    requestAnimationFrame(animate);



  

    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
    renderer3.render(scene3, camera3);
    renderer4.render(scene4, camera4);
    renderer5.render(scene5, camera5);
    renderer6.render(scene6, camera6);
}

animate();
