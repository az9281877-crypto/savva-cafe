type MediaProps = {
  alt: string;
  label: string;
  tone: string;
  ratio?: string;
  className?: string;
};

export default function Media({ alt, label, tone, ratio = "square", className = "" }: MediaProps) {
  return (
    <div
      className={`media-placeholder media-placeholder--${ratio} media-placeholder--${tone} ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="media-placeholder__mark" aria-hidden="true">ساڤا</span>
      <span className="media-placeholder__label">{label}</span>
    </div>
  );
}
