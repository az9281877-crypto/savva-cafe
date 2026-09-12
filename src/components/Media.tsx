import { withBase } from "../lib/paths";

type MediaProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  ratio?: string;
  className?: string;
  position?: string;
  credit?: string;
  eager?: boolean;
};

export default function Media({
  alt,
  src,
  width,
  height,
  ratio = "square",
  className = "",
  position = "50% 50%",
  credit,
  eager = false,
}: MediaProps) {
  return (
    <div className={`media-frame media-frame--${ratio} ${className}`}>
      <img
        src={withBase(import.meta.env.BASE_URL, src)}
        alt={credit ? `${alt} — ${credit}` : alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        style={{ objectPosition: position }}
      />
      {credit ? <span className="media-frame__credit">{credit}</span> : null}
    </div>
  );
}
