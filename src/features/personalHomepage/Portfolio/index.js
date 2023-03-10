import {
  StyledPortfolio,
  PortfolioIcon,
  PortfolioHeader,
  PortfolioDescription,
  PortfolioWrapper,
  PortfolioList,
} from "./styled";
import Project from "./Project";
import { useSelector } from "react-redux";
import { selectProjects, selectStatus } from "../projectsSlice";
import Loading from "../Loading";
import Error from "../Error";

const Portfolio = () => {
  const projects = useSelector(selectProjects);
  const status = useSelector(selectStatus);

  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioDescription>My recent projects</PortfolioDescription>
      </PortfolioWrapper>
      {status === "error" && <Error />}
      {status === "pending" && <Loading />}
      {status === "success" && (
        <PortfolioList>
          {projects.map((project) => (
            <Project
              key={project.id}
              projectName={project.name}
              description={project.description}
              code={project.html_url}
              userName={project.owner.login}
            />
          ))}
        </PortfolioList>
      )}
    </StyledPortfolio>
  );
};

export default Portfolio;
