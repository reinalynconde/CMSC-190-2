import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Renderer2, Input } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { Router } from '@angular/router';
import { OrigamiService } from '../services/origami.service';
import * as THREE from 'three';var OrbitControls = require('three-orbit-controls')(THREE)
var OBJLoader = require('three-obj-loader')(THREE)
var TrackballControls = require('three-trackballcontrols')
var loader = new THREE.OBJLoader()
var object;

import Scene = THREE.Scene;
import Mesh = THREE.Mesh;
import PerspectiveCamera = THREE.PerspectiveCamera;
import WebGLRenderer = THREE.WebGLRenderer;

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements AfterViewInit {
  notStart = true;
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  @Input()
  private path:string;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private controls: any;
  private controller: any;
  private r: number;

  ngOnInit(): void {
    //add listener for the resize of the window - will resize the renderer to fit the window
    let global = this.render.listen('window', 'resize', (evt) => {
      this.onWindowResize();
    })
  }

  ngAfterViewInit(): void {
    this.init3D();
  }

  constructor( private router: Router, private render: Renderer2, private socialAuthService: AuthService, private origamiService: OrigamiService ){
    localStorage.setItem('home', '/model');
    this.path = "assets/webgl/origami.obj";
    this.r = 20;
  }

  init3D(){
    // renderer
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    // scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x00ff99 );

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
          var material = new THREE.MeshBasicMaterial( {
              color: 0x00ff99,
              polygonOffset: true,
              polygonOffsetFactor: 1, // positive value pushes polygon further away
              polygonOffsetUnits: 1
          } );

          child.material = material

          /* // wireframe
          var geo = new THREE.WireframeGeometry(child.geometry); // or WireframeGeometry
          var mat = new THREE.LineBasicMaterial( { color: 0xa2a276, linewidth: 1 } );
          var wireframe = new THREE.LineSegments( geo, mat );
          child.add( wireframe ); */
        }
      })

      geometry.position.y -= 20;
      geometry.rotation.x = 20* Math.PI / 180;
      geometry.scale.x = 30;
      geometry.scale.y = 30;
      geometry.scale.z = 30;
      object = geometry;
      this.scene.add(object)
    })

    //request animation
    this.animate();
    this.resize();

  }

  start(): void {
    this.notStart = false;
    /*var date = new Date();
    var id = "" + date.getMonth() + date.getDate() + date.getFullYear()
          + date.getHours() + date.getMinutes() + date.getSeconds()
          + date.getMilliseconds();
    localStorage.setItem('now', id);*/
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
      window.requestAnimationFrame(() => this.animate());
      object.rotation.y += 0.008;
      this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.controller.update();
    // this.controls.update();
  }

  public signOut() {
    this.socialAuthService.signOut();
  }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    var date = new Date();
    var id = "" + date.getMonth() + date.getDate() + date.getFullYear()
          + date.getHours() + date.getMinutes() + date.getSeconds()
          + date.getMilliseconds();

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        this.origamiService.sendToRestApiMethod(userData.idToken, userData.email, id)
        .subscribe(res => {
          //login was successful
          //save the token that you got from your REST API in your preferred location i.e.$
          localStorage.setItem('token', userData.idToken);
          localStorage.setItem('now', id);
          localStorage.setItem('email', userData.email);
          console.log("login successful ");

          if(res.message == 'ongoing') {
            this.router.navigateByUrl('/processing');
          } else if(res.message == 'done') {
            this.router.navigateByUrl('/model');
          } else this.router.navigateByUrl('/input');
        }, err => {
          //login was unsuccessful
          //show an error message
          console.log("error logging in");
      });
    });
  }
}
