import { Col } from "react-bootstrap";

import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {

  const openImageInNewTab = () => {
    window.open(imgUrl, '_blank');
  }

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} onClick={openImageInNewTab} className="cursor-pointer" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary mt-2">View this project</button>
            </a>
          )}

          </div>
        </div>
      </div>
    </Col>
  )
}
