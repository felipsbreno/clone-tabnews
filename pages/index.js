import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Home() {
  const { width, height } = useWindowSize();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Confetti width={width} height={height} gravity={0.2} />

      <h1 style={{ fontFamily: "sans-serif" }}>
        Anna meu amor, te amarei para sempre 🥰 Você é única na minha vida.
      </h1>
    </div>
  );
}

export default Home;
