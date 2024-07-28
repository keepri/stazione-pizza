import { H4 } from "../../components/atoms/heading-four";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";

export function Contact() {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Section class="lg:flex justify-between gap-4">
                <div class="max-lg:mb-16">
                    <div class="mb-16">
                        <H4 class="mb-4">Program</H4>
                        <P class="font-bold">luni - vineri: 8-20</P>
                        <P>sâmbătă - duminică: închis</P>
                    </div>
                    <div>
                        <H4 class="mb-4">Locație</H4>
                        <P class="font-bold">strada Unirii, numărul 23</P>
                        <P>Cluj-Napoca</P>
                    </div>
                </div>
                <img
                    width={700}
                    class="max-w-full"
                    src="src/assets/images/location.png"
                    alt="location on maps"
                />
            </Section>
        </>
    );
}
