import styles from "../style";
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>This is our Banner</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>This is where we would be displaying heavy info,... like an alert to users opening the page</p>
    </div>
    </section>
  )
}

export default CTA