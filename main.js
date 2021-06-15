import './style.css'
import './components/animate.js'

import * as THREE from "three";
const book = document.getElementById('book');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

book.appendChild(renderer.domElement);

//Cube

const ambiant = new THREE.AmbientLight(0x222222);
scene.add(ambiant);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 0, 6) // 6 потому что позиция камеры по z = 6
scene.add(light);

const loader = new THREE.TextureLoader();

const images = [
  'assets/img/edje.jpg' , 'assets/img/spin.jpg',
  'assets/img/top.jpg', 'assets/img/bottom.jpg',
  'assets/img/front.jpg', 'assets/img/back.jpg'
]

const materials = images.map(image => {
  return new THREE.MeshLambertMaterial({
    map: loader.load(image)
  })
});

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
// const material = new THREE.MeshLambertMaterial({
//   // color: 0x2727e6
//   map: loader.load('assets/img/mk.jpg')
// });

const cube = new THREE.Mesh(geometry, materials); // materials которые перебираем мэпом
scene.add(cube);

let current = window.pageYOffset / 1300 // 1300 потому что в боди так 
let currentAnim = window.pageYOffset / 1300 // необходимо обновлять


function animate() {
  requestAnimationFrame(animate);
  // для smoоth эффекта 
  current += (currentAnim - current) * 0.02; 

  // const rotX = current * Math.PI;
  const rotX = current * -0.5 + 0.5;
  // const rotY = current * Math.PI * 2;
  const rotY = (current *0.9 +0.1) * Math.PI * 2;

  cube.rotation.set(rotX, rotY, 0);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('scroll', function(){
  currentAnim = window.pageYOffset / 1300
})

