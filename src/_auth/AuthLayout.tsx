import { useUserContext } from '@/context/AuthContext';
import {Outlet , Navigate} from 'react-router-dom';



const AuthLayout = () => {

    const {isAuthenticated} = useUserContext();
    
  return (
    <>
        {
            isAuthenticated ? (<Navigate to='/' />) : (<> 
                <section className='flex flex-1 justify-center items-center flex-col py-10'>
                    <Outlet />
                </section>
            </>)
        }

        <img src={'/assets/images/side-img.jpg'} alt='Backgound-image' className='hidden md:block h-screen w-1/2 object-cover bg-no-repeat' />

    </>
  )
}

export default AuthLayout;