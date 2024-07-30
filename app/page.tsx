import { content } from "./contents/landing/landingContent";
import { capitalize, capitalizeEach } from "./lib/utils";
import CustomButton from "./ui/components/CustomButton";

export default function Home() {
  return (
    <main>
      <section className="min-h-dvh grid place-content-center gap-y-14">
        <header className="px-6 text-center text-balance">
          <h1>{capitalizeEach(content.headline as string)}</h1>
          <h3 className="mt-6">{capitalize(content.subheadline as string)}</h3>
        </header>
        <CustomButton className="justify-self-center text-title font-jersey-10 tracking-wider">
          {capitalizeEach(content.cta as string)}
        </CustomButton>
      </section>
    </main>
  );
}
