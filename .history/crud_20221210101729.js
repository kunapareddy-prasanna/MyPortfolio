const {MongoClient} = require('mongodb');
const pass = "97w4CNyTtfOM9V9";
  const dbName = "PortfolioManager";

    const url = `mongodb+srv://prasanna-1010:${pass}@cluster0.akwwrkw.mongodb.net/PortfolioManager`;

 
    // Replace the following with your Atlas connection string                                                                                                                                        
    const client = new MongoClient(url);
   
                          
     async function run() {
        try {
             await client.connect();
             console.log("Connected correctly to server");
             const db = client.db(dbName);
    
             // Use the collection "people"
             const col = db.collection("data");
             await col.insertMany([
              {
                "secname": "About",
                "text": [
                  "Hi &#128075;",
                  "I'm <strong>Lakshmi Prasanna.</strong> It is my pleasure to introduce myself to you.\n                            I am currently pursuing graduation in Computer Science from\n                            Indian Institute of Information Technology Senapati, Manipur.",
                  "I'm a <b>developer</b>, geek and curious human.",
                  "Additionally to being a passionate developer, I'm a lifelong reader, anime fan, and sports enthusiast, I truly enjoy these activities as well.",
                  "Lakshmi Prasanna"
                ],
                "secnum": 1
              },
              {
                "secname": "contact",
                "text": [
                  "Feel free to send me an email at kunapareddyprasanna2@gmail.com if you'd like to get in touch, whether it's to explore technology, discuss a business opportunity, or simply say hi.",
                  ""
                ],
                "secnum": 6
              },
              {
                "secname": "skills",
                "skills": [
                  {
                    "title": "Languages",
                    "skillName": "JavaScript, C++, Python, Java, Dart",
                    "color": "progress-bar color-1",
                    "percentage": "width:70%"
                  },
                  {
                    "title": "Frameworks/Libraries",
                    "skillName": "Angular, Reactjs",
                    "color": "progress-bar color-6",
                    "percentage": "width:50%"
                  },
                  {
                    "title": "Backend",
                    "skillName": "Nodejs, MongoDB",
                    "color": "progress-bar color-2",
                    "percentage": "width:40%"
                  },
                  {
                    "title": "App development",
                    "skillName": "Flutter",
                    "color": "progress-bar color-3",
                    "percentage": "width:30%"
                  },
                  {
                    "title": "Design",
                    "skillName": "HTML, Bootstrap, SCSS",
                    "color": "progress-bar color-4",
                    "percentage": "width:70%"
                  },
                  {
                    "title": "Version Control",
                    "skillName": "GitHub, Git",
                    "color": "progress-bar color-7",
                    "percentage": "width:70%"
                  },
                  {
                    "title": "Tools",
                    "skillName": "Postman, Chrome DevTools",
                    "color": "progress-bar color-3",
                    "percentage": "width:80%"
                  },
                  {
                    "title": "Editor",
                    "skillName": "VS Code, Atom, Android Studio",
                    "color": "progress-bar color-6",
                    "percentage": "width:70%"
                  }
                ],
                "secnum": 2
              },
              {
                "secname": "projects",
                "web": [
                  {
                    "projectName": "My Portfolio",
                    "image": "images/portfolio.png",
                    "summary": "Developed a web portfolio to better display academic information, skills, projects, and contact details.",
                    "preview": "",
                    "techStack": [
                      "Django",
                      "SQLite",
                      "Bootstrap",
                      "JavaScript",
                      "Heroku"
                    ]
                  },
                  {
                    "projectName": "Banking Website",
                    "image": "images/banking.png",
                    "summary": "A simple banking website explaining its features, operations, and testimonials has been developed.",
                    "preview": "",
                    "techStack": [
                      "JavaScript",
                      "Bootstrap",
                      "HTML",
                      "CSS"
                    ]
                  },
                  {
                    "projectName": "Game site",
                    "image": "images/game.png",
                    "summary": "The website was designed as a simple gaming platform.",
                    "preview": "",
                    "techStack": [
                      "JavaScript",
                      "PHP",
                      "CSS"
                    ]
                  },
                  {
                    "projectName": "Freelancing Website",
                    "image": "images/freelance.png",
                    "summary": "Created a freelance website that allows people to choose you as a freelancer",
                    "preview": "",
                    "techStack": [
                      "HTML",
                      "Bootstrap",
                      "CSS"
                    ]
                  }
                ],
                "software": [
                  {
                    "projectName": "Instagram Bot",
                    "image": "images/bot.jpeg",
                    "summary": "Automated likes and follows for specific accounts with this Instagram bot.",
                    "preview": "",
                    "techStack": [
                      "Python",
                      "Selenium"
                    ]
                  },
                  {
                    "projectName": "Vocabulary Tutor",
                    "image": "images/tutor.png",
                    "summary": "A Python script that helps in learning new words every day.",
                    "preview": "",
                    "techStack": [
                      "tkinter",
                      "Python",
                      "Openxlpy"
                    ]
                  },
                  {
                    "projectName": "Bill Generator",
                    "image": "images/bill.png",
                    "summary": "The GUI for generating bills from the menu items selected in a restaurant",
                    "preview": "",
                    "techStack": [
                      "Python",
                      "SQL"
                    ]
                  }
                ],
                "android": [
                  {
                    "projectName": "IMDB App",
                    "image": "images/imdb.gif",
                    "summary": "The application provides detailed information and ratings about the latest movies and series.",
                    "preview": "",
                    "techStack": [
                      "JAVA",
                      "Dart",
                      "Objective-c"
                    ]
                  },
                  {
                    "projectName": "Result management system",
                    "image": "images/rms.png",
                    "summary": "As a result of this application, the results will be greatly simplified and accelerated,",
                    "preview": "",
                    "techStack": [
                      "JAVA",
                      "Dart",
                      "Android"
                    ]
                  },
                  {
                    "projectName": "Pizza Delivery App",
                    "image": "images/pizza.jpg",
                    "summary": "This application makes ordering pizza easy.",
                    "preview": "",
                    "techStack": [
                      "Java"
                    ]
                  }
                ],
                "secnum": 3
              },
              {
                "secname": "experience",
                "experience": [
                  {
                    "title": "Campus Army, Hyderabad    ",
                    "duration": "(Jun 2021 - Aug 2021)",
                    "subtitle": "Business Development Executive Intern",
                    "details": [
                      "Networked among local business and community organizations to develop leads and generate business.",
                      "Created reports and targeted lists to present to upper management."
                    ],
                    "tags": [
                      "Interpersonal skills",
                      "Negotiating skills",
                      "Collaboration skills",
                      "Communication skills",
                      "Organizational skills"
                    ],
                    "icon": "qrcode"
                  },
                  {
                    "title": "Naresh Technologies    ",
                    "duration": "(Feb 2022 - present)",
                    "subtitle": "SDE Intern",
                    "details": [
                      "Assisting the tech team as a full stack developer.",
                      "Building a customer Web application from scratch for social media management."
                    ],
                    "tags": [
                      "JavaScript",
                      "React",
                      "Bootstrap",
                      "Node.js",
                      "MangoDB"
                    ],
                    "icon": "group"
                  }
                ],
                "secnum": 4
              },
              {
                "secname": "education",
                "education": [
                  {
                    "title": "Bachelors of technology : Computer Science  ",
                    "duration": "(2019 - 2023)",
                    "subtitle": "St.Peter's Engineering College Mysammaguda,Telangana",
                    "details": [
                      "Active Competitive Programmer with CodeChef Rating 1841*."
                    ],
                    "tags": [
                      "Data Structures & Algorithms",
                      "Operating Systems",
                      "Database Management System",
                      "Computer Networks",
                      "Compiler Designing",
                      "Cloud Computing"
                    ],
                    "icon": "graduation-cap"
                  },
                  {
                    "title": "Intermediate: MPC  ",
                    "duration": "(2017 - 2019)",
                    "subtitle": "Sri Gayathri Junior College.",
                    "details": [
                      "Qualified in  EAMCET.",
                      "Achieved a 91.0 percent in the 12th grade board examinations."
                    ],
                    "tags": [
                      "Physics",
                      "Chemistry",
                      "Mathematics"
                    ],
                    "icon": "book"
                  },
                  {
                    "title": "10th from SSC board  ",
                    "duration": "(2016 - 2017)",
                    "subtitle": "Genius High School.",
                    "details": [
                      "Gold medalist in the Olympiad exam.",
                      "Achieved a 92 percent in the 10th grade board examinations."
                    ],
                    "tags": [
                      "Telugu",
                      "Hindi",
                      "English",
                      "Mathematics",
                      "Physics",
                      "Biology",
                      "Social"
                    ],
                    "icon": "book"
                  }
                ],
                "secnum": 5
              },
              {
                "secname": "footer",
                "footer": [
                  {
                    "label": "Dev Profiles",
                    "data": [
                      {
                        "text": "GitHub",
                        "link": "https://github.com/"
                      },
                      {
                        "text": "LeetCode",
                        "link": "https://leetcode.com/"
                      }
                    ]
                  },
                  {
                    "label": "Resources",
                    "data": [
                      {
                        "text": "Enable Dark/Light Mode",
                        "func": "enableDarkMode()"
                      },
                      {
                        "text": "Print this page",
                        "func": "window.print()"
                      },
                      {
                        "text": "Clone this page",
                        "link": ""
                      }
                    ]
                  },
                  {
                    "label": "Social Profiles",
                    "data": [
                      {
                        "text": "Linkedin",
                        "link": "https://www.linkedin.com/"
                      },
                      {
                        "text": "Twitter",
                        "link": "https://twitter.com/"
                      }
                    ]
                  },
                  {
                    "label": "copyright-text",
                    "data": [
                      "Made with &#10084;&#65039; by Lakshmi Prasanna."
                    ]
                  }
                ],
                "secnum": 7
              }
            
            ]
            );
            
          }catch (err) {
             console.log(err.stack);
         }
     
         finally {
            await client.close();
        }
    }
  
  
    run().catch(console.dir);

