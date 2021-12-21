import Link from "next/link";
import styles from '../styles/NotFound.module.css'
const NotFound = () => {
    return ( 
        <div className={styles.notfound}>
            <h1>Opps... 😭</h1>
            <h4>Page not found</h4>
            <button>Go back to the <Link href="/"><a>Homepage</a></Link></button>
        </div>
     );
}
 
export default NotFound;