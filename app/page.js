import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 text-black">
        <p>APP</p>
      </div>
    </>
  );
}
