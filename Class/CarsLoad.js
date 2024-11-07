import {OBJLoader} from "../Loaders/OBJLoader.js";
import {MTLLoader} from "../Loaders/MTLLoader.js";
//import { OrbitControls } from "./OrbitControls.js";
import * as THREE from "../three.module.js";


export function loadnormalcar(scene){

     
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./gcw/carros/carro_normal.mtl',
      function(materials){
        materials.preload();
 
           const loader = new OBJLoader();
           loader.setMaterials(materials);
            loader.load(
                './gcw/carros/carro_normal.obj', // Ruta de tu archivo OBJ
                function (object) {
              //    handleObjectMovement(object, { left: 37, right: 39, up: 38, down: 40  });
                 object.scale.set(.05,.05,.05);
                  object.position.set(0,5,0);
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


export function loadconvertiblecar(scene){

        // Cargar el modelo OBJ
        const mtlLoader2 = new MTLLoader();
        mtlLoader2.load('./gcw/carros/convertible.mtl',
        function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/carros/convertible.obj', // Ruta de tu archivo OBJ
                  function (object) {
                   
            //       handleObjectMovement2(object, { left: 65, right: 68, up: 87, down: 83 });
                   object.scale.set(.05,.05,.05);
                    object.position.set(5,0,0);
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


export function loadeportivecar(scene){
    
          // Cargar el modelo OBJ
        const mtlLoader3 = new MTLLoader();
        mtlLoader3.load('./gcw/carros/deportivo.mtl',
        function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/carros/deportivo.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.05,.05,.05);
                    object.position.set(-10,0,0);
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


export function loadlambocar(scene){
    
               // Cargar el modelo OBJ
        const mtlLoader4 = new MTLLoader();
    mtlLoader4.load('./gcw/carros/lambo.mtl',
        function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/carros/lambo.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.05,.05,.05);
                    object.position.set(-20,0,0);
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


export function loadmusclecar(scene){
                  // Cargar el modelo OBJ
                  const mtlLoader5 = new MTLLoader();
                  mtlLoader5.load('./gcw/carros/muscle.mtl',
                  function(materials){
             materials.preload();
      
                const loader = new OBJLoader();
                loader.setMaterials(materials);
                 loader.load(
                     './gcw/carros/muscle.obj', // Ruta de tu archivo OBJ
                     function (object) {
      
                      object.scale.set(.05,.05,.05);
                       object.position.set(10,0,0);
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