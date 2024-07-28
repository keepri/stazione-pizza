import { H4 } from "../../components/atoms/heading-four";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";

export function About() {
    return (
        <>
            <PageTitle>Despre noi</PageTitle>
            <Section class="flex max-lg:flex-wrap max-sm:gap-16 gap-24">
                <span class="max-lg:order-2 order-1 max-lg:mx-auto">
                    <img
                        width={400}
                        class="max-w-full rounded-2xl"
                        src="src/assets/images/about.jpg"
                    />
                </span>
                <div class="max-lg:order-1 order-2">
                    <div class="mb-16">
                        <H4 class="mb-4">Cine suntem</H4>
                        <P class="max-w-[55ch]">
                            Stazione Pizza este un business local din Cluj,
                            fondat în iulie 2024 de Csabi și Attila, doi
                            prieteni pasionați de arta culinară. Visul lor de a
                            aduce un colț de Italia în oraș s-a materializat în
                            fiecare pizza preparată cu grijă și ingrediente
                            proaspete.
                        </P>
                    </div>
                    <div>
                        <H4 class="mb-4">Viziunea Noastră</H4>
                        <P class="max-w-[55ch]">
                            Ne dorim să fim locul preferat al clujenilor pentru
                            a savura pizza autentică napoletană. Vino să ne
                            vizitezi și descoperă povestea noastră prin fiecare
                            felie delicioasă!
                        </P>
                    </div>
                </div>
            </Section>
        </>
    );
}
