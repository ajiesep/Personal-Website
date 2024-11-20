import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    // title: "I prioritize client collaboration, fostering open communication ",
    title: "Hi, I'm Ajie Setiawan Putra",
    description: "",
    className:
      "lg:col-span-1 md:col-span-2 md:row-span-2 lg:min-h-[60vh] text-black",
    imgClassName: "w-150 h-full object-cover",
    titleClassName: "justify-end",
    img: "/foto.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Im a Fullstack Developer with a passion for building beautiful & scalable web & mobile applications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    // title: "Currently building a JS Animation library",
    title:
      "Coding is more than just a profession—it's my true passion and a core part of who I am. I find joy in transforming complex ideas into innovative, functional solutions. Crafting clean, efficient, and purposeful code is not just about building projects; it's about creating meaningful impacts and solving real-world problems. Every line of code represents my dedication to turning visions into reality and making technology accessible and impactful for everyone.",
    description: "My Passion",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medisat, Medical sehat",
    des: "Web based Medical Record Application, to make it easier for patients to schedule appointments with doctors and can chat with AI, and can make payments with midtrans.",
    img: "/medisat2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/nodejs.svg",
      "/mongodb.svg",
      "/gemini.svg",
      "/midtrans.svg",
      "/google.svg",
    ],
    link: "https://medisat.vercel.app/",
  },
  {
    id: 2,
    title: "Belakangan",
    des: "A web based Real time chat using Socket.IO.",
    img: "/belakangan.png",
    iconLists: [
      "/re.svg",
      "/express-js.svg",
      "/tail.svg",
      "/postgresql2.svg",
      "/sequelize.svg",
      "/axios.svg",
    ],
    link: "https://chat-belakangan.web.app/",
  },
  {
    id: 3,
    title: "Kaki-Avenue",
    des: "A Web based with reference to e-commerce shoe sales website.",
    img: "/kaki-avenue2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/mongodb.svg",
      "/nodejs.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Movie Asik-asik",
    des: "A Web based using third party API TMDB by taking movie list data that will be displayed on the dashboard side.",
    img: "/movie.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/express-js.svg",
      "/nodejs.svg",
      "/postgresql2.svg",
      "/gemini.svg",
      "/axios.svg",
    ],
    link: "https://kaki-avenue.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Shout out to ajie setiawan putra for their incredible work in building a website that simplifies operations for healthcare facilities.",
    name: "Fachri Hawari",
    title: "Instructor Hacktiv8",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Javascript Student | 2024 - 2024",
    desc: "I completed a 4-month intensive program at Hacktiv8, mastering full-stack JavaScript technologies like React, React Native, Node.js, Express, PostgreSQL, and MongoDB. Through real-world projects and collaborative coding challenges, I gained hands-on experience in web and mobile development, API integration, database design, and Agile workflows, preparing me for dynamic software engineering roles.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: "Quality Assurance at PT. Amanah Karya Indonesia | 2022 - 2024",
    desc: "As a Quality Assurance professional at PT. Amanah Karya Indonesia, I was responsible for ensuring the quality and reliability of software products through meticulous testing and analysis. My role involved creating detailed test plans, executing manual test cases, and identifying bugs to enhance software performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ajiesep",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ajie-setiawan-putra-33a835178/",
  },
  {
    id: 3,
    img: "/instagram3.svg",
    link: "https://www.instagram.com/ajiesep/",
  },
];
