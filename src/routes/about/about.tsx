import aboutImageUrl from "../../assets/images/about.jpg";
import { H4 } from "../../components/atoms/heading-four";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";

export function About() {
    return (
        <>
            <PageTitle>Despre noi</PageTitle>
            <Section class="flex gap-16 max-lg:flex-wrap max-sm:pb-24 sm:gap-24 sm:pb-32">
                <AboutImage />
                <AboutInfo />
            </Section>
        </>
    );
}

function AboutInfo() {
    return (
        <div class="order-2 max-lg:order-1">
            <div class="mb-16">
                <H4 class="mb-4">Cine suntem</H4>
                <P>
                    Stazione Pizza este un business local din Cluj, fondat în
                    iulie 2024 de Csabi și Attila, doi prieteni pasionați de
                    arta culinară. Visul lor de a aduce un colț de Italia în
                    oraș s-a materializat în fiecare pizza preparată cu grijă și
                    ingrediente proaspete.
                </P>
            </div>
            <div>
                <H4 class="mb-4">Viziunea Noastră</H4>
                <P>
                    Ne dorim să fim locul preferat al clujenilor pentru a savura
                    pizza autentică napoletană. Vino să ne vizitezi și descoperă
                    povestea noastră prin fiecare felie delicioasă!
                </P>
            </div>
        </div>
    );
}

function AboutImage() {
    return (
        <span class="order-2 max-lg:mx-auto lg:order-1">
            <img
                width={275}
                class="max-w-full rounded-2xl"
                src={aboutImageUrl}
            />
        </span>
    );
}
