import { content } from "./contents/landing/landingContent";
import { capitalize, capitalizeEach } from "./lib/utils";
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
          <button
            className={`px-4 py-2 bg-gradient-to-b from-secondary-lighter to-secondary text-secondary-dark text-shadow-lg shadow-secondary-dark font-extrabold  outline-none  hover:text-teal-500 hover:text-shadow-leaning hover:shadow-green-300 group ${styles.rotateFront} `}
          >
            {capitalizeEach(content.cta as string)}
          </button>
          <div
            className={`absolute top-2 outline outline-2 w-full h-full -z-10 outline-secondary ${styles.rotateFront}`}
          />
        </div>
      </section>
    </main>
  );
}
