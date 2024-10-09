import React, { useState } from "react";
import Slider from "react-slick";
import { FaCode, FaEye } from "react-icons/fa";
import "../styles/components/projectCard.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project }) => {
  const [readMore, setReadMore] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="project-card">
      <h3 className="title">{project.name}</h3>
      <div className="project-images">
        <Slider {...sliderSettings}>
          {project.imgs.map((img, index) => (
            <div key={index}>
              <img
                src={`${img}`}
                alt={`${project.name} screenshot`}
                className="image-slider"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="project-info">
        <p className={readMore ? "full-text" : "clamped-text"}>
          <strong>Tecnologias: </strong>
          {project.techs.join(", ")}
        </p>
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="read-more-btn"
        >
          {readMore ? "Ler menos" : "Ler mais..."}
        </button>
      </div>

      <div className="project-links">
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Demo <FaEye />
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer">
          Code <FaCode />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
