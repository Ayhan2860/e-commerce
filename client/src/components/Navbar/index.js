
import {Link} from 'react-router-dom';
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';
import Dropdown from '../dropdown';
function Navbar() {
    const {loggedIn} = useAuth();
    return <>
     <nav className={styles.nav}>
      <div className={styles.left} >
        <div className={styles.logo}>
            <Link to="/">E-Commerce</Link>
        </div>
        <ul className={styles.menu} >
            <li>
                <Link to="/">Products</Link>
            </li>
        </ul>
      </div>
      <div className={styles.right} >
        {!loggedIn && <>
            <Link  to="/signin" >
                <Button colorScheme="teal" >Signin</Button>
            </Link>
            <Link to="/signup" >
                <Button colorScheme="teal" variant="outline">Signup</Button>
            </Link>
        </>
        }

        { loggedIn && <Dropdown/>  }
      </div>
     </nav>
    </>
}

export default Navbar;