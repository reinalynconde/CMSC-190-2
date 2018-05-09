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

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
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
export class ModelComponent implements OnInit {
  //assets/samples/obj
  @ViewChild("modelContainer") rendererContainer: ElementRef;
  @Input()
  public path:string;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private controls: any;
  private controller: any;
  private r: number;
  public images: Array<Image> = [];
  private files: Array<any> = [];
  public isLoading = true;

  noModel = false;

  constructor(private render: Renderer2, private origamiService: OrigamiService) {
    localStorage.setItem('home', '/model');
    this.origamiService.sendMsg("dc");
    this.path = localStorage.getItem('now') + "/output/mesh.obj";
    this.images = this.getImages(localStorage.getItem('now') + "/output/");
    this.r = 20;
  }

  ngOnInit(): void {
    this.origamiService.messages.subscribe(msg => {
      if(msg == "no")
        this.noModel = true;
    })
    //add listener for the resize of the window - will resize the renderer to fit the window
    let global = this.render.listen('window', 'resize', (evt) => {
      this.onWindowResize();
    })
  }

  ngAfterViewInit(): void {
    if(!this.noModel){
      this.init3D();
      this.isLoading = false;
    }
  }

  getImages(path) {
    var img, x = 0;
    var list = [];
    while(x < 16) {
      img = localStorage.getItem(x + '');
      if(img)
        list.push(new Image(path + img, path + img));
      else break;
    }

    return list;
  }

  init3D(){
    // renderer
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;

    // scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xffffff );

    // camera
    this.camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.01, 10000 );
    this.camera.position.set( 113, 111, 113 );
    this.camera.aspect = window.innerWidth / window.innerHeight;

    // controls
    // this.controls = new DragControls(this.camera);
    this.controller = new TrackballControls( this.camera);

    // lights
    var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
    this.scene.add( ambientLight );
    var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
    this.camera.add( pointLight );
    this.scene.add( this.camera );

    var material = new THREE.MeshLambertMaterial( {
      color: 0x003366,
      polygonOffset: true,
      polygonOffsetFactor: 1, // positive value pushes polygon further away
      polygonOffsetUnits: 1
    } );

    loader.load(this.path, geometry => {
      geometry.traverse(child => {
        if(child instanceof THREE.Mesh) {
          child.material = material
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
          child.geometry.computeVertexNormals();
        }

      })

      geometry.position.y -= 20; 
      geometry.scale.x = 40;
      geometry.scale.y = 20;
      geometry.scale.z = 20;
      this.scene.add(geometry);
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
    
      this.camera.lookAt( this.scene.position );
      this.renderer.setPixelRatio( window.devicePixelRatio );
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
