import { Path } from "../../routes/utils";
import { ButtonLink } from "../atoms/button-link";
import { Section } from "../atoms/section";

export function HeroSection() {
    return (
        <Section class="flex flex-wrap justify-between">
            <div class="max-w-prose">
                <h1 class="mb-8 leading-tight text-8xl text-stz-dark font-poppins font-extrabold">
                    Pizza <span class="text-stz-primary">Napoletană</span>
                </h1>
                <p class="mb-12 max-w-prose font-dm-sans text-xl leading-relaxed">
                    Descoperă adevărata pizza napoletană chiar în inima
                    Clujului! Fiecare pizza este pregătită cu ingrediente
                    autentice și multă pasiune, pentru a-ți oferi o experiență
                    culinară de neuitat.
                </p>
                <ButtonLink href={Path.Menu}>DESCOPERĂ MENIUL</ButtonLink>
            </div>
            <img
                width={500}
                height={500}
                src="src/assets/images/hero-pizza.png"
                alt="pizza"
            />
        </Section>
    );
}
