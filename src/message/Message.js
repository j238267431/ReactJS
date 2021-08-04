import styles from "./message.module.css";
console.log(styles)

export function Message(props) {
    return (
        <div className={styles.message}>
            <p>hello {props.message}</p>
        </div>
    );

};