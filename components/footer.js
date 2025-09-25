
function Footer() {
    const footer = document.createElement("footer");
    
    const p1 = document.createElement("p");
    p1.textContent = "2025 Nest Planner, All rights reserved.";
    
    const p2 = document.createElement("p");
    p2.textContent = "Made by Parker Engle, Laney Humble, Aya Zourgani";

    const githubLinks = [
        {
            href: "https://github.com/mengle2332",
            src: "./photos/githubIcon.svg",
            alt: "Parker's Github"

        },
        {
            href: "https://github.com/Laneyeh",
            src: "./photos/githubIcon.svg",
            alt: "Laney's Github"

        },
        {
            href: "https://github.com/Sparkle26",
            src: "./photos/githubIcon.svg",
            alt: "Aya's Github"

        }

    ];
    //Clickable links
    socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.target = "_blank"; //this opens their page in a new tab
        const img = document.createElementNS("img");
        img.className = "socialMediaIcon";
        img.src = link.src;
        img.alt = link.alt;
        a.apprendChild(img);
        footer.appendChild(a);
    });
    //appending paragraphs
    footer.prepend(p2);
    footer.prepend(p1);
    //Add footer to the page (at the end of the body)
    document.body.appendChild(footer);
}
export default Footer;