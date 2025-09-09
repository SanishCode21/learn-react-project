function Hello() {

  let myName = "Sanish";
  let number = 456;
  let fullName = () => {
    return "Sanish kumar singh";
  }

  return <p>
    MessageNo: {number} I am your master {fullName()}
  </p>
}

export default Hello;
