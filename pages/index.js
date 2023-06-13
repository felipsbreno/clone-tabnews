import Confetti from "react-confetti";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Confetti width="1280" height="600" />

      <h1 style={{ fontFamily: "sans-serif" }}>
        Minha familía, amarei vocês para sempre 🥰 Vocês são a única na minha
        vida.
      </h1>
    </div>
  );
}

export default Home;
