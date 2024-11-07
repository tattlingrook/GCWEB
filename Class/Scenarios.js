import * as THREE from "../three.module.js";
import {OBJLoader} from "../Loaders/OBJLoader.js";
import {MTLLoader} from "../Loaders/MTLLoader.js";


export function scenario_1 (scene){
    const stadium = new MTLLoader();
          stadium.load('./estadio/estadio.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './estadio/estadio.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.5,.5,.5);
                    object.position.set(0,-5,0);
                      scene.add(object);
                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}