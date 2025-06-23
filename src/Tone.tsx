import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
interface ToneProps {
  mapping: string;
  exposure: number;
}
const Tone: React.FC<ToneProps> = ({ mapping, exposure }) => {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const prevFrag = THREE.ShaderChunk.tonemapping_pars_fragment;
    const prevTonemapping = gl.toneMapping;
    const prevTonemappingExp = gl.toneMappingExposure;
    THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
      'vec3 CustomToneMapping( vec3 color ) { return color; }',
      `float startCompression = 0.8 - 0.04;
       float desaturation = 0.15;
       vec3 CustomToneMapping( vec3 color ) {
         color *= toneMappingExposure;
         float x = min(color.r, min(color.g, color.b));
         float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
         color -= offset;
         float peak = max(color.r, max(color.g, color.b));
         if (peak < startCompression) return color;
         float d = 1. - startCompression;
         float newPeak = 1. - d * d / (peak + d - startCompression);
         color *= newPeak / peak;
         float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
         return mix(color, vec3(1, 1, 1), g);
       }`,
    );
    // @ts-expect-error [Types of each THREE constructor is not available]
    gl.toneMapping = THREE[mapping + 'ToneMapping'];
    gl.toneMappingExposure = exposure;
    return () => {
      // Restore on unmount or data change
      gl.toneMapping = prevTonemapping;
      gl.toneMappingExposure = prevTonemappingExp;
      THREE.ShaderChunk.tonemapping_pars_fragment = prevFrag;
    };
  }, [mapping, exposure, gl]);
  // Return null as Tone component does not render any JSX
  return null;
};
export default Tone;





