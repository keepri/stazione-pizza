import locationMapUrl from "../../assets/images/location.png";
import { H4 } from "../../components/atoms/heading-four";
import { Link } from "../../components/atoms/link";
import { PageTitle } from "../../components/atoms/page-title";
import { P } from "../../components/atoms/paragraph";
import { Section } from "../../components/atoms/section";

const STAZIONE_GOOGLE_MAPS =
    "https://www.google.com/maps/place/Stazione+Pizza/@46.7680171,23.6260863,17z/data=!3m1!4b1!4m6!3m5!1s0x47490d003aa1d59d:0x7a810040656b9392!8m2!3d46.7680171!4d23.6286612!16s%2Fg%2F11w23zm9sm?entry=ttu";

export function Contact() {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Section class="justify-between gap-4 max-sm:pb-24 sm:pb-32 lg:flex">
                <ContactInfo />
                <LocationMap />
            </Section>
        </>
    );
}

function ContactInfo() {
    return (
        <div class="flex flex-wrap gap-16 max-lg:mb-16">
            <div>
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
        <Link href={STAZIONE_GOOGLE_MAPS} target="_blank">
            <img
                width={700}
                class="max-w-full"
                src={locationMapUrl}
                alt="location on maps"
            />
        </Link>
    );
}
