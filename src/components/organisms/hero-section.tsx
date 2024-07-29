import { Path } from "../../routes/utils";
import { ButtonLink } from "../atoms/button-link";
import { P } from "../atoms/paragraph";
import { Section } from "../atoms/section";

export function HeroSection() {
    return (
        <Section class="flex max-xl:flex-wrap justify-between max-xl:gap-14 max-xl:max-w-xl">
            <div class="max-w-prose">
                <h1 class="mb-8 leading-tight text-8xl text-stz-dark font-poppins font-extrabold">
                    Pizza <span class="text-stz-primary">Napoletană</span>
                </h1>
                <P class="mb-16 text-xl leading-relaxed">
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
                class="max-lg:mx-auto"
                src="src/assets/images/hero-pizza.png"
                alt="pizza"
            />
        </Section>
    );
}
