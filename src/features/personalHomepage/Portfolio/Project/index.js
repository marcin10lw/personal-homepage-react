import {
  StyledProject,
  ProjectName,
  ProjectDescription,
  ProjectDemo,
  ProjectCode,
  ProjectLink,
} from "./styled";

const Project = ({ projectName, description, code, userName }) => {
  return (
    <StyledProject>
      <ProjectName>{projectName}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectDemo>
        Demo:
        <ProjectLink
          href={`https://${userName}.github.io/${projectName}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`https://${userName}.github.io/${projectName}/`}
        </ProjectLink>
      </ProjectDemo>
      <ProjectCode>
        Code:
        <ProjectLink href={code} target="_blank" rel="noopener noreferrer">
          {code}
        </ProjectLink>
      </ProjectCode>
    </StyledProject>
  );
};

export default Project;
