import { Center, Plane, useVideoTexture } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import { useState, useMemo, useRef, useEffect } from "react";
import { Root, Container } from "@react-three/uikit";
import { PlayIcon, PauseIcon, RotateCcwIcon } from "@react-three/uikit-lucide";
import { Button } from './components/apfel/button';
import { DoubleSide } from "three";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useSpring } from '@react-spring/three';

interface VideoPlayerProps extends GroupProps {
  src: string;
}

export default function VideoPlayer({ src, ...rest }: VideoPlayerProps) {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [showControlsOpacity, setShowControlsOpacity] = useState(0);
  const [showPlaybackButton, setShowPlaybackButton] = useState(true);
  const [showPlaybackButtonOpacity, setShowPlaybackButtonOpacity] = useState(0);
  const [paused, setPaused] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const ratio = 16 / 9;
  const z = 0;
  const r = useMemo(() => (video ? video.videoWidth / video.videoHeight : ratio), [video, ratio]);

  const handleMouseEnter = () => {
    setShowControls(true);
    setShowPlaybackButton(true);
    clearTimeout(hideTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowPlaybackButton(false);
    }, 1000); // 1 second delay
    setShowControls(false);
  };

  const handleReplay = () => {
    if (video) {
      video.currentTime = 0;
      video.play();
      video.muted = false; // Ensure audio is always on
      setPaused(false);
    }
  };

  const handlePlayback = () => {
    if (video) {
      if (video.paused) {
        setPaused(false);
        video.play();
        video.muted = false; // Ensure audio is always on
      } else {
        setPaused(true);
        video.pause();
      }
    }
    clearTimeout(hideTimeoutRef.current);
  };

  useEffect(() => {
    return () => clearTimeout(hideTimeoutRef.current); // Cleanup on component unmount
  }, []);

  const controlsAnimation = useSpring({
    opacity: showControls ? 1 : 0,
    playback_button_opacity: showPlaybackButton ? 1 : 0,
    config: { duration: 120 }, // Animation duration in ms
  });

  useFrame(() => {
    // @ts-expect-error - `_value` is private but we need it
    if (controlsAnimation?.opacity?.animation?.values?.[0]?._value) {
      // @ts-expect-error - `_value` is private but we need it
      setShowControlsOpacity(controlsAnimation.opacity.animation.values[0]._value);
    }

    // @ts-expect-error - `_value` is private but we need it
    if (controlsAnimation?.playback_button_opacity?.animation?.values?.[0]?._value) {
      // @ts-expect-error - `_value` is private but we need it
      setShowPlaybackButtonOpacity(controlsAnimation.playback_button_opacity.animation.values[0]._value);
    }
  });

  return (
    <group {...rest}>
      <Center position-z={z}>
        <Interactive onSelectEnd={handlePlayback} onHover={handleMouseEnter} onBlur={handleMouseLeave}>
          <PlayerPlane size={10} aspectRatio={ratio} src={src} setVideo={setVideo}>
            {video && (
              <group onPointerUp={handlePlayback} onPointerOver={handleMouseEnter} onPointerOut={handleMouseLeave}>
                <Root
                  transformTranslateZ={10}
                  flexShrink={0}
                  depthTest={true}
                  sizeX={10}
                  sizeY={10 / r}
                  flexDirection="row"
                  paddingY={32}
                  paddingX={32}
                  justifyContent={"flex-end"}
                  alignItems={"flex-end"}
                  gapColumn={20}
                >
                  <Container>
                    <Interactive onSelectEnd={handleReplay}>
                      <Button variant="icon" size="xl">
                        <RotateCcwIcon width={64} height={64} color={"white"} opacity={showControlsOpacity} />
                      </Button>
                    </Interactive>
                  </Container>
                </Root>
              </group>
            )}
            {video && (
              <group>
                <Root
                  transformTranslateZ={10}
                  flexShrink={0}
                  depthTest={true}
                  sizeX={10}
                  sizeY={10 / r}
                  flexDirection="row"
                  padding={16}
                  justifyContent={"center"}
                >
                  <Container alignItems={"center"} onPointerUp={handlePlayback}>
                    <Interactive onSelectEnd={() => handlePlayback()}>
                      <Button variant="icon" size="xl">
                        {paused ? (
                          <PlayIcon width={64} height={64} color={"white"} opacity={showPlaybackButtonOpacity} />
                        ) : (
                          <PauseIcon width={64} height={64} color={"white"} opacity={showPlaybackButtonOpacity} />
                        )}
                      </Button>
                    </Interactive>
                  </Container>
                </Root>
              </group>
            )}
          </PlayerPlane>
        </Interactive>
      </Center>
    </group>
  );
}

interface PlayerPlaneProps {
  size: number;
  aspectRatio: number;
  src: string;
  setVideo: React.Dispatch<React.SetStateAction<HTMLVideoElement | null>>;
  children: React.ReactNode;
}

const PlayerPlane = ({ size, aspectRatio, src, setVideo, children }: PlayerPlaneProps) => {
  const texture = useVideoTexture(src);
  const [planeSize, setPlaneSize] = useState([size, size]);

  useEffect(() => {
    if (texture.image) {
      const videoWidth = texture.image.videoWidth;
      const videoHeight = texture.image.videoHeight;
      const ratio = videoHeight / videoWidth;
      const newSize = [size, size * ratio];
      setPlaneSize(newSize);
      setVideo?.(texture.image);
      texture.image.pause();
    }
  }, [texture, size, aspectRatio, setVideo]);

  return (
    <Plane args={[planeSize[0], planeSize[1], 1, 1]} castShadow receiveShadow>
      <meshStandardMaterial
        side={DoubleSide}
        map={texture}
        toneMapped={false}
        depthWrite={false}
      />
      {children}
    </Plane>
  );
};
