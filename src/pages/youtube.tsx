import dynamic from "next/dynamic";
import { useState } from "react";

const YoutubeVideo = dynamic(() => import("@/components/YoutubeVideo"));

export default function PageYoutube() {
  const [isVisible, setIsVisible] = useState(false);

  const canShowVideo = isVisible && <YoutubeVideo />;

  return (
    <div>
      <p>
        Mostrar Vídeo
        <input type="checkbox" onChange={() => setIsVisible(!isVisible)} />
      </p>

      {canShowVideo}
    </div>
  );
}
