import { content } from "./contents/landing/landingContent";
import { capitalize, capitalizeEach } from "./lib/utils";
import StartButton from "./ui/components/StartButton";
import styles from "./ui/styles/custom.module.css";

export default function Home() {
  return (
    <main>
      <section className="min-h-dvh grid place-content-center gap-y-14">
        <header className="px-6 text-center text-balance mb-10">
          <h1>{capitalizeEach(content.headline as string)}</h1>
          <h3 className="mt-6 font-bungee">
            {capitalize(content.subheadline as string)}
          </h3>
        </header>

        <div
          className={`justify-self-center grid place-content-center relative ${styles.perspective1000}`}
        >
          <StartButton>{capitalizeEach(content.cta as string)}</StartButton>
          <div
            className={`absolute top-2 outline outline-2 w-full h-full -z-10 outline-secondary ${styles.rotateFront}`}
          />
        </div>
      </section>
    </main>
  );
}
