import React from "react";
import styles from "./Number.module.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Number() {
  return (
    <div className={styles.number_contrainer}>
      <div className={styles.number_items}>
        <h4>
          <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={100} duration={5} />
                ) : 0}
                +
              </div>
            )}
          </ReactVisibilitySensor>{" "}
        </h4>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h4>
          <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={50} duration={5} />
                ) : 0}
                +
              </div>
            )}
          </ReactVisibilitySensor>{" "}
          </h4>
        <p>Years of experience</p>
      </div>
      <div className={styles.number_items}>
        <h4>
        <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={80} duration={5} />
                ) : 0}
                +
              </div>
            )}
          </ReactVisibilitySensor>{" "}
        </h4>
        <p>Happy Client</p>
      </div>
      <div className={styles.number_items}>
        <h4>
        <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={40} duration={5} />
                ) : 0}
                +
              </div>
            )}
          </ReactVisibilitySensor>{" "}
        </h4>
        <p>Companies Helped</p>
      </div>
    </div>
  );
}

export default Number;
