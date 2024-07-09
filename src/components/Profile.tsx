import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (

    <div className={styles.profileContainer}>
        <div>
            <img src="https://avatars.githubusercontent.com/u/96741873?v=4" alt="Junior Delesposti" />
        </div>

        <div>
            <strong>Junior Delesposti</strong>
            <p>
                <img src="icons/level.svg" alt="level" />
                Level 1
            </p>
        </div>

    </div>
    )
}