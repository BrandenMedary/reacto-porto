import React from "react";



const projectList = [

    {
        title: 'ListRx',
        image: '',
        preview: 'https://listrx.herokuapp.com/',
        gitHubLink: 'https://github.com/infojunkie01/ListRxs'
    },
    {
        title: 'Much Better Dictionary',
        image: '',
        preview: 'https://muchbetterdictionary.github.io/MuchBetterDictionary/',
        gitHubLink: 'https://github.com/MuchBetterDictionary'
    },
    {
        title: 'Gobbler',
        image: '',
        preview: 'https://quiet-harbor-99755.herokuapp.com/',
        gitHubLink: 'https://github.com/randronaco1027/gobbler'
    },
 
]

function Project() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {projectList.map((project) => (
                    <div className="project-entry mb-4 p-5 md-4">
                        <h5>{project.title}</h5>
                        <p> <a href={project.gitHubLink} target="_blank">Github </a> </p>
                        <a href={project.preview}> <img src={project.image} width="300" /> </a>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default Project;