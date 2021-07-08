import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';

const Protected:FC = (props) =>{
  return (
    <>
      To jest chroniona strona!
    </>
  )
} 

export default Protected;

export const getServerSideProps = withPageAuthRequired();
