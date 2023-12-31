import React, { useEffect, useState } from 'react';
import Project from './Project';
import { Link, useNavigate } from 'react-router-dom';
import JST_img from '../../assets/JST.png';
import tools_Express_img from '../../assets/Tools-Express.png';
import fruits_valley_img from '../../assets/fruits-valley.png';
import private_tutor_img from '../../assets/privateTutor.png';
import shoes_analyzer_img from '../../assets/shoes-analyzer.png';
import puzzled_buyer_img from '../../assets/puzzled-buyer.png';
import rakib_hasan_sumon_img from '../../assets/rakib-hasan-sumon.png';
import phone_explorer_img from '../../assets/phone-explorer.png';
import food_world_img from '../../assets/food_world.png';

const Projects = ({ from }) => {
  const [selectedProject, setSelectedProject] = useState({});
  const navigate = useNavigate();
  const [limitedProjects, setLimitedProjects] = useState([]);
  const [projectDetails] = useState([
    // Journal of Science and Technology
    {
      title: 'Journal of Science and Technology, HSTU',
      type: 'MERN Stack',
      description:
        'This is an unauthorized project of Journal of Science and Technology of Hajee Mohammad Danesh Science and Technology University, Dinajpur-5200, Bangladesh. Unauthorized because this is only testing and learning purpose project made with React JS, Node JS, Express JS and MongoDB (MERN). The project makes it easy to submit manuscripts by the authors, organize and forward the manuscripts to the reviewers and review them by the reviewers.',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/final-project-client',
      serverSideRepository:
        'https://github.com/abdullahhosenakash/final-project-server',
      liveLink: 'https://hstu-final-project.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'TailwindCSS',
        'DaisyUI',
        'Firebase',
        'React Router',
        'FontAwesomeIcon'
      ],
      usedBackendTechnologies: [
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'JSON Web Token',
        'Mailgun'
      ],
      image: JST_img,
      userCredentials: [
        {
          userType: 'Editor',
          userEmail: 'abdullahhosenakash@gmail.com',
          userPassword: '123456'
        },
        {
          userType: 'Author',
          userEmail: 'abdullahhossen72@gmail.com',
          userPassword: '123456'
        },
        {
          userType: 'Reviewer',
          userEmail: 'akashbatas460@gmail.com',
          userPassword: '123456'
        }
      ]
    },
    // Tools Express Manufacturer
    {
      title: 'Tools Express Manufacturer',
      type: 'MERN Stack',
      description:
        'This a web application about a manufacturer company that manufactures industrial level hardware tools, supplies them to the respective wholesale business mans worldwide.',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/tools-express-manufacturer-client',
      serverSideRepository:
        'https://github.com/abdullahhosenakash/tools-express-manufacturer-server',
      liveLink: 'https://tools-express-manufacturer1.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'React Bootstrap',
        'Firebase',
        'React Firebase Hooks',
        'React Router',
        'FontAwesomeIcon',
        'React Hook Form'
      ],
      usedBackendTechnologies: [
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'JSON Web Token'
      ],
      image: tools_Express_img,
      userCredentials: [
        {
          userType: 'Admin',
          userEmail: 'abdullahhosenakash@gmail.com',
          userPassword: '123456'
        },
        {
          userType: 'User',
          userEmail: 'abdullahhossen72@gmail.com',
          userPassword: '123456'
        }
      ]
    },
    // Fruits Valley Warehouse
    {
      title: 'Fruits Valley Warehouse',
      type: 'MERN Stack',
      description:
        'This is a project of a fruits valley which is actually a warehouse management system.',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/fruits-valley-wirehouse-client',
      serverSideRepository:
        'https://github.com/abdullahhosenakash/fruits-valley-wirehouse-server',
      liveLink: 'https://fruits-valley-warehouse-e6b92.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'React Bootstrap',
        'Firebase',
        'React Firebase Hooks',
        'React Router',
        'FontAwesomeIcon'
      ],
      usedBackendTechnologies: ['NodeJS', 'ExpressJS', 'MongoDB'],
      image: fruits_valley_img,
      userCredentials: [
        {
          userType: 'User',
          userEmail: 'abdullahhosenakash@gmail.com',
          userPassword: '123456'
        }
      ]
    },
    // Private Tutor
    {
      title: 'Private Tutor',
      type: 'Frontend',
      description:
        'This is a project of a private tutor which is representing myself. ',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/private-tutor',

      liveLink: 'https://private-tutor-95828.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'React Bootstrap',
        'Firebase',
        'React Firebase Hooks',
        'React Router',
        'FontAwesomeIcon'
      ],
      image: private_tutor_img,
      userCredentials: [
        {
          userType: 'User',
          userEmail: 'abdullahhosenakash@gmail.com',
          userPassword: '123456'
        }
      ]
    },
    // Shoes Analyzer
    {
      title: 'Shoes Analyzer',
      type: 'Frontend',
      description:
        'This is a review project of shoes which will analyze all the reviews of different customer',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/shoes-analyser',

      liveLink: 'https://shoes-analyser.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'Custom CSS',
        'Firebase',
        'React Router',
        'FontAwesomeIcon'
      ],
      image: shoes_analyzer_img
    },
    // Puzzled Buyer
    {
      title: 'Puzzled Buyer',
      type: 'Frontend',
      description:
        "This project has some components that represents different part of the website. Here few sunglasses available to choose. You can add them to cart and from the cart, you can choose a sunglass for you randomly rather than being confused with 'which one to pick?' The project is hosted in google firebase.",
      clientSideRepository:
        'https://github.com/abdullahhosenakash/puzzled-buyer',

      liveLink: 'https://puzzled-buyer.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'Custom CSS',
        'Firebase',
        'FontAwesomeIcon'
      ],
      image: puzzled_buyer_img
    },
    // Rakib Hasan Sumon Portfolio
    {
      title: 'Rakib Hasan Sumon Portfolio',
      type: 'Frontend',
      description:
        'This is a web application of Rakib Hasan Sumon Portfolio. He is a photographer and captures very nice photos. The website represents all his pictures and personal information.',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/rakib-hasan-sumon',

      liveLink: 'https://rakib-hasan-sumon.web.app/',
      usedFrontendTechnologies: [
        'ReactJS',
        'React Bootstrap',
        'Firebase',
        'FontAwesomeIcon',
        'React Helmet Async'
      ],
      image: rakib_hasan_sumon_img
    },
    // Phone Explorer
    {
      title: 'Phone Explorer',
      type: 'Frontend',
      description:
        'This is a project of a phone searching and phone details website which is made with basic HTML, CSS, Bootstrap and Javascript. You can search your favorite phones with the name.',
      clientSideRepository:
        'https://github.com/abdullahhosenakash/phone-explorer',

      liveLink: 'https://abdullahhosenakash.github.io/phone-explorer/',
      usedFrontendTechnologies: [
        'HTML',
        'Vanilla CSS',
        'Bootstrap',
        'Vanilla Javascript',
        'RESTful API'
      ],
      image: phone_explorer_img
    },
    // Food World
    {
      title: 'Food World',
      type: 'Frontend',
      description:
        'This is a project of a food searching website which is made with basic HTML, CSS, Bootstrap and Javascript. You can search your favorite delicious food with the name.',
      clientSideRepository: 'https://github.com/abdullahhosenakash/food-world',

      liveLink: 'https://abdullahhosenakash.github.io/food-world/',
      usedFrontendTechnologies: [
        'HTML',
        'Vanilla CSS',
        'Bootstrap',
        'Vanilla Javascript',
        'RESTful API',
        'Google Font'
      ],
      image: food_world_img
    }
  ]);
  // const projectDetails = [
  //   // Journal of Science and Technology
  //   {
  //     title: 'Journal of Science and Technology, HSTU',
  //     type: 'MERN Stack',
  //     description:
  //       'This is an unauthorized project of Journal of Science and Technology of Hajee Mohammad Danesh Science and Technology University, Dinajpur-5200, Bangladesh. Unauthorized because this is only testing and learning purpose project made with React JS, Node JS, Express JS and MongoDB (MERN). The project makes it easy to submit manuscripts by the authors, organize and forward the manuscripts to the reviewers and review them by the reviewers.',
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/final-project-client',
  //     serverSideRepository:
  //       'https://github.com/abdullahhosenakash/final-project-server',
  //     liveLink: 'https://hstu-final-project.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'TailwindCSS',
  //       'DaisyUI',
  //       'Firebase',
  //       'React Router',
  //       'FontAwesomeIcon'
  //     ],
  //     usedBackendTechnologies: [
  //       'NodeJS',
  //       'ExpressJS',
  //       'MongoDB',
  //       'JSON Web Token',
  //       'Mailgun'
  //     ],
  //     image: JST_img,
  //     userCredentials: [
  //       {
  //         userType: 'Editor',
  //         userEmail: 'abdullahhosenakash@gmail.com',
  //         userPassword: '123456'
  //       },
  //       {
  //         userType: 'Author',
  //         userEmail: 'abdullahhossen72@gmail.com',
  //         userPassword: '123456'
  //       },
  //       {
  //         userType: 'Reviewer',
  //         userEmail: 'akashbatas460@gmail.com',
  //         userPassword: '123456'
  //       }
  //     ]
  //   },
  //   // Tools Express Manufacturer
  //   {
  //     title: 'Tools Express Manufacturer',
  //     type: 'MERN Stack',
  //     description:
  //       'This a web application about a manufacturer company that manufactures industrial level hardware tools, supplies them to the respective wholesale business mans worldwide.',
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/tools-express-manufacturer-client',
  //     serverSideRepository:
  //       'https://github.com/abdullahhosenakash/tools-express-manufacturer-server',
  //     liveLink: 'https://tools-express-manufacturer1.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'React Bootstrap',
  //       'Firebase',
  //       'React Firebase Hooks',
  //       'React Router',
  //       'FontAwesomeIcon',
  //       'React Hook Form'
  //     ],
  //     usedBackendTechnologies: [
  //       'NodeJS',
  //       'ExpressJS',
  //       'MongoDB',
  //       'JSON Web Token'
  //     ],
  //     image: tools_Express_img,
  //     userCredentials: [
  //       {
  //         userType: 'Admin',
  //         userEmail: 'abdullahhosenakash@gmail.com',
  //         userPassword: '123456'
  //       },
  //       {
  //         userType: 'User',
  //         userEmail: 'abdullahhossen72@gmail.com',
  //         userPassword: '123456'
  //       }
  //     ]
  //   },
  //   // Fruits Valley Warehouse
  //   {
  //     title: 'Fruits Valley Warehouse',
  //     type: 'MERN Stack',
  //     description:
  //       'This is a project of a fruits valley which is actually a warehouse management system.',
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/fruits-valley-wirehouse-client',
  //     serverSideRepository:
  //       'https://github.com/abdullahhosenakash/fruits-valley-wirehouse-server',
  //     liveLink: 'https://fruits-valley-warehouse-e6b92.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'React Bootstrap',
  //       'Firebase',
  //       'React Firebase Hooks',
  //       'React Router',
  //       'FontAwesomeIcon'
  //     ],
  //     usedBackendTechnologies: ['NodeJS', 'ExpressJS', 'MongoDB'],
  //     image: fruits_valley_img,
  //     userCredentials: [
  //       {
  //         userType: 'User',
  //         userEmail: 'abdullahhosenakash@gmail.com',
  //         userPassword: '123456'
  //       }
  //     ]
  //   },
  //   // Private Tutor
  //   {
  //     title: 'Private Tutor',
  //     type: 'Frontend',
  //     description:
  //       'This is a project of a private tutor which is representing myself. ',
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/private-tutor',

  //     liveLink: 'https://private-tutor-95828.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'React Bootstrap',
  //       'Firebase',
  //       'React Firebase Hooks',
  //       'React Router',
  //       'FontAwesomeIcon'
  //     ],
  //     image: private_tutor_img,
  //     userCredentials: [
  //       {
  //         userType: 'User',
  //         userEmail: 'abdullahhosenakash@gmail.com',
  //         userPassword: '123456'
  //       }
  //     ]
  //   },
  //   // Shoes Analyzer
  //   {
  //     title: 'Shoes Analyzer',
  //     type: 'Frontend',
  //     description:
  //       'This is a review project of shoes which will analyze all the reviews of different customer',
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/shoes-analyser',

  //     liveLink: 'https://shoes-analyser.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'Custom CSS',
  //       'Firebase',
  //       'React Router',
  //       'FontAwesomeIcon'
  //     ],
  //     image: shoes_analyzer_img
  //   },
  //   // Puzzled Buyer
  //   {
  //     title: 'Puzzled Buyer',
  //     type: 'Frontend',
  //     description:
  //       "This project has some components that represents different part of the website. Here few sunglasses available to choose. You can add them to cart and from the cart, you can choose a sunglass for you randomly rather than being confused with 'which one to pick?' The project is hosted in google firebase.",
  //     clientSideRepository:
  //       'https://github.com/abdullahhosenakash/puzzled-buyer',

  //     liveLink: 'https://puzzled-buyer.web.app/',
  //     usedFrontendTechnologies: [
  //       'ReactJS',
  //       'Custom CSS',
  //       'Firebase',
  //       'FontAwesomeIcon'
  //     ],
  //     image: puzzled_buyer_img
  //   }
  // ];
  useEffect(() => {
    if (from === 'home') {
      setLimitedProjects(projectDetails.slice(0, 6));
    } else {
      setLimitedProjects(projectDetails);
    }
  }, [from, projectDetails]);
  return (
    <div className='lg:px-24 px-5 py-6'>
      <h2 className='text-center text-4xl text-secondary underline mb-4'>
        Done Projects
      </h2>
      <div className='grid lg:grid-cols-3 gap-4'>
        {limitedProjects?.map((project, index) => (
          <div
            key={index}
            className='card shrink-0 w-full max-w-sm shadow-xl shadow-gray-700 bg-primary text-gray-300'
          >
            <div className='card-body p-4'>
              <img
                src={project.image}
                alt=''
                className='border rounded-lg border-slate-400'
              />
              <h3 className='font-bold text-secondary'>{project.title}</h3>
              <p>
                <span className='font-semibold text-secondary'>
                  Project Type:
                </span>{' '}
                {project.type}
              </p>
              <p>
                <span className='font-semibold text-secondary'>
                  Live Website:
                </span>{' '}
                <Link
                  to={project.liveLink}
                  target='_blank'
                  className='text-accent hover:underline'
                >
                  Click Here
                </Link>
              </p>

              <div className='form-control mt-6'>
                <button
                  className='btn border-0 uppercase text-secondary bg-slate-700 hover:bg-slate-600'
                  onClick={() => {
                    setSelectedProject(project);
                    document.getElementById('my_modal_1').showModal();
                  }}
                >
                  Details
                </button>
              </div>
              <Project selectedProject={selectedProject} />
            </div>
          </div>
        ))}
      </div>
      {from === 'home' && (
        <div className='form-control mt-12'>
          <button
            className='btn border-0 uppercase text-secondary bg-slate-700 hover:bg-slate-600 lg:w-1/2 mx-auto'
            onClick={() => navigate('/projects', { replace: true })}
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
