<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de selección</title>
    <style>
        #menu {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 100;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
        }
        #menu button {
            display: block;
            margin-bottom: 5px;
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="menu">
        <button id="normalCar">Coche Normal</button>
        <button id="muscleCar">Coche Muscle</button>
        <button id="deportivoCar">Coche Deportivo</button>
        <button id="convertibleCar">Coche Convertible</button>
        <button id="lamboCar">Coche Lambo</button>
    </div>
    <script type="module">
       // main.js
import * as THREE from './three.module.js';
//import { OrbitControls } from './OrbitControls.js';
import * as Carload from './Class/CarsLoad.js';
import * as Fonts from './Class/Fonts.js';

const skydomeimage = new THREE.TextureLoader().load('./skydome.jpg');
const scene = new THREE.Scene();
scene.background = skydomeimage;

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(0, 5, 50);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 5, -1);
scene.add(directionalLight);

const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 'blue' });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotateX(-Math.PI / 2);
plane.position.set(0, -2.5, 0);
scene.add(plane);

Carload.loadnormalcar(scene);
Carload.loadmusclecar(scene);
Carload.loadeportivecar(scene);
Carload.loadconvertiblecar(scene);
Carload.loadlambocar(scene);
Fonts.textselect(scene);

//const cameraControl = new OrbitControls(camera, renderer.domElement);

function showOnly(selectedCarType) {
  const carTypes = ['normalCar', 'muscleCar', 'deportivoCar', 'convertibleCar', 'lamboCar'];
  carTypes.forEach((carType) => {
    if (scene.userData[carType]) {
      scene.userData[carType].visible = (carType === selectedCarType);
    }
  });
}

// Event listeners for the buttons
document.getElementById('normalCar').addEventListener('click', () => {
  showOnly('normalCar');
});
document.getElementById('muscleCar').addEventListener('click', () => {
  showOnly('muscleCar');
});
document.getElementById('deportivoCar').addEventListener('click', () => {
  showOnly('deportivoCar');
});
document.getElementById('convertibleCar').addEventListener('click', () => {
  showOnly('convertibleCar');
});
document.getElementById('lamboCar').addEventListener('click', () => {
  showOnly('lamboCar');
});

function animate() {
  if (scene.userData.normalCar && scene.userData.normalCar.visible) {
    scene.userData.normalCar.rotation.y += 0.01;
  }
  if (scene.userData.muscleCar && scene.userData.muscleCar.visible) {
    scene.userData.muscleCar.rotation.y += 0.01;
  }
  if (scene.userData.deportivoCar && scene.userData.deportivoCar.visible) {
    scene.userData.deportivoCar.rotation.y += 0.01;
  }
  if (scene.userData.convertibleCar && scene.userData.convertibleCar.visible) {
    scene.userData.convertibleCar.rotation.y += 0.01;
  }
  if (scene.userData.lamboCar && scene.userData.lamboCar.visible) {
    scene.userData.lamboCar.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

    </script>
</body>
</html>
