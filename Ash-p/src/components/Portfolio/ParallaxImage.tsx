import { useLenis } from "@studio-freight/react-lenis/types"
import { useRef, useEffect } from "react"

interface LerpFunction {
    (start: number, end: number, factor: number): number;
}

const lerp: LerpFunction = (start, end, factor) => start + (end - start) * factor;

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className }) => {

    const imageRef = useRef<HTMLImageElement | null>(null)
    const bounds = useRef<{ top: number; bottom: number } | null>(null)
    const currentTranslateY = useRef(0);
    const targetTranslateY = useRef(0);
    const rafId = useRef(null);

    useEffect(()=>{
        const updateBounds = () => {
            if(imageRef.current){
                const rect = imageRef.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY
                }
            }
        }

        updateBounds()
        window.addEventListener("resize", updateBounds)

        const animate = () => {
            if(imageRef.current){
                currentTranslateY.current = lerp(
                    currentTranslateY.current,
                    targetTranslateY.current,
                    0.1
                )
                if(Math.abs(currentTranslateY.current - targetTranslateY.current > 0.01))
            }
        }
    },[])

  return (
    <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
        style={{
            willChange:'transform',
            transform: 'translateY(0) scale(1.25)'
        }}
    />
  )
}

export default ParallaxImage