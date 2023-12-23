import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ selectedProject }) => {
  const {
    title,
    type,
    description,
    clientSideRepository,
    serverSideRepository,
    liveLink,
    usedFrontendTechnologies,
    usedBackendTechnologies,
    image,
    userCredentials
  } = selectedProject || {};
  return (
    <dialog id='my_modal_1' className='modal'>
      <div className='modal-box max-w-2xl lg:pr-4 px-2 py-2 bg-primary text-white text-opacity-80 lg:border-8  border-primary '>
        <img
          src={image}
          alt=''
          className='border border-slate-300 rounded-lg'
        />
        <h3 className='font-semibold mt-2 text-xl text-secondary'>{title}</h3>
        <p className='my-1'>
          <span className='font-semibold text-secondary'>Project Type:</span>{' '}
          {type}
        </p>
        <p className='my-1 text-justify'>
          <span className='font-semibold text-secondary'>Description:</span>
          <br /> {description}
        </p>
        <div className='flex flex-col lg:flex-row'>
          <p className='my-1'>
            <span className='font-semibold text-secondary'>
              Frontend Technologies:
            </span>
            {usedFrontendTechnologies?.map((technology, index) => (
              <li className='ml-4' key={index}>
                {technology}
              </li>
            ))}
          </p>
          {usedBackendTechnologies?.length && (
            <p className='my-1'>
              <span className='font-semibold text-secondary'>
                Backend Technologies:
              </span>
              {usedBackendTechnologies?.map((technology, index) => (
                <li className='ml-4' key={index}>
                  {technology}
                </li>
              ))}
            </p>
          )}
        </div>
        <p className='my-1'>
          <span className='font-semibold text-secondary'>
            Client Side Repository:
          </span>{' '}
          <Link
            to={clientSideRepository}
            target='_blank'
            className='text-accent hover:underline'
          >
            Click Here
          </Link>
        </p>
        {serverSideRepository && (
          <p className='my-1'>
            <span className='font-semibold text-secondary'>
              Server Side Repository:
            </span>{' '}
            <Link
              to={serverSideRepository}
              target='_blank'
              className='text-accent hover:underline'
            >
              Click Here
            </Link>
          </p>
        )}
        <p className='my-1'>
          <span className='font-semibold text-secondary'>Live Website:</span>{' '}
          <Link
            to={liveLink}
            target='_blank'
            className='text-accent hover:underline'
          >
            Click Here
          </Link>
        </p>
        {userCredentials?.length && (
          <>
            <p className='my-1'>
              <span className='font-semibold text-secondary'>
                User Credentials for Live Website:
              </span>
            </p>
            <div className='overflow-x-auto'>
              <table className='text-center mt-1'>
                <thead>
                  <tr>
                    <th className='border p-1 text-secondary font-normal w-[25%]'>
                      User Type
                    </th>
                    <th className='border p-1 text-secondary font-normal w-[45%]'>
                      User Email
                    </th>
                    <th className='border p-1 text-secondary font-normal w-[25%]'>
                      User Password
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userCredentials?.map((userCredential, index) => (
                    <tr key={index}>
                      <td className='border p-1'>{userCredential.userType}</td>
                      <td className='border p-1'>{userCredential.userEmail}</td>
                      <td className='border p-1'>
                        {userCredential.userPassword}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <div className='form-control mt-6 modal-action'>
          <form method='dialog'>
            <button className='btn border-0 w-full uppercase text-secondary bg-slate-700 hover:bg-slate-600'>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Project;
