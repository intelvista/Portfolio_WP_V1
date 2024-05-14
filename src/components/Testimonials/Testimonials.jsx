import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_container}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
          <h4>John Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://plus.unsplash.com/premium_photo-1670514307218-c2d2159d8d4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
          <h4>John Doe</h4>
          <p className={styles.bio} >Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
          <h4>John Doe</h4>
          <p className={styles.bio} >Web Developer</p>
        </div>
       
      </div>
    </div>
  );
}

export default Testimonials;
