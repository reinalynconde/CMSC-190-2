import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as OBJLoadr from 'three-obj-loader'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements AfterViewInit {
  notStart = true;
  @ViewChild('modelContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();//({ alpha: true });
  scene = null;
  camera = null;
  materials = null;
  object = null;

  constructor() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00ff00);
    this.camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
    this.camera.position.z = 1000;

    var OBJLoader = OBJLoadr(THREE);
    var loader = new THREE.OBJLoader();

    loader.load(
      // resource URL
      'assets/webgl/f16-model.obj',
      // called when resource is loaded
      function ( obj ) {
        var material = new THREE.MeshBasicMaterial( { color: 0x006400 } );
        obj.traverse( function ( child ) {
        
            if ( child instanceof THREE.Mesh ) {
        
                child.material = material;
        
            }
        
        } ); 
        obj.scale.x = 100;
        obj.scale.y = 100;
        obj.scale.z = 100;
    
        scene.add( obj );
        // this.object = obj;
        
      },
      // called when loading is in progresses
      function ( xhr ) {
    
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      },
      // called when loading has errors
      function ( error ) {
    
        console.log( 'An error happened ');
    
      }
    );
  }

  ngAfterViewInit() {
    this.renderer.setSize(600, 400);
    this.renderer.setClearColor(0xB1B1B1, 0);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // this.animate();
  }

  /* animate() {
    window.requestAnimationFrame(() => this.animate());
      this.object.rotation.x += 0.01;
      this.object.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
  } */
}
