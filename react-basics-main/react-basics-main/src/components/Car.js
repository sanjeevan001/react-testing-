function Car(props) {
  // const { brand, color } = props
  const { carInfo } = props;
  const { brand, color } = carInfo;

  const text = `Hi, Im a ${color} ${brand} Car`;
  return <h2>sanjeevan{text}</h2>;
}

export default Car;
