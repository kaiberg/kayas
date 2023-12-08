import styles from './styles.module.css'
import globalStyles from '@/app/css/styles.module.css'
import {ConcatClasses} from "@/helpers/helpers";
import Link from "next/link";

function Header() {
    return (
        <header className={ConcatClasses(globalStyles.wrapper, styles.header)}>
            <div className={styles.wrapper}>
                <Link className={'headline'} href={'/'}>Secrets</Link>
                <nav className={styles.links}>
                    <Link className={'headline-medium'} href={'/create'}>Create</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;