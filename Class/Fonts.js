import {TextGeometry} from "../Loaders/TextGeometry.js";  
import {FontLoader} from "../Loaders/FontLoader.js";
import * as THREE from "../three.module.js";

export function texthola(scene){
    
    const fontLoader = new FontLoader();
    fontLoader.load(
    '../Fonts/gentilis_regular.typeface.json',
    (font)=>{
        const textGeometry = new TextGeometry('Hola mundo',{
            height:2,
            size:10,
            font: font,

        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry,textMaterial);
        textMesh.position.set(0,40,0);
        scene.add(textMesh);
    }




    );

}

export function textselect(scene){
    
    const fontLoader = new FontLoader();
    fontLoader.load(
    '../Fonts/gentilis_regular.typeface.json',
    (font)=>{
        const textGeometry = new TextGeometry('Escoge tu vehiculo',{
            height:2,
            size:4,
            font: font,

        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry,textMaterial);
        textMesh.position.set(-20,10,0);
        scene.add(textMesh);
    }




    );

}