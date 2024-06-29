import React from 'react';
import styles from './EngineRoomDisplay.module.css';

const EngineRoomDisplay = ({
  engineSpeed,
  engineLoad,
  fuelRate,
  coolantLevel,
  batteryVoltage,
  engineHours,
  engineOilPressure,
  engineStatus,
  fuelRateValue,
  engineHoursValue,
}) => {
  return (
    <div className={styles.engineRoomDisplay}>
      <div className={styles.engineSpeedGauge}>
        <div className={styles.gaugeDial}>
          
          <div
  className={styles.gaugeNeedle}
  style={{ transform: `rotate(${(engineOilPressure / 100) * 180}deg)` }}
/>

        </div>
        <div className={styles.gaugeLabel}>Engine Speed</div>
        <div className={styles.gaugeValue}>{engineSpeed} RPM</div>
      </div>

      <div className={styles.engineParameters}>
        <div className={styles.parameterRow}>
          <div className={styles.parameterLabel}>Engine Load</div>
          <div className={styles.parameterValue}>{engineLoad} %</div>
        </div>
        <div className={styles.parameterRow}>
          <div className={styles.parameterLabel}>Fuel Rate</div>
          <div className={styles.parameterValue}>{fuelRate} Gal/h</div>
        </div>
        <div className={styles.parameterRow}>
          <div className={styles.parameterLabel}>Coolant Level</div>
          <div className={styles.parameterValue}>{coolantLevel}</div>
        </div>
        <div className={styles.parameterRow}>
          <div className={styles.parameterLabel}>Battery Voltage</div>
          <div className={styles.parameterValue}>{batteryVoltage} Volts</div>
        </div>
        <div className={styles.parameterRow}>
          <div className={styles.parameterLabel}>Engine Hours</div>
          <div className={styles.parameterValue}>{engineHours} Hrs</div>
        </div>
      </div>

      <div className={styles.engineOilPressureGauge}>
        <div className={styles.gaugeDial}>
          <div
  className={styles.gaugeNeedle}
  style={{ transform: `rotate(${(engineOilPressure / 100) * 180}deg)` }}
/>

        </div>
        <div className={styles.gaugeLabel}>Engine Oil Pressure</div>
        <div className={styles.gaugeValue}>{engineOilPressure} Psi</div>
      </div>

      <div className={styles.engineRoomImage}>
        <img src="engine-room.jpg" alt="Engine Room" />
      </div>

      <div className={styles.engineStatus}>
        {engineStatus?.map((status, index) => (
          <div key={index} className={styles.statusItem}>
            {status}
          </div>
        ))}
      </div>

      <div className={styles.engineData}>
        <div className={styles.dataItem}>
          <div className={styles.dataLabel}>Fuel Rate</div>
          <div className={styles.dataValue}>{fuelRateValue} gal/h</div>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.dataLabel}>Engine Hours</div>
          <div className={styles.dataValue}>{engineHoursValue} Hours</div>
        </div>
      </div>
    </div>
  );
};

export default EngineRoomDisplay;