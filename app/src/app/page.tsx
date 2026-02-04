import Image from "next/image";
import Navbar from "./components/Navbar";
import ProfileForm from "./components/Preview";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ProfileForm/>
    </div>
  );
}
