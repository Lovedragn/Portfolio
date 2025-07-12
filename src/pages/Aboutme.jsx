import Skillroll from "../components/Skillroll";

const Aboutme = () => {
  return (
    <section className="flex-center flex-col w-full text-white bg-[var(--bg-main-dark)] h-screen">
      <div className="text-center w-full">
        <h1
          className="text-white text-7xl font-bold"
          style={{ fontFamily: "subtitle" }}
        >
          About Me
        </h1>
      </div>
      <Skillroll />
    </section>
  );
};

export default Aboutme;
