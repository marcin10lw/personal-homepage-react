type ProjectLinksProps = {
  liveUrl: string;
  codeUrl?: string;
  onLinkFocus: () => void;
  onLinkBlur: () => void;
};

const ProjectLinks = ({
  liveUrl,
  codeUrl,
  onLinkBlur,
  onLinkFocus,
}: ProjectLinksProps) => {
  return (
    <>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onFocus={onLinkFocus}
        onBlur={onLinkBlur}
      >
        view peoject
      </a>
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
    </>
  );
};

export default ProjectLinks;
