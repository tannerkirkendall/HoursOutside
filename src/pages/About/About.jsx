import './About.css'

function About(){
    return (
    
    <div className="about">
        <div class="container">
        <h1>Hours Outside Project</h1>
        <p class="intro">I created the first version of the Hours Outside web 
        app in 2022 to help my wife track her goal of spending 1,000 hours outdoors 
         with our son. Initially, the app was built using a Node.js API and a Vue.js front end. 
         It was a fun experiment to bring the 1,000 Hours idea to life in 
         an app that would also showcase my skills as a software developer.</p>
        
        <p class="details">For the latest iteration of the app, I switched to a Ruby on Rails 
            API with a Postgres database, paired with a React front end. The backend is built 
            as a Rails API-only implementation using Rails' scaffolding and migrations tools. 
            I chose the Devise gem for user authentication and custom-coded the rest of the API. 
            The React front end is built with Vite and relies solely on React components.</p>
        
        <p class="hosting">For hosting, I used a combination of DigitalOcean for the API and 
            database, and Firebase for the front end. I’ve also set up GitHub Actions to 
            automate the deployment process by building the API as a Docker container, making 
            it easy to manage and deploy different API versions.</p>
        
        <p class="goal">The primary goal of this project is to demonstrate my proficiency 
            with both Ruby on Rails and React frameworks. You can find the source code in the 
            GitHub repositories linked below.</p>

        <a href="https://github.com/tannerkirkendall/HoursOutside" target="_blank" class="github-link">View the React GitHub Repository</a> <br/>
        <a href="https://github.com/tannerkirkendall/HoursOutsideAPI" target="_blank" class="github-link">View the Ruby on Rails GitHub Repository</a>
    </div>

        
    </div>
    );
}

export default About;