import { A } from "@solidjs/router";

import { H4 } from "../../components/atoms/heading-four";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";

const STAZIONE_GOOGLE_MAPS =
    "https://www.google.com/maps/place/Stazione+Pizza/@46.7680171,23.6260863,17z/data=!3m1!4b1!4m6!3m5!1s0x47490d003aa1d59d:0x7a810040656b9392!8m2!3d46.7680171!4d23.6286612!16s%2Fg%2F11w23zm9sm?entry=ttu";

export function Contact() {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Section class="lg:flex justify-between gap-4">
                <ContactInfo />
                <LocationMap />
            </Section>
        </>
    );
}

function ContactInfo() {
    return (
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
    );
}

function LocationMap() {
    return (
        <A href={STAZIONE_GOOGLE_MAPS} target="_blank">
            <img
                width={700}
                class="max-w-full"
                src="src/assets/images/location.png"
                alt="location on maps"
            />
        </A>
    );
}
