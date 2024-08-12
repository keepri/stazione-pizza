import locationMapUrl from "../../assets/images/location.png";
import { CallUs } from "../../components/atoms/call-us";
import { H4 } from "../../components/atoms/heading-four";
import { Link } from "../../components/atoms/link";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";
import { SocialLink } from "../../components/atoms/social-link";
import { GOOGLE_MAPS_LINK } from "../../data/company-info";

export function Contact() {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Section>
                <ContactInfo />
            </Section>
            <Section class="max-sm:pb-24 sm:pb-32">
                <LocationMap />
            </Section>
        </>
    );
}

function ContactInfo() {
    return (
        <div class="flex flex-wrap justify-between gap-16">
            {/* TODO extract into component */}
            <div>
                <H4 class="mb-4 whitespace-nowrap">Program</H4>
                <P class="mb-1 font-bold">luni - vineri: 8-20</P>
                <P>sâmbătă - duminică: închis</P>
            </div>
            <div>
                <H4 class="mb-4 whitespace-nowrap">Contactează-ne</H4>
                <CallUs class="mb-1" />
                <SocialLink class="mb-1" type="instagram" />
                <SocialLink type="facebook" />
            </div>
            <div>
                <H4 class="mb-4 whitespace-nowrap">Locație</H4>
                <P class="mb-1 font-bold">strada Unirii, numărul 23</P>
                <P>Cluj-Napoca</P>
            </div>
        </div>
    );
}

function LocationMap() {
    return (
        <Link href={GOOGLE_MAPS_LINK} target="_blank">
            <img
                width={1440}
                class="max-w-full"
                src={locationMapUrl}
                alt="location on maps"
            />
        </Link>
    );
}
