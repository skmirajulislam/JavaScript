import "./styles.css";

const commonStyles = {
  button: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  heading: {
    fontSize: "2rem",
    letterSpacing: 2
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  }
};

export default function App() {
  return (
    <div className="App">
      <form style={commonStyles.form}>
        <h3 style={commonStyles.heading}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        <div style={commonStyles.flexContainer}>
          <button style={commonStyles.button}>Cancel</button>
          <button style={commonStyles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
