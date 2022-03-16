import * as THREE from 'three'

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(0, 0.25, 0)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05

const planeSample = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({color: '#dfe3ee'}))
planeSample.rotation.set(-Math.PI*0.5, 0, 0)
planeSample.position.set(0, -2, 0)

const basicSceneAdd=(scene)=>{
  scene.add(ambientLight, directionalLight, planeSample)
}

const addGui=(gui)=>{
  const lightFolder = gui.addFolder('Light')
  lightFolder.add(directionalLight, 'intensity').min(0).max(10).step(0.001).name(directionalLight.type)
  lightFolder.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001).name('lightX')
  lightFolder.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001).name('lightY')
  lightFolder.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001).name('lightZ')
}

export { basicSceneAdd, addGui }