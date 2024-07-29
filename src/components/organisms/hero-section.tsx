import { Path } from "../../routes/utils";
import { ButtonLink } from "../atoms/button-link";
import { P } from "../atoms/paragraph";
import { Section } from "../atoms/section";

export function HeroSection() {
    return (
        <Section class="flex max-lg:flex-wrap justify-between max-xl:gap-16">
            <div class="max-w-[60ch]">
                <h1 class="sm:mb-8 mb-4 leading-tight text-4xl sm:text-6xl xl:text-8xl text-stz-dark font-poppins font-extrabold">
                    Pizza <span class="text-stz-primary">Napoletană</span>
                </h1>
                <P class="sm:mb-16 mb-8 sm:text-xl leading-relaxed">
                    Descoperă adevărata pizza napoletană chiar în inima
                    Clujului! Fiecare pizza este pregătită cu ingrediente
                    autentice și multă pasiune, pentru a-ți oferi o experiență
                    culinară de neuitat.
                </P>
                <ButtonLink href={Path.Menu}>DESCOPERĂ MENIUL</ButtonLink>
            </div>
            <img
                width={550}
                height={550}
                class="max-xl:mx-auto max-sm:w-full max-xl:max-w-md"
                src="src/assets/images/hero-pizza.png"
                alt="pizza"
            />
        </Section>
    );
}
