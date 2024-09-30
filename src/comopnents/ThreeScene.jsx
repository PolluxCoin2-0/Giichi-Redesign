import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json"; // Load the font

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create balls geometry
    const ballGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const balls = [];

    for (let i = 0; i < 30; i++) {
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.set(Math.random() * 8 - 4, 15 + Math.random() * 5, Math.random() * 8 - 4);
      scene.add(ball);
      balls.push(ball);
    }

    // Set camera position
    camera.position.z = 15;

    // Load font for text geometry
    const loader = new FontLoader();
    const font = loader.parse(helvetiker); // Parse the font JSON

    // Create the positions where balls will form the letters
    const createTextPoints = (text) => {
      const textGeo = new TextGeometry(text, {
        font: font,
        size: 1.2,
        height: 0.1,
        curveSegments: 12,
      });

      textGeo.computeBoundingBox();
      const centerOffset =
        -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(textGeo, material);

      textMesh.position.x = centerOffset;
      textMesh.position.y = 0;
      textMesh.position.z = 0;

      const vertices = textMesh.geometry.attributes.position.array;
      const points = [];

      // Extract only the x, y, and z coordinates of the text geometry
      for (let i = 0; i < vertices.length; i += 3) {
        points.push({
          x: vertices[i],
          y: vertices[i + 1],
          z: vertices[i + 2],
        });
      }

      return points; // Return the array of points to position the balls
    };

    const textPoints = createTextPoints("Giichi");

    

    // Animation using GSAP for falling balls
    balls.forEach((ball, index) => {
      gsap.to(ball.position, {
        y: 0, // Balls fall to the bottom
        duration: 2 + index * 0.2, // Staggered fall duration
        ease: "bounce.out",
        onComplete: () => {
          if (index === balls.length - 1) {
            formTextWithBalls();
          }
        },
      });
    });

    // Function to move the balls to form the text "Giichi"
    const formTextWithBalls = () => {
      // Loop through each ball and move it to the corresponding text point
      balls.forEach((ball, index) => {
        const point = textPoints[index % textPoints.length]; // Loop through text points if more balls than points
        gsap.to(ball.position, {
          x: point.x,
          y: point.y,
          z: point.z,
          duration: 2,
          ease: "power3.inOut",
          delay: index * 0.05, // Add slight delay between each ball movement
        });
      });
    };

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function when component unmounts
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeScene;
