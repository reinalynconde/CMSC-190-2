import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Renderer2, Input } from '@angular/core';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE)
var OBJLoader = require('three-obj-loader')(THREE)
var TrackballControls = require('three-trackballcontrols')
// var DragControls = require('three-dragcontrols')
var loader = new THREE.OBJLoader()

import Scene = THREE.Scene;
import Mesh = THREE.Mesh;
import PerspectiveCamera = THREE.PerspectiveCamera;
import WebGLRenderer = THREE.WebGLRenderer;
<<<<<<< HEAD
=======
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';

import Image from '../models/image.model';
import { OrigamiService } from '../services/origami.service';
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
<<<<<<< HEAD
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
=======
  styleUrls: ['./sample.component.css'],
  animations: [
    trigger('imageState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SampleComponent implements OnInit {
  //assets/samples/obj
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a
  @ViewChild("modelContainer") rendererContainer: ElementRef;
  @Input()
  private path:string;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private controls: any;
  private controller: any;
  private r: number;
<<<<<<< HEAD

  constructor(private render: Renderer2) {
=======
  private images: Array<Image> = [];
  private files: Array<any> = [];

  constructor(private render: Renderer2, private origamiService: OrigamiService) {
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a
    this.path = "assets/webgl/scene_mesh_texture.obj";
    this.r = 20;
  }

  ngOnInit(): void {
    //add listener for the resize of the window - will resize the renderer to fit the window
    let global = this.render.listen('window', 'resize', (evt) => {
      this.onWindowResize();
    })
  }

  ngAfterViewInit(): void {
    this.init3D();
  }

  init3D(){
    // renderer
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    // scene
    this.scene = new THREE.Scene();
<<<<<<< HEAD
    this.scene.background = new THREE.Color( 0xFFFFFF );
=======
    this.scene.background = new THREE.Color( 0xffffff );
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a

    // camera
    this.camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.01, 10000 );
    this.camera.position.set( 113, 111, 113 );
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.scene.add( new THREE.AmbientLight( 0x222222 ) );
    this.scene.add( this.camera ); // required, because we are adding a light asd a child of the camera

    // controls
    // this.controls = new DragControls(this.camera);
    this.controller = new TrackballControls( this.camera);

    // lights
    var light = new THREE.PointLight( 0xffffff, 0.8 );
    this.camera.add( light );

    loader.load(this.path, geometry => {
      geometry.traverse(child => {
        if(child instanceof THREE.Mesh) {
          // mesh
<<<<<<< HEAD
          var material = new THREE.MeshPhongMaterial( {
              color: 0x0099cc,
=======
          var material = new THREE.MeshBasicMaterial( {
              color: 0x003366,
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a
              polygonOffset: true,
              polygonOffsetFactor: 1, // positive value pushes polygon further away
              polygonOffsetUnits: 1
          } );

          child.material = material

          // wireframe
          var geo = new THREE.WireframeGeometry(child.geometry); // or WireframeGeometry
<<<<<<< HEAD
          var mat = new THREE.LineBasicMaterial( { color: 0xa2a276, linewidth: 1 } );
=======
          var mat = new THREE.LineBasicMaterial( { color: 0x666633, linewidth: 1 } );
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a
          var wireframe = new THREE.LineSegments( geo, mat );
          child.add( wireframe );
        }
      })

<<<<<<< HEAD
      geometry.rotateX(90);
      geometry.rotateY(180);
      geometry.rotateZ(90);
=======
      geometry.position.y -= 20; 
>>>>>>> 0076c31d07d5baadac2aa6461bb19265061a6b5a
      geometry.scale.x = 40;
      geometry.scale.y = 20;
      geometry.scale.z = 20;
      this.scene.add(geometry)
    })

    //request animation
    this.animate();
    this.resize();

  }

  resize() {
    var width = this.renderer.domElement.clientWidth;
    var height = this.renderer.domElement.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width/height;
    this.controller.handleResize();
    // this.controls.handleResize();
  }

  animate() {
      window.requestAnimationFrame(_=>this.animate());    
      this.scene.rotation.y += 0.1 * Math.PI/180;
      this.controller.update();
      // this.controls.update();
      this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.controller.update();
    // this.controls.update();
  }

}
