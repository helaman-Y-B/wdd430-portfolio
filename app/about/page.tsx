import TheWhy from "@/components/about/TheWhy";
import Image from "next/image";
import aboutImage600 from "../../public/about/aboutCode600.webp";
import aboutImage800 from "../../public/about/aboutCode800.webp";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        I am a passionate developer with experience in creating dynamic and
        user-friendly web applications.
        <br />I am constantly learning new technologies and improving my skills
        to deliver high-quality solutions. My goal is to build applications that
        not only meet user needs but also provide an exceptional user
        experience.
      </p>
      <picture>
        <source media="(min-width: 601px)" srcSet={aboutImage800.src} />
        <Image
          src={aboutImage600}
          alt="About me"
          className="mx-auto rounded-lg mt-8 mb-8"
        />
      </picture>
      <TheWhy />
    </main>
  );
}
