import React from 'react'
import avatar from "../../assets/about/avatar.png";

function About() {

  return (
    <section className="mb-5">
      <h2 id="about" className="d-flex justify-content-center ">About me</h2>
      <div className="d-flex justify-content-center mb-4">
        <img src={avatar} alt="avatar" className="col-1" />
      </div>
      <p className="col-11">
      Howdy! I am from shining Orlando, Florida, the city beautiful, where I graduated as a merit scholar and charter member from Lake Highland Preparatory School in 2016
        From there, I moved to snowy Ithaca, New York, to pursue a degree is applied psychologies with minors in neuroscience and religious studies, and in May 2020, I was awarded my bachelor's of science. 
        Over the past several years since graduating, I have been engaging in academic medicine at Weill Cornell Medicine and I have been able to produce multiple pieces of literature which has been reviewed and published in peer-reviewed academic journals.
        
        I have worked as a teacher assistant, clinical scribe, college tour guide, research assistant, biotechnology consultant, and medical education course coordinator, and I love to bring my experiences, enthusiasm, and endurance to anywhere the journey of my career takes me.
      </p>

    </section>
  )
}

export default About