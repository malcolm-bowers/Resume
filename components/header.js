class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .header {
                    height: auto;
                    width: 100%;
                    margin: 0;
                    padding: 15px;
                    background-color: #333333f2;
                    color: #ffffff;
                    text-align: center;
                    box-sizing: border-box;
                }
                
                .navigationBar {
                    width: 100%;
                    background-color: #9e889f2f;
                    color: rgb(0, 0, 0);
                    text-align: center;
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                }
                    
                .navigationBar a {
                    display: block;
                    color: white;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }
                    
                .navigationBar a:hover {
                    color: #111;
                    text-decoration: underline;
                }
                
                .navigationBar a:active {
                    color: rgb(0, 119, 255);
                }
                
                .navigationBar li {
                    float: left;
                }
                
                .active {
                    background-color: #3EB2FD;
                    background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
                    border-radius: 15px;
                }
                
                .navigationBar ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333;
                }

                #home #nav_home a,
                #resume #nav_resume a,
                #projects #nav_projects a,
                #contact #nav_contact a {
                    background-color: #3EB2FD;
                    background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
                    border-radius: 15px;
                }

            </style>
            
            
        <header>
            <div class="header">
                <h2>MALCOLM BOWERS</h2>
                <h3>Software Engineer | Medical and Health Specialist</h3>
                <p>San Antonio, TX 78244</p>
                <p>(903) 603-5520 | malcolm.bowers@icloud.com</p>
                <p>https://malcolmbowers.com</p>
                <p>www.linkedin.com/in/malcolm-bowers-861423180</p> 
            </div>
            <div class="navigationBar">
                <ul>
                    <li id="nav_home"><a href="index.html">Home</a></li>
                    <li id="nav_resume"><a href="resume.html">Resume</a></li>
                    <li id="nav_projects"><a href="projects.html">Projects</a></li>
                    <li id="nav_contact"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);