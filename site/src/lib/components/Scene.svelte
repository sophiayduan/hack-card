<script lang="ts">
  import { T } from '@threlte/core'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { interactivity, useCursor } from '@threlte/extras'
  import { useLoader } from '@threlte/core'
  import { GLTF, OrbitControls, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import * as THREE from 'three'

  const models = [
    'models/rudy_bcard.glb',
    // 'models/card-example-2.glb',
    // 'models/card-example-3.glb',
    // 'models/card-example-4.glb',
  ]

  let currentCard = $state(0)
  const scale = new Spring(0.17)
  const { onPointerEnter, onPointerLeave } = useCursor()

  let gltf = $derived(useGltf(models[currentCard]))

  export function next() {
    currentCard = (currentCard + 1) % models.length
  }

  export function prev() {
    currentCard = (currentCard - 1 + models.length) % models.length
  }

  interactivity()
  $effect(() => {
    if ($gltf) {
      $gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material]
          mats.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial && mat.name) {
              const match = mat.name.match(/Opaque\((\d+),(\d+),(\d+)\)/)
              if (match) {
                const [, r, g, b] = match.map(Number)
                mat.color.setRGB(r / 255, g / 255, b / 255)
              }
            }
          })
        }
      })
    }
  })

</script>


{#if $gltf}

<T.PerspectiveCamera
    makeDefault
    position={[1, 2, 0]}
    up={[1, 0, 0]}
>
    <!-- lookAt.y={0.5} -->
    <!-- fov={25} -->
    <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enableDamping
        enableZoom={false}
        maxPolarAngle={1.4}
        minPolarAngle={1.4}
    />
    </T.PerspectiveCamera>
    <T.DirectionalLight position={[5, 10, 3]} intensity={1}/>
    <T.AmbientLight intensity={1}/>
    {#key currentCard}
        <T is={$gltf.scene}
            scale={scale.current}

            onclick={() => {
            window.open("/custom", "_self");

            }}
            onpointerenter={() => {
            onPointerEnter()
            // scale.target = 0.019
            scale.target = 0.17
            }}
            onpointerleave={() => {
            onPointerLeave()
            // scale.target = 0.018
            scale.target = 0.17

            }}
            rotation={[1, -3.2, 2.6]}
            position={[0, -0.05, 0]}

        />
    {/key}
{/if}
