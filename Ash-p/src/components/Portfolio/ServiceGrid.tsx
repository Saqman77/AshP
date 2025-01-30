import React, { useEffect } from "react";

interface Project {
  project: string | null;
  link: string | null;
}

interface Genre {
  genre: string;
  projects: Project[];
}

interface Client {
  name: string;
  genres: Genre[];
}

interface Service {
  service: string;
  clients: Client[];
}

interface ServiceGridProps {
  isVisible: boolean;
  service: Service;
  close: () => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ isVisible, service, close }) => {
//   useEffect(() => {
//     if (!isVisible) return;

//     const handleScroll = () => {
//       close();
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isVisible, close]);

  if (!isVisible) return null;

  return (
    <div className="past-wrapper">
      <div className="past-heading">
        <h3 className="s-heading">{service.service}</h3>
        <div className="past-close">
          <button
            onClick={close}
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: "rotate(45deg) translateY(-50%)",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: "rotate(-45deg) translateY(-50%)",
              }}
            />
          </button>
        </div>
      </div>

      <div className="past-work">
        {service.clients.flatMap((client) =>
          client.genres.flatMap((genre) =>
            genre.projects
              .filter((project) => project.project !== null) // Remove empty projects
              .map((project, index) => (
                <div key={index} className="past-card">
                  <h4 className="past-cardheading" >{client.name}</h4>
                  <p className="project-title">
                    {project.project}
                  </p>
                  <p className="genre">
                   {genre.genre}
                  </p>
                  {project.link && (
                    <p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))
          )
        )} 
      </div>
    </div>
  );
};

export default ServiceGrid;
