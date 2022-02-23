import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../components/lib/Model';
import { LogoSpinner, LogoContainer } from './lib/Logo3DLoader';

function easeOutCircle(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Logo3D = () => {
    const refContainer = useRef();
    const [loading, setLoading] = useState(true);
    const [renderer, setRenderer] = useState();
    const [_cam, setCam] = useState();
    const [target] = useState(new THREE.Vector3(0.5, 1, 0));
    const [initCameraPos] = useState(new THREE.Vector3(50 * Math.sin(0.2 * Math.PI), 50, 20 * Math.cos(0.2 * Math.PI)));
    const [scene] = useState(new THREE.Scene());
    const [_contrls, setContrls] = useState();
    const handleWindowResize = useCallback(() => {
        const {current: container} = refContainer;
        if (container && renderer) {
            const sceneWidth = container.clientWidth;
            const sceneHeight = container.clientHeight;

            renderer.setSize(sceneWidth, sceneHeight);
        }
    }, [renderer]);

    useEffect(() => {
        const { current: container } = refContainer;
        if (container && !renderer) {
            const sceneWidth = container.clientWidth;
            const sceneHeight = container.clientHeight;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(sceneWidth, sceneHeight);
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer)

            const scale = sceneHeight * 0.005 + 3;
            const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000)
            camera.position.copy(initCameraPos);
            camera.lookAt(target);
            setCam(camera);

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setContrls(controls)

            loadGLTFModel(scene, '/logo3D.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initCameraPos;
                    const rotationSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

                    camera.position.y = 10;
                    camera.position.x = p.x * Math.cos(rotationSpeed) + p.z * Math.sin(rotationSpeed);
                    camera.position.z = p.z * Math.cos(rotationSpeed) - p.x * Math.sin(rotationSpeed);
                    camera.lookAt(target)
                } else {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req);
                renderer.dispose()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])
    
  
    return (
        <LogoContainer ref={refContainer}>
            {
                loading && <LogoSpinner/>
            }
        </LogoContainer>
    )
}

export default Logo3D