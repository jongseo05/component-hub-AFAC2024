// JavaScript without `export` keyword
const topNavbarHTML = `
    <div class="Navbar">
        <img src="data:image/png;base64,...Base64EncodedImage..." class="Logo_img" alt="Logo" />
        <div class="Nav_section">
            <div class="Links">
                <div class="Link_section_Home">
                    <a href="/" class="no_underline">
                        <nav class="Link_style">Home</nav>
                    </a>
                </div>
                <div class="Link_section_Component">
                    <a href="/Component" class="no_underline">
                        <nav class="Link_style">Component</nav>
                    </a>
                </div>
                <div class="Link_section_Submit">
                    <a href="/Submit" class="no_underline">
                        <nav class="Link_style">Submit</nav>
                    </a>
                </div>
            </div>
        </div>
        <div class="Action_section">
            <div class="Search">
                <span class="Search_text">Search...</span>
            </div>
            <div class="Sign_section">
                <a href="/signin" class="Sign_box">
                    <span class="Sign_style">Sign in</span>
                </a>
                <a href="/signup" class="Sign_box">
                    <span class="Sign_style">Sign up</span>
                </a>
            </div>
        </div>
    </div>
`;

document.getElementById('root').innerHTML = topNavbarHTML;
