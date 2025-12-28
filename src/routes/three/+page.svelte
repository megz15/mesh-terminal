<script lang="ts">
    import * as THREE from "three"
    import { onMount } from "svelte"
    let container: HTMLDivElement
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let cube: THREE.Mesh
    
    onMount(() => {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1,1.1,1.2)
        const material = new THREE.MeshBasicMaterial({ color: 0xfacc15 })
        cube = new THREE.Mesh(geometry, material)
        cube.add(new THREE.AxesHelper(1.5))
        cube.add(new THREE.GridHelper(10, 10, 0xfacc15, 0xffffff))
        cube.add(new THREE.LineSegments(new THREE.WireframeGeometry(geometry), new THREE.LineBasicMaterial({ color: 0x000000 })))
        
        scene.background = new THREE.Color("#030712")
        scene.add(cube)

        camera.position.z = 5

        const animate = function () {
            requestAnimationFrame(animate)

            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            renderer.render(scene, camera)
        }

        animate()
    })
</script>

<div bind:this={container} class="w-full h-[calc(100vh-5rem)]"></div>