import pizzaUrl from "../../assets/images/hero-pizza.png";
import { Path } from "../../routes/utils";
import { P } from "../atoms/paragraph";
import { Section } from "../atoms/section";
import { ButtonLink } from "../molecules/button-link";

export function HeroSection() {
    return (
        <Section class="flex justify-between max-xl:gap-16 max-lg:flex-wrap">
            <div class="my-auto max-w-[60ch]">
                <h1 class="mb-4 font-poppins text-5xl font-extrabold leading-tight text-stz-dark sm:mb-8 sm:text-6xl xl:text-8xl">
                    Pizza <span class="text-stz-primary">Napoletană</span>
                </h1>
                <P class="mb-8 leading-relaxed sm:mb-16 sm:text-xl">
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
                class="max-xl:mx-auto max-xl:max-w-md max-sm:w-full"
                src={pizzaUrl}
                alt="pizza"
            />
        </Section>
    );
}
