//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Cuong Nguyen", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'cduynguyen95@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '7046659542', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/CuongDNguyen', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/cuong-nguyen-20701134/', icon: faLinkedinIn }
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Cuong Nguyen.",
        subtitle: "Senior Software Engineer - Always learning and willing to help out where needed"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Languages", // eg.frontend, backend, devops etc
            skills: ["Java", "JavaScript", "TypeScript"] //eg. react, html, python etc.
        },
        {
            category: "Development",
            skills: ["Spring", "React", "Node.js"]
        },
        {
            category: "Tools",
            skills: ["AWS", "Git", "Jenkins"]
        },
        {
            category: "Social",
            skills: ["Driven", "Communication", "Collaboration"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Check out my resume",
        resume: "/Resume-Cuong-Nguyen.pdf" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2017', //timespan
                title: 'Biomedical Engineering', //eg. BTech in Compuster Engineering
                organization: 'University of North Carolina at Chapel Hill', //eg. VJTI, Mumbai
            },
        ],
    },
    experience: {
        visible: true,
        experienceList: [
            {
                company: 'Capital One',
                position: 'Senior Software Engineer',
                time: 'November 2022 - Present',
                description: 'Developed and improved card technology and payment systems.'
            },
            {
                company: 'Allstate',
                position: 'Senior Software Engineer',
                time: 'September 2018 - November 2022',
                description: 'Developed agency portals and interactive voice systems to help onboard new agents      and improve agency experience.' //eg. spearheaded the graphics team in designing SASS product UIs
            }
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: '',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: '',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}