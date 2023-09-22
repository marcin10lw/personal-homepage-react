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
  return (
    <>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={onLinkFocus}
          onBlur={onLinkBlur}
        >
          view peoject
        </a>
      )}
      {codeUrl && (
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={onLinkFocus}
          onBlur={onLinkBlur}
        >
          view code
        </a>
      )}
      {documentationUrl && (
        <a
          href={documentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={onLinkFocus}
          onBlur={onLinkBlur}
        >
          view documentation
        </a>
      )}
    </>
  );
};

export default ProjectLinks;
