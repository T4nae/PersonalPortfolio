import { caseStudy } from "@/types";

export const index = () => {
    const c: String[] = [];
    CaseStudy.forEach((item) => {
        c.push(item.title);
    });
    return c;
};

export const CaseStudy: caseStudy = [
    {
        title: "Personal Portfolio",
        image: "https://user-images.githubusercontent.com/51880648/253812923-c13e8cfb-447f-4423-bfa8-9a0e81b0c8cc.png",
        badges: [
            {
                icon: "nextdotjs",
                name: "NextJS",
                color: "#fff",
                textColor: "#000",
            },
            { icon: "react", name: "React", color: "#61DAFB" },
            { icon: "typescript", name: "TypeScript", color: "#007ACC" },
            { icon: "tailwindcss", name: "TailwindCSS", color: "#38B2AC" },
            {
                icon: "threedotjs",
                name: "ThreeJS",
                color: "#fff",
                textColor: "#000",
            },
            {
                icon: "threedotjs",
                name: "React Three Fiber",
                color: "#fff",
                textColor: "#000",
            },
            {
                icon: "framer",
                name: "Framer Motion",
                color: "#fff",
                textColor: "#000",
            },
            {
                icon: "vercel",
                name: "Vercel",
                color: "#fff",
                textColor: "#000",
            },
        ],
        content: [
            {
                title: "The Design Process",
                text: "I recently developed this personal portfolio website that's both fully responsive and highly scalable. The project was designed with adaptability in mind, ensuring it can flawlessly adjust to varying screen sizes and more content. A standout feature of the site is its ease of customization. Everything from removal, editing, to addition of elements is simple, as all components are extracted to content files encompassing the entire webpage structure. This method allows for uncomplicated customization and flexibility, enabling modification of any website section without disrupting the overall design and responsiveness. The content separation into files simplifies the site management and update process. The responsive design ensures the website's appearance and functionality are optimized for various devices, from desktops and laptops to tablets and mobile phones. This is accomplished via responsive design techniques that leverage TailwindCSS and media queries, allowing the website to modify its layout and content based on the screen size. The website's highly scalable nature is a key feature. I can add numerous skills to the website, and it will adjust accordingly. With the content files housing the full webpage structure, adding new sections, projects, or other elements to the site is effortless. This flexibility facilitates easy updates and additions to the portfolio as new projects are completed or skills are acquired. The Website is a fusion of a fully responsive design with an easily expandable and customizable website through content files makes it an effective platform for showcasing my work and skills.",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255417154-d6be2fd2-8410-4dce-9599-d476089abee3.png",
                    size: 50,
                },
            },
            {
                text: "My portfolio website's UI and visual design were crafted to exhibit my passion and creativity in web design. I opted for a 3D layout with many engaging, interconnected elements. This design evokes the sensation of watching an animated trailer, beginning with an unassuming island that comes alive with scrolling, culminating in a design that compels you to scroll until the end. The concept was to encapsulate that feeling using a fantastical low-poly design, combined with high animation and dynamic elements to tell a story. This approach also conserves memory, ensuring seamless navigation even on low-end systems. The intent was to foster personal connections between the viewer and the web design. To actualize this, I utilized React Three Fiber, ThreeJS, and Framer Motion 3D to construct a stunning and immersive 3D environment. The low-poly design elements lend the website a distinctive and creative flair. High animation and dynamic components infuse the site with a sense of motion and vitality, enhancing the overall user experience. One of the standout features of the website is the use of scroll animations, created with Framer Motion 3D and R3f Scroll. These animations activate the 3D elements as the user scrolls, establishing a sense of progression and movement that contributes to the site's overall experience. In terms of the color scheme, a mix of vivid, bold hues was used to fashion a visually arresting design. The contrasting colors generate depth and dimension, amplifying the overall 3D effect of the website. The UI and visual design of my portfolio site were conceived to be both visually breathtaking and engaging. The use of 3D elements, scroll animations, and low-poly design coalesce to create a distinctive and creative appearance that's sure to captivate potential clients and employers.",
            },
            {
                title: "Color Palette",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255419967-2c14c7ea-f74d-423c-b6c7-5589e5f5fc13.png",
                    size: 50,
                    centered: false,
                },
            },
            {
                title: "Animations && Interactivity",
                text: "To enhance the visual appeal and interactivity of my portfolio website, I incorporated Framer Motion 3D and R3f Scroll. These tools enabled me to craft scroll animations which animate 3D elements in accordance with the user's scrolling activity. I also utilized Framer Motion to infuse interactivity and dynamic animations into every feasible CSS element. Upon visiting the website, you will discover that almost every component offers an intriguing response on clicking or hovering over it. Some of the highlights include the mode switcher represented by a sun icon located at the top left corner, and the cloud hero text. These were the initial elements I spent considerable time perfecting, given their prominence upon entering the website. To achieve these animations, I employed a mix of techniques including scroll and hover animations. These methods were instrumental in delivering a visually captivating and engaging user experience, which is essential for potential clients and employers. In the realm of web design, the incorporation of animations and interactivity is gaining significant importance. Not only does it contribute to a more memorable user experience, but it also aids in boosting brand awareness and loyalty.",
            },
            {
                title: "Animation System",
                text: "To effectively manage the numerous components on my portfolio website, I developed an animation system and timeline that adjusted according to the user's scroll position on the page. This resulted in a dynamic animation that seamlessly altered the position, rotation, and scale of 3D elements over time. The animation on my website was crafted using several techniques. Firstly, I utilized R3f Scroll and Framer Motion Value to establish a scroll position on the page. This allowed the 3D elements to animate as the user navigated down the page. To track the animation state, I created a timeline that stored the initial and final positions of each element. This process was simplified by the use of a scroll motion value that I had developed to record the scroll offset on every frame then using Transform values for adding interactivity and animation to every possible element, I employed Framer Motion 3D. This contributed to augmenting engagement and interactivity, thereby enriching the overall user experience on the website. The animation system and timeline I established effectively managed the myriad components on the website, rendering a smooth and dynamic experience for users. By incorporating R3f Scroll and Framer Motion, I was able to design a website that not only captivates users but also showcases my expertise and experience in web design. The importance of animations and interactivity in web design is escalating, and my portfolio website serves as an excellent example of how to effectively apply these techniques.",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255641672-31e3cfe7-4212-4b9f-82f5-56c906cfbdbd.png",
                    size: 50,
                    centered: false,
                },
            },
            {
                title: "Problems Faced",
                text: "In developing my portfolio website, I confronted numerous hurdles due to its multi-faceted components. One such challenge involved constructing numerous responsive mini-islands around the main island. To accomplish this, I meticulously crafted a system that generates positions according to page size, item quantity, and animation positions, ensuring smooth animation upon scrolling. With the aid of Maths which I hate, I employed sine functions to create points along a semicircular circumference with a specific radius around the island's center position. This approach made the website fully adaptable to all screen sizes and infinitely stackable. Furthermore, I utilized a blend of techniques to achieve this, including employing scroll motion value to monitor scroll position. Additionally, leveraging sine and cosine functions allowed for the creation of dynamic and smooth animations that would alter the position, rotation, and scale of the 3D elements over time. Thus,  using these Methods I ensured the website's full customization across all screen sizes and infinite stackability.",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255644863-361f24b1-28ff-457d-9ce0-061df6952ff4.png",
                    size: 70,
                },
            },
            {
                text: "I faced another unique challenge creating a consistent animation effect that worked seamlessly across all screen sizes. Specifically, the task required animating a tree falling from the main island onto another island. To ensure the animation was smooth and consistent across a variety of devices, I had to conduct meticulous checks and make manual adjustments. Ideally, I wanted a self-adjusting solution that would accommodate all screen sizes without needing human intervention. However, since this particular scene wasn't overly complex, I was able to handle the adjustments myself, ensuring the animation worked effectively across all platforms.",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255648783-2f270add-2756-4c8d-9016-d88d817b32b0.png",
                    size: 70,
                },
            },
            {
                text: "A minor challenge I faced involved utilizing 3D texts on islands as navigation tools for the website. Since these were 3D elements rather than 2D, interacting with them proved troublesome. To overcome this, I developed a custom component named link3d. This component used plane and text geometries and incorporated hover and on-click states using R3f A11Y, enhancing website navigation. These trials ultimately augmented my knowledge of animation and interactivity in web design.",
                image: {
                    url: "https://user-images.githubusercontent.com/51880648/255648013-46f1547f-0a01-46d4-8427-7d701356896d.png",
                    size: 70,
                },
            },
            {
                title: "Conclusions and only Problem",
                text: "Creating my personal portfolio website was both a challenge and a rewarding journey. It provided me with the opportunity to learn about animations, interactivity, and the management of complex website projects. The website is fully responsive, highly adaptable, and effectively highlights my skills and experience to potential clients and employers. However, one issue remains with the website, the 2-second load time for all assets and models. This can pose a significant problem for users with slower internet connections. One potential solution could be utilizing gltfjsx to optimize models and reuse as much geometry as possible through instancing. Unfortunately, I couldn't get it to work with the Sketchfab models I used. In conclusion, building a personal portfolio website is a vital step for any web developer aiming to display their skills and experience. By employing techniques such as animations, interactivity, and responsive design, I've managed to create an aesthetically appealing and engaging experience for prospective clients and employers. Despite some remaining challenges, I am proud of my achievements and am excited to continue refining my web design skills and knowledge.",
            },
        ],
    },
    {
        title: "EV Awareness Website",
        image: "https://user-images.githubusercontent.com/51880648/254548344-94738b27-86c7-4827-b0a0-5c0e4cbaa71e.png",
        badges: [{ icon: "react", name: "React", color: "#61DAFB" }],
        content: [
            {
                title: "Overview",
                text: "I initiated this websites development during the first term of my btech program with the intention of promoting knowledge about Electric Vehicles (EVs) by comparing their pros and cons. Leveraging the power of React and scroll animations, my goal was to craft an engaging and enlightening platform.",
            },
            {
                title: "Objective",
                text: "The primary aim of this website is to increase awareness regarding EVs and enlighten visitors about their strengths and weaknesses. I strive to provide a thorough understanding of EVs, encapsulating their environmental implications, cost efficiency, and their performance in comparison to conventional gas-fueled vehicles.",
            },
            {
                title: "Design",
                text: "I opted to construct the website utilizing React, a widely used JavaScript library for developing user interfaces. To augment the user experience, I integrated scroll animations using libraries like AOS. These animations contribute to the website's aesthetic appeal and interactivity.",
            },
            {
                title: "Content",
                text: "This website is a rich resource of information about EVs. It encompasses topics such as the evolution of EVs, their operation, and their environmental impact. Furthermore, I juxtapose the advantages and disadvantages of EVs against traditional vehicles. To maintain clarity and facilitate easy navigation, the content is structured using distinct headings and subheadings.",
            },
            {
                title: "User Experience",
                text: "My primary focus is on providing a smooth, engaging user experience on my website. With the implementation of scrolling animations, I strive to hold the attention of visitors and keep them engaged during their entire browsing journey. The website has been designed to be user-friendly and navigable, boasting intuitive menus and clear links to various sections. ",
            },
            {
                title: "Conclusion",
                text: "In essence, this website acts as a comprehensive resource for those desiring to broaden their understanding of Electric Vehicles (EVs) and make well-informed choices. Utilizing React and scrolling animations, the website's visual appeal and usability are heightened, offering an engaging platform for raising EV consciousness.",
            },
        ],
    },
];
