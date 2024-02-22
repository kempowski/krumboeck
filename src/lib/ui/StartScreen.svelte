<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three'
    // import { GLTFLoader } from 'three/examples/jsm/Addons.js';

    let renderer;
    let scene;
    let camera;
    let cube;
    
    // const loader = new GLTFLoader();
    // loader.load(
    //   '/'
    // )

  
    onMount(() => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,  0.1,  1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      let wrap = document.getElementById("3dScene")
      wrap.appendChild(renderer.domElement);
  
      const geometry = new THREE.BoxGeometry(3, 3, 3);
      const wireframeGeometry = new THREE.WireframeGeometry(geometry)
      const material = new THREE.LineBasicMaterial({ color:  0xffffff, linewidth: 2 });
      // cube = new THREE.Mesh(geometry, material);
      const wireframe = new THREE.LineSegments(wireframeGeometry, material)
      scene.add(wireframe);
  
      camera.position.z =  6;
  
      const animate = () => {
        requestAnimationFrame(animate);
        // wireframe.rotation.x +=  0.01;
        wireframe.rotation.y +=  0.01;
        renderer.render(scene, camera);
      };
  
      animate();
    });

    
    onDestroy(() => {
    // Clean up your Three.js scene here
    if (renderer) {
      renderer.dispose();
    }
  });
  </script>
  
  
  <div id="3dScene"></div>