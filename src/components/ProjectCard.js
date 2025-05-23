import { Col } from "react-bootstrap";

export const ProjectCard = ({ projectUrl, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="project-column">
      <div className="proj-imgbx">
        <a href={projectUrl}>
          <img src={imgUrl} alt=""/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
