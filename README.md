<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .header {
            display: flex;
            width: 100%;
            height: 6vw;
            font-weight: 600;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            box-shadow: 0vw 0.1vw gray;
        }

        .logo {
            font-family: cursive;
            font-size: 3.5vw;
            margin-left: 4vw;
            display: flex;
            align-items: center;
            color: rgb(187, 23, 187);
        }

        .logo img {
            height: 4vw;
            border-radius: 1.5vw;
            margin-right: 1vw;
            margin-top: 0.3vw;
            border: 0.4vw solid rgb(0, 0, 0);
        }

        .options ul {
            display: flex;
            justify-content: space-evenly;
            gap: 2.5vw;
            margin-right: 3.5vw;
        }

        .options ul li {
            list-style: none;
            font-family: sans-serif;
            font-size: 1.3vw;
        }

        .main {
            display: flex;
        }

        .column1 {
            width: 60%;
            display: grid;
            margin-top: 6vw;
            margin-left: 6vw;
        }

        .welcome {
            font-size: 3vw;
            font-family: sans-serif;
        }

        .profileText {
            font-size: 1.5vw;
            font-family: sans-serif;
            color: rgb(113, 113, 113);
            font-weight: 500;
        }

        .profileText p {
            margin-bottom: 0.5vw;
        }

        .socialMedia img {
            height: 3vw;
            margin-right: 1.5vw;
        }

        .buttons button {
            padding: 0.7vw 1vw;
            background-color: rgb(187, 23, 187);
            border: 1px solid black;
            border-radius: 0.4vw;
            color: white;
            font-size: 1.3vw;
            font-weight: 600;
            margin-right: 3vw;
        }

        .column2{
            height: 40vw;
        }

        .column2 img {
            height: 37vw;
            margin: 2vw 5vw 0vw 0vw;
            width: 44.6vw;
            mix-blend-mode: multiply;
            filter: saturate(2);
        }

        .row3 {
            display: flex;
            margin-top: 0vw;
            justify-content: space-between;
            width: 100%;
        }

        .column1_3 {
            width: 45%;
            margin-left: 6vw;
        }

        .column1_3 img {
            width: 90%;
            height: 47vw;

        }

        .column2_3 {
            width: 45%;
            display: grid;
            margin: 3vw 3vw 3vw 0vw;
            font-family: sans-serif;
        }

        .what {
            font-size: 3vw;
            font-family: sans-serif;
        }

        .point,
        .l1 {
            color: rgb(129, 128, 128);
            font-size: 1.5vw;
        }

        .m2 .l1 {
            margin-bottom: 0.8vw;
        }

        .image img {
            width: 12%;
            margin: 0vw 0.9vw;
        }

        .image {
            margin-left: 2.5vw;
        }

        .row4 {
            translate: 0vw -5.5vw;
            width: 100%;
            display: flex;
        }

        .column1_4 {
            width: 45%;
            display: grid;
            margin-top: 10vw;
            padding-left: 5vw;
            margin-bottom: 5vw;
        }

        .pro {
            font-size: 3vw;
            font-family: sans-serif;
        }

        .column2_4 {
            width: 48%;
            height: 40vw;
        }

        .front1 {
            font-size: 1.4vw;
            font-family: sans-serif;
        }

        .front {
            display: flex;
            margin-top: 0.4vw;
            width: 80%;
            height: 2vw;
            border-radius: 1vw;
            border: 1px solid black;
            background-color: rgb(255, 240, 254);
        }

        .purple {
            width: 80%;
            background-color: rgb(187, 23, 187);
            border-radius: 0.95vw 0.1vw 0.1vw 0.95vw;
        }

        .pr1,
        .bac1 {
            font-size: 1.4vw;
            font-family: sans-serif;
        }

        .pr,
        .bac {
            display: flex;
            margin-top: 0.4vw;
            width: 80%;
            height: 2vw;
            border-radius: 1vw;
            border: 1px solid black;
            background-color: rgb(255, 240, 254);
        }

        .pur {
            width: 70%;
            border-radius: 0.95vw 0.1vw 0.1vw 0.95vw;
            background-color: rgb(187, 23, 187);
        }

        .prl {
            width: 50%;
            border-radius: 0.95vw 0.1vw 0.1vw 0.95vw;
            background-color: rgb(187, 23, 187);
        }

        .column2_4 img {
            width: 100%;
            margin: 0vw;
            height: 45vw;
            filter: contrast(10);
            filter: saturate(2);
            mix-blend-mode: multiply;
        }

        .open {
            display: grid;
            margin-top: 2.5vw;
        }

        .p {
            display: flex;
            margin: 0vw 3vw;
        }

        .a,
        .b {
            height: 10vw;
            width: 49%;
            margin: 1vw 1vw;
            background-color: #ececec;
            border-radius: 0.5vw;
            box-shadow: 0.2vw 0.2vw 0.3vw #848383;
            padding: 0vw 2vw;
        }

        .tex {
            padding: 0vw 5vw 1.5vw 5vw;
            font-size: 3vw;
            font-family: sans-serif;
        }

        .ab{
            margin-top: 1vw;
            font-size: 2vw;
            font-family: sans-serif;
            font-weight: 600;
        }

        .ab i{
            margin-right: 1.2vw;
        }

        .bc{
            font-size: 1.5vw;
            font-family: sans-serif;
            margin-top: 1.2vw;
            margin-left: 1vw;
            color: rgb(102, 102, 102);
        }

        .bc i{
            margin-right: 0.6vw;
            color: blueviolet;
            font-size: 1.5vw;
        }

        .more_projects button{
            padding: 0.7vw 1.5vw;
            color: white;
            background-color: rgb(187, 23, 187);
            border: 0.1vw solid black;
            border-radius: 0.3vw;
            font-size: 1.5vw;
            margin-left: 43vw;
            margin-top: 1vw;
            margin-bottom: 1vw;
        }

        .reach{
            width: 100%;
            display: flex;
            margin-bottom: 2vw;
        }

        .reach1{
            display: grid;
            width: 60%;
            margin-top: 2vw;
            margin-left: 4vw;
        }

        .reach2{
            height: 30vw;
            width: 40%;
            margin-right: 4vw;
            margin-top: 2vw;
            margin-left: 10vw;
        }

        .l{
            font-size: 3vw;
            font-family: sans-serif;
        }

        .mn{
            font-size: 1.3vw;
            font-family: sans-serif;
            color: grey;
        }

        .lmn{
            font-family: sans-serif;
            font-size: 1.7vw;
            color: rgb(0, 0, 0);
        }

        .location{
            font-family: sans-serif;
            font-size: 1.5vw;
            color: rgb(0, 0, 0);
        }

        .openf{
            font-size: 1.5vw;
            font-family: sans-serif;
            color: rgb(0, 0, 0);
        }

        .reach2 img{
            height: 28vw;
            border-radius: 30vw;
            border: 1vw solid rgb(187, 23, 187);
        }

        .footer{
            font-family: sans-serif;
            font-size: 2vw;
            height: 5vw;
            width: 100%;
            align-items: center;
            display: flex;
            justify-content: center;
            color: rgb(87, 87, 87);
        }

        .options{
            display: flex;
            margin-right: 2vw;
        }

        .ml{
            font-family: sans-serif;
            font-size: 1.3vw;
            padding: 0.5vw 0.5vw;
            margin: 0vw 0.5vw;
            transition: all ease 0.3s;
        }

        .ml:hover{
            box-shadow: 0vw 0.2vw rgb(188, 32, 188);
            translate: 0vw -0.2vw;
            font-size: 1.5vw;        
        }

    </style>

</head>

<body>
    <div class="header">
        <div class="logo">
            <img src="data:image/jpeg;base64,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"
                alt="Image">
            Divyank Kushwaha
        </div>
        <div class="options">
            <div class="ml">Skills</div>
            <div class="ml">Projects</div>
            <div class="ml">Achievements</div>
            <div class="ml">Blogs</div>
            <div class="ml">Open Source</div>
            <div class="ml">Contact Me</div>
        </div>
    </div>
    <div class="main">
        <div class="column1">
            <div class="welcome"><Span>Hi all I'm Divyank</Span></div>
            <div class="profileText">
                <p>A passionate Full Stack Developer having an experience</p>
                <p>Of building Web and Mobile applications with HTML/CSS/</p>
                <p>JavaScript/ReactJs/NodeJs/React Native and some other</p>
                <p>Cool libraries and frameworks.</p>
            </div>
            <div class="socialMedia">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-1024.png"
                    alt="Image">
                <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-1024.png"
                    alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-1024.png"
                    alt="Image">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-1024.png" alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_linkedin-1024.png"
                    alt="Image">
            </div>
            <div class="buttons">
                <button>CONTACT ME</button>
                <button>SEE MY RESUME</button>
            </div>
        </div>
        <div class="column2">
            <img src="https://i.pinimg.com/736x/ea/69/a5/ea69a57bb047e1a182b7984cbf7664cd.jpg" alt="Image">
        </div>
    </div>
    <br>
    <div class="row3">
        <div class="column1_3">
            <img src="https://cdn0.iconfinder.com/data/icons/startups-technology-1/561/startups__tech-14-512.png"
                alt="Image">
        </div>
        <div class="column2_3">
            <div class="what">What I do</div>
            <div class="point">  Hi, I'm a software developer with experience in HTML, CSS, C++, and JavaScript. I love
                creating interactive and responsive websites and applications.</div>
            <div class="image">
                <img src="https://cdn0.iconfinder.com/data/icons/logos-21/40/HTML5-512.png" alt="Image">
                <img src="https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-512.png" alt="Image">
                <img src="https://cdn4.iconfinder.com/data/icons/tabler-vol-2/24/brand-javascript-1024.png" alt="Image">
                <img src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-c-plus-plus-512.png" alt="Image">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/php-1024.png" alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/640/node-1024.png" alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/react-512.png" alt="Image">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/python-1024.png" alt="Image">
                <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/sass-1024.png"
                    alt="Image">
                <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/640/aws-1024.png"
                    alt="Image">
            </div>
            <div class="m2">
                <div class="l1">
                    <p>Develop highly interactive Front end / User Interfaces for you web and mobile applications.</p>
                </div>
                <div class="l1">
                    <p>Progressive Web Applications (PWA) in normal and SPA Stacks.</p>
                </div>
                <div class="l1">
                    <p>Integration of third party services such as Firebase / AWS / Digital Ocean</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row4">
        <div class="column1_4">
            <div class="pro">Proficiency</div>
            <div class="front1">
                <p>Frontend / Design</p>
                <div class="front">
                    <div class="purple"></div>
                    <div class="white"></div>
                </div>
            </div>

            <div class="bac1">
                <p>Backend</p>
                <div class="bac">
                    <div class="prl"></div>
                    <div class="wh"></div>
                </div>
            </div>

            <div class="pr1">
                <p>Programming</p>
                <div class="pr">
                    <div class="pur"></div>
                    <div class="whi"></div>
                </div>
            </div>
        </div>
        <div class="column2_4">
            <img src="https://i.pinimg.com/736x/92/26/c8/9226c8611770bda484dc1b12cee6e849.jpg" alt="Image">
        </div>
    </div>

    <hr>
    <div class="open">
        <div class="tex">Open Source Projects</div>
        <div class="p">
            <div class="a">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>react - blog - github</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i>React + Github issues <i class="fa-solid fa-right-long"></i>Your Personal Blog </div>
            </div>
            <div class="b">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>developerFolio</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i> Developer Portfolio Template that help you showcase your work and skills as a software developer.<i class="fa-solid fa-bolt"></i></div>
            </div>
        </div>
        <div class="p">
            <div class="a">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>photo - a webpage for - photographers</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i>A website for phtographers where they can save their collections and collect memories for future <i class="fa-solid fa-camera"></i></div>
            </div>
            <div class="b">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>awesome - web - components</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i>Awesome web components and snippets for every Front-End Developer. <i class="fa-solid fa-fire"></i></div>
            </div>
        </div>
        <div class="p">
            <div class="a">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>Learning - CodeWithDivyank</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i>A responsive website for developers where the lectures on different programming languages are available.</div>
            </div>
            <div class="b">
                <div class="ab"><i class="fa-regular fa-bookmark"></i>Educating - About 7 Wonders</div>
                <div class="bc"><i class="fa-regular fa-hand-point-right"></i>A webpage linked with Wikipedia which gives knowlegde about 7 Wonders of the World <i class="fa-solid fa-heart"></i></div>
            </div>
        </div>
        <div class="more_projects">
            <button>More Projects</button>
        </div>
    </div>
    <hr>
    <div class="reach">
        <div class="reach1">
            <div class="l">Reach Out To Me !</div>
            <div class="mn">DISCUSS A PROJECT OR JUST WANT TO SAY HI MY INBOX IS OPEN FOR ALL</div>
            <div class="lmn">"Specialist in Front-End Development | Software Developer <i class="fa-solid fa-spider"></i> | Open Source Contributor <i class="fa-solid fa-fire-flame-curved"></i> | Speaker <i class="fa-solid fa-microphone"></i> | Tech Writer <i class="fa-solid fa-marker"> </i>"</div>
            <div class="location"><i class="fa-solid fa-location-dot"></i> Gorakhpur , India</div>
            <div class="openf">Open for Opportunities : Yes</div>
            <div class="symb"><div class="socialMedia">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-1024.png"
                    alt="Image">
                <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-1024.png"
                    alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-1024.png"
                    alt="Image">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-1024.png" alt="Image">
                <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_linkedin-1024.png"
                    alt="Image">
            </div></div>
        </div>
        <div class="reach2">
            <img src="data:image/jpeg;base64,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" alt="Image">
        </div>
    </div>
    <hr>
    <div class="footer">Copyrighted &copy by Divyank Kushwaha @ 2024</div>
</body>

</html>
