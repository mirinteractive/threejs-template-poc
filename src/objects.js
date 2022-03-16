import * as THREE from 'three'

const testSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshStandardMaterial()
) 

const basicSceneAdd=(scene)=>{
    scene.add(testSphere)
}
export { basicSceneAdd }