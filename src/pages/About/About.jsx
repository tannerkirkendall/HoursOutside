import './About.css'

function About(){
    return (
    
  
        <div className="container">
        <h1>Hours Outside Project</h1>
        <p class="details">I built the first version of the Hours Outside web app in 2022 to 
            help my wife track and meet her goal of spending 1000 hours outside with our 
            son. The original version was built on a node.js API and Vue JS front end.</p>
        
        <p class="details">This version of the app has a Ruby on Rails API with a Postgres 
            database sitting behind a React front end. The backend is an API only implementation 
            of rails built with the scaffolding and migrations tools. I choose to use the 
            Devise gem for authentication, then custom coded the rest of the API. The
             React project is build with Vite and only uses React components. </p>
        
        <p class="details">For hosting I choose a combination of Digital Ocean for the API 
            and database, and Firebase for the front end. I have github actions set up to 
            build the API as a docker container so I can easily deploy and manage API versions. </p>
        
        <p class="details">The primary goal of this project is to demonstrate my proficiency 
            with both Ruby on Rails and React frameworks. You can find the source code in the 
            GitHub repositories linked below.</p>

        <a href="https://github.com/tannerkirkendall/HoursOutside" target="_blank" class="github-link">View the React GitHub Repository</a> <br/>
        <a href="https://github.com/tannerkirkendall/HoursOutsideAPI" target="_blank" class="github-link">View the Ruby on Rails GitHub Repository</a> <br/>
        <a href="https://www.linkedin.com/in/tannerkirkendall/" target="_blank" class="github-link">View my LinkedIn</a>
    </div>

        

    );
}

export default About;