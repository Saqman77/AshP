import React from 'react'

interface Project {
  project: string;
  link?: string | null;
}

interface Genre {
  projects: Project[];
}

const ServProject: React.FC<{ genre: Genre }> = ({ genre }) => {
  return (
             <div>
                 <ul>
                  {genre.projects.map((project, index) => (
                    <li key={index}>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.project}
                        </a>
                      ) : (
                        project.project
                      )}
                    </li>
                  ))}
                             </ul>
             </div>
  )
}

export default ServProject