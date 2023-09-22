type ProjectLinksProps = {
  liveUrl?: string;
  codeUrl?: string;
  documentationUrl?: string | null;
  onLinkFocus: () => void;
  onLinkBlur: () => void;
};

const ProjectLinks = ({
  liveUrl,
  codeUrl,
  documentationUrl,
  onLinkBlur,
  onLinkFocus,
}: ProjectLinksProps) => {
  const Link = ({ href, title }: { href: string; title: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onFocus={onLinkFocus}
      onBlur={onLinkBlur}
    >
      {title}
    </a>
  );

  return (
    <>
      {liveUrl && <Link href={liveUrl} title="view project" />}
      {codeUrl && <Link href={codeUrl} title="view code" />}
      {documentationUrl && <Link href={documentationUrl} title="view docs" />}
    </>
  );
};

export default ProjectLinks;
