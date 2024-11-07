import * as THREE from '../three.module.js';
import { MTLLoader } from '../Loaders/MTLLoader.js';
import { OBJLoader } from '../Loaders/OBJLoader.js';

function loadCar(scene, carType, mtlPath, objPath) {
  if (!scene.userData) {
    scene.userData = {};
  }

  const mtlLoader = new MTLLoader();
  mtlLoader.load(mtlPath, function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(objPath, function (object) {
      object.scale.set(0.05, 0.05, 0.05);
      object.position.set(0, 5, 0);
      scene.add(object);

      // Asignar el objeto al userData correspondiente
      scene.userData[carType] = object;
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
      console.error('Ocurrió un error al cargar el modelo: ', error);
    });
  });
}

export function loadnormalcar(scene) {
  loadCar(scene, 'normalCar', './gcw/carros/carro_normal.mtl', './gcw/carros/carro_normal.obj');
}

export function loadmusclecar(scene) {
  loadCar(scene, 'muscleCar', './gcw/carros/muscle.mtl', './gcw/carros/muscle.obj');
}

export function loadeportivecar(scene) {
  loadCar(scene, 'deportivoCar', './gcw/carros/deportivo.mtl', './gcw/carros/deportivo.obj');
}

export function loadconvertiblecar(scene) {
  loadCar(scene, 'convertibleCar', './gcw/carros/convertible.mtl', './gcw/carros/convertible.obj');
}

export function loadlambocar(scene) {
  loadCar(scene, 'lamboCar', './gcw/carros/lambo.mtl', './gcw/carros/lambo.obj');
}
