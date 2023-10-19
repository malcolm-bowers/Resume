class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                footer {
                    position: flex;
                    bottom: 0;
                    width: 100%;
                    padding-top: 5px;
                    padding-bottom: 15px;
                    text-align: center;
                    justify-content: center;
                    background-color: #333333f2;
                    color: #ffffff;
                    border-radius: 10px;
                }
            </style>
             
            <footer>
                <div class="footer">
                    <h4 style="padding-bottom: 0px;">
                        Find me at:
                    </h4>
                    <div class="resources">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <li><a href="https://www.linkedin.com/in/malcolm-bowers-861423180/">
                                            <img src="images/LI-Logo.png" alt="LinkedIn" width="123" height="30" /></a></li>
                                    </a></li>
                                    <li><a href="https://github.com/malcolm-bowers">
                                            <img src="images/GitHub_Logo.png" alt="GitHub" width="112" height="30" /></a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    &#169; copyright September 2023 <strong>Malcolm Bowers</strong>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', Footer);