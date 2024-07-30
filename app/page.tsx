import { content } from "./contents/landing/landingContent";

export default function Home() {
  return (
    <main>
      <section>
        <header>
          <h1>{content.headline}</h1>
          <h3>{content.subheadline}</h3>
        </header>
      </section>
    </main>
  );
}
