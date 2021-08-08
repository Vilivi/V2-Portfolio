import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaDatabase,
  FaCircleNotch,
} from "react-icons/fa";

export const Content = {
  en: {
    layout: {
      menu: {
        about: "About Me",
        skills: "My Skills",
        portfolio: "Portfolio",
        contact: "Contact Me",
      },
      heroSection: {
        creed: "Everything can be optimized",
        firstLine: "Hi, I'm Florian Baumes",
        middle: "Developer",
        secondLine: "based in Montpellier. (France)",
      },
      stacks: [
        "React.js",
        "Next.js",
        "Express.js",
        "React Native",
        "Fullstack",
      ],
      button: "See more",
      myself: [
        {
          title: "Myself",
          content: [
            "I'm a young student who wants to be a very competent fullstack developer!\nI'm just a 'solving problem lover', that's why. To be rational and logical is my creed and I see myself just like my code : I can always improve myself and I will!",
            `Plus, I really enjoy working in a team and sharing ideas.

      In my experience, learning from each others points of view is a really great way to improve social and technical skills faster and better!`,
          ],
        },
        {
          title: "Experience",
          content: [
            {
              title: "Fullstack Developer",
              place: "RCR Editions @ Montpellier",
              date: "April-June 2021",
            },
            {
              title: "Production Agent",
              place: "La Poste @ Mauguio",
              date: "2016-2019",
            },
            {
              title: "BAFA Animator",
              place: "Cityhall @ Frontignan (34)",
              date: "2014-2015",
            },
          ],
        },
        {
          title: "Education & Certifications",
          content: [
            {
              title: "Web & Web Mobile Developer",
              place: "ADRAR School @ Montpellier",
              date: "2020-2021",
            },
            {
              title: "Mathematics License",
              place: "Sciences University @ Montpellier",
              date: "2017-2018",
            },
            {
              title: "DAEU B",
              place: "Sciences University @ Montpellier",
              date: "2016-2017",
            },
          ],
        },
      ],
      experiences: [],
      certifications: [],
    },
    skills: [
      {
        title: "HTML5 & CSS3",
        paragraph:
          "I have good notions of these two langages. I also know Sass and CSS-in-Js. I can integrate your wireframes.",
        icon: (
          <>
            <FaHtml5 />
            <FaCss3Alt />
          </>
        ),
      },
      {
        title: "JavaScript",
        paragraph:
          "I have solid notions in native JS. I choose to specialized myself in React.js because I like his logic.",
        icon: <FaJs />,
      },
      {
        title: "React.js",
        paragraph: "I really enjoy React's components style programming (functionnal here with the hooks) and his ecosystem.",
        icon: <FaReact />,
      },
      {
        title: "Next.js",
        paragraph:
          "I use this fullstack framework on a daily basis for the generation of static sites that it allows. But also for integrated tools.",
        icon: <FaReact />,
      },
      {
        title: "Node.js/Express.js",
        paragraph:
          "In parallel with my learning of Next.js, I learned to code with Node.js & Express.js in order to continue my learning of the modern JavaScript ecosystem.",
        icon: <FaNodeJs />,
      },
      {
        title: "Continue Integration/Deployment",
        paragraph:
          "By deploying on the Vercel platform, I learned to practice CI / CD from my Github repositories.",
        icon: <FaCircleNotch />,
      },
      {
        title: "PHP7.X.X",
        paragraph:
          "I also have good notions of PHP that I was able to learn in training.",
        icon: <FaPhp />,
      },
      {
        title: "MySQL/MongoDB - SQL/NoSQL",
        paragraph:
          "On the database side, I had the opportunity to implement both relational and non-relational ones.",
        icon: <FaDatabase />,
      },
      {
        title: "Git & Github",
        paragraph:
          "Having spent the last 6 months working as a team, I know how to version my code and collaborate effectively using Git and Github.",
        icon: <FaGithub />,
      },
    ],
    projects: [
      {
        title: "Ostéomag",
        stacks: ["Next.js/React.js", "Headless Wordpress with WP GraphQL"],
        url: "https://osteo.vercel.app",
        backgroundImg: "./projects/screen_osteo.png",
        status: "In development",
      },
      {
        title: "DreamTime",
        stacks: ["Expo", "React Native"],
        url: "",
        backgroundImg: "./projects/default.png",
        status: "July 2021",
      },
      {
        title: "BreakingBad API",
        stacks: ["Next.js/React.js", "breaking-bad API"],
        url: "https://noobdev.fun/florian",
        backgroundImg: "./projects/screen_bbapi.png",
        status: "January 2021",
      },
      {
        title: "JSnake",
        stacks: ["JavaScript", "HTML5 & CSS3"],
        url: "https://j-snake.netlify.app",
        backgroundImg: "./projects/screen_snake.png",
        status: "December 2020",
      },
      {
        title: "GéoQuizz",
        stacks: ["JavaScript", "Bootstrap", "HTML5 & CSS3"],
        url: "https://js-geoquizz.netlify.app/.app",
        backgroundImg: "./projects/screen_geo.png",
        status: "December 2020",
      },
    ],
  },
  fr: {
    layout: {
      menu: {
        about: "À propos de moi",
        skills: "Mes Compétences",
        portfolio: "Portfolio",
        contact: "Me Contacter",
      },
      heroSection: {
        creed: "Tout peut être optimisé",
        firstLine: "Bonjour, je suis Florian Baumes",
        middle: "Développeur",
        secondLine: "habitant Montpellier. (France)",
      },
      stacks: [
        "React.js",
        "Next.js",
        "Express.js",
        "React Native",
        "Fullstack",
      ],
      button: "Voir plus",
      myself: [
        {
          title: "Présentation",
          content: [
            "Je suis un jeune étudiant voulant être un développeur fullstack très compétent !\nJe suis juste un « amoureux de la résolution de problèmes »! C'est pourquoi être rationnel et logique est mon credo et je me vois comme mon code : je peux toujours m'améliorer et je le ferai !",
            `De plus, j'aime beaucoup travailler en équipe et partager des idées.

            D'après mon expérience, apprendre des points de vue des autres est un très bon moyen d'améliorer les compétences sociales et techniques, plus rapidement et mieux !`,
          ],
        },
        {
          title: "Expériences",
          content: [
            {
              title: "Développeur Fullstack",
              place: "RCR Editions @ Montpellier",
              date: "Avril-Juin 2021",
            },
            {
              title: "Agent de Production",
              place: "La Poste @ Mauguio",
              date: "2016-2019",
            },
            {
              title: "Animateur BAFA",
              place: "Mairie @ Frontignan (34)",
              date: "2014-2015",
            },
          ],
        },
        {
          title: "Formation & Diplômes",
          content: [
            {
              title: "Développeur Web & Web Mobile",
              place: "centre de formation ADRAR @ Montpellier",
              date: "2020-2021",
            },
            {
              title: "Licence en Mathématiques",
              place: "Faculté des Sciences @ Montpellier",
              date: "2017-2018",
            },
            {
              title: "DAEU B",
              place: "Faculté des Sciences @ Montpellier",
              date: "2016-2017",
            },
          ],
        },
      ],
      experiences: [],
      certifications: [],
    },
    skills: [
      {
        title: "HTML5 & CSS3",
        paragraph:
          "J'ai de bonnes bases dans ces deux langages. Je connais aussi le Sass et le CSS-in-Js. Je peux faire de l'intégration web.",
        icon: (
          <>
            <FaHtml5 />
            <FaCss3Alt />
          </>
        ),
      },
      {
        title: "JavaScript",
        paragraph:
          "J'ai de très bonnes bases en JavaScript natif et j'ai choisi de me spécialiser sur React.js parce que j'adore son fonctionnement.",
        icon: <FaJs />,
      },
      {
        title: "React.js",
        paragraph:
          "J'aime sa logique de programmation par composants (fonctionnels ici avec les hooks) et son écosystème.",
        icon: <FaReact />,
      },
      {
        title: "Next.js",
        paragraph:
          "J'utilise ce framework fullstack au quotidien pour la génération de sites statiques qu'il permet. Mais aussi pour les outils intégrés.",
        icon: <FaReact />,
      },
      {
        title: "Node.js/Express.js",
        paragraph:
          "En parallèle de mon apprentissage de Next.js, j'ai appris à coder avec Node.js & Express.js afin de continuer mon apprentissage de l'écosystème JavaScript moderne.",
        icon: <FaNodeJs />,
      },
      {
        title: "Intégration/Déploiement Continu",
        paragraph:
          "En déployant sur la plateforme Vercel j'ai appris à pratiquer le CI/CD à partir de mes repositories Github.",
        icon: <FaCircleNotch />,
      },
      {
        title: "PHP7.X.X",
        paragraph:
          "Je dispose aussi de bonnes notions de PHP que j'ai pu apprendre en formation.",
        icon: <FaPhp />,
      },
      {
        title: "MySQL/MongoDB - SQL/NoSQL",
        paragraph:
          "Côté bases de données, j'ai eu l'occasion d'en implémenter des relationnelles comme des non-relationnelles.",
        icon: <FaDatabase />,
      },
      {
        title: "Git & Github",
        paragraph:
          "Ayant passé les 6 derniers mois à travailler en équipe, je sais versionner mon code et collaborer efficacement en utilisant Git et Github.",
        icon: <FaGithub />,
      },
    ],
    projects: [
      {
        title: "Ostéomag",
        stacks: ["Next.js/React.js", "Headless Wordpress with WP GraphQL"],
        url: "https://osteo.vercel.app",
        backgroundImg: "./projects/screen_osteo.png",
        status: "En développement",
      },
      {
        title: "DreamTime",
        stacks: ["Expo", "React Native"],
        url: "",
        backgroundImg: "./projects/default.png",
        status: "Juillet 2021",
      },
      {
        title: "BreakingBad API",
        stacks: ["Next.js/React.js", "breaking-bad API"],
        url: "https://noobdev.fun/florian",
        backgroundImg: "./projects/screen_bbapi.png",
        status: "Janvier 2021",
      },
      {
        title: "JSnake",
        stacks: ["JavaScript", "HTML5 & CSS3"],
        url: "https://js-snake.netlify.app",
        backgroundImg: "./projects/screen_snake.png",
        status: "Décembre 2020",
      },
      {
        title: "GéoQuizz",
        stacks: ["JavaScript", "Bootstrap", "HTML5 & CSS3"],
        url: "https://js-geoquizz.netlify.app/",
        backgroundImg: "./projects/screen_geo.png",
        status: "Décembre 2020",
      },
    ],
  },
};
