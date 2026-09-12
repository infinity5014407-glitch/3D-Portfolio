import * as THREE from "three";

export function initHero3D() {
  const canvas = document.querySelector("#hero-canvas");

  if (!canvas) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: "low-power"
  });

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 1)
  );

  renderer.setSize(
    window.innerWidth,
    window.innerHeight,
    false
  );

  /* Main geometric object */

  const geometry = new THREE.IcosahedronGeometry(1.5, 2);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.14
  });

  const object = new THREE.Mesh(
    geometry,
    material
  );

  scene.add(object);

  /* Lightweight particle field */

  const particleCount = 220;

  const positions = new Float32Array(
    particleCount * 3
  );

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] =
      (Math.random() - 0.5) * 15;
  }

  const particleGeometry =
    new THREE.BufferGeometry();

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );

  const particleMaterial =
    new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.016,
      transparent: true,
      opacity: 0.35
    });

  const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
  );

  scene.add(particles);

  /* Mouse */

  const mouse = {
    x: 0,
    y: 0
  };

  let targetX = 0;
  let targetY = 0;

  window.addEventListener(
    "mousemove",
    (event) => {
      targetX =
        (event.clientX / window.innerWidth) * 2 - 1;

      targetY =
        -(event.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true }
  );

  function resize() {
    camera.aspect =
      window.innerWidth /
      window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
      window.innerWidth,
      window.innerHeight,
      false
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1)
    );
  }

  window.addEventListener(
    "resize",
    resize,
    { passive: true }
  );

  /*
    Fixed timestep animation.

    This prevents animation speed from changing wildly
    when Lenis is moving the document.
  */

  let lastTime = performance.now();
  let accumulator = 0;

  const FRAME_TIME = 1000 / 45;

  function animate(now) {
    requestAnimationFrame(animate);

    const delta =
      Math.min(now - lastTime, 50);

    lastTime = now;
    accumulator += delta;

    if (accumulator < FRAME_TIME) {
      return;
    }

    accumulator = 0;

    mouse.x +=
      (targetX - mouse.x) * 0.035;

    mouse.y +=
      (targetY - mouse.y) * 0.035;

    const time =
      now * 0.0001;

    object.rotation.x =
      time * 8 +
      mouse.y * 0.15;

    object.rotation.y =
      time * 10 +
      mouse.x * 0.2;

    particles.rotation.y =
      time * 1.5;

    particles.rotation.x =
      mouse.y * 0.05;

    renderer.render(
      scene,
      camera
    );
  }

  requestAnimationFrame(animate);
}
