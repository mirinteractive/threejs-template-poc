import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as dat from 'lil-gui'
import * as environment from './environment'
import * as objects from './objects'
import sampleVertexShader from './shaders/sample/vertex.glsl'
import sampleFragmentShader from './shaders/sample/fragment.glsl'

const scene = new THREE.Scene()
const sizes = { width: window.innerWidth, height: window.innerHeight}

scene.background = new THREE.Color('#8b9dc3')

const renderer = new THREE.WebGLRenderer({
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMappingExposure = 3
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
)
camera.position.set(-5,1,0)

new OrbitControls(camera, renderer.domElement)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    render()
}

const gui = new dat.GUI()

environment.basicSceneAdd(scene)
environment.addGui(gui)
objects.basicSceneAdd(scene)

function animate() {
    requestAnimationFrame(animate)
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()