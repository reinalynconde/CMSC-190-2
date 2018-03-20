import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements AfterViewInit {
  notStart = true;
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  scene = null;
  camera = null;
  cube = null;
  materials = null;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
    this.camera.position.z = 1000;

    this.createRubixMaterial();

    var geometry = new THREE.BoxGeometry( 700, 700, 700 );
    var material = new THREE.MultiMaterial( this.materials );
    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
  }

  createRubixMaterial() {
    var material1 = new THREE.MeshBasicMaterial( {color: 0x8dff76,
      transparent: true, opacity: 0.8} );
    var material2 = new THREE.MeshBasicMaterial( {color: 0xa9ffc6,
      transparent: true, opacity: 0.8} );
    var material3 = new THREE.MeshBasicMaterial( {color: 0x72dbff,
      transparent: true, opacity: 0.8} );
    var material4 = new THREE.MeshBasicMaterial( {color: 0x7cb6ff,
      transparent: true, opacity: 0.8} );
    var material5 = new THREE.MeshBasicMaterial( {color: 0xab94ff,
      transparent: true, opacity: 0.8} );
    var material6 = new THREE.MeshBasicMaterial( {color: 0xab94ff,
      transparent: true, opacity: 0.8} );
  
    this.materials = [material1, material2, material3, material4, material5, material6];
  }

  start(): void {
    this.notStart = false;
  }

  ngAfterViewInit() {
    this.renderer.setSize(600, 400);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
  }
}
