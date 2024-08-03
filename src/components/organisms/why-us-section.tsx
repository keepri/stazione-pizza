import { Accessor, Index } from "solid-js";

import { MOTIVES } from "../../data/motives";
import { Section } from "../atoms/section";
import { Motive, TMotive } from "../molecules/motive";

export function WhyUsSection() {
    return (
        <Section>
            <h2 class="mb-8 text-4xl font-extrabold text-stz-dark sm:mb-16 sm:text-7xl">
                De ce să ne alegi?
            </h2>
            <ul class="flex flex-col gap-8 sm:gap-12">
                <Index each={MOTIVES} children={renderMotive} />
            </ul>
        </Section>
    );
}

function renderMotive(motive: Accessor<TMotive>) {
    const { title, description } = motive();

    return <Motive title={title} description={description} />;
}
