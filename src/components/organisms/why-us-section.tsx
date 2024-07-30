import { Accessor, Index } from "solid-js";

import { MOTIVES } from "../../data/motives";
import { Section } from "../atoms/section";
import { Motive, TMotive } from "../molecules/motive";

export function WhyUsSection() {
    return (
        <Section>
            <h2 class="sm:text-7xl text-4xl font-extrabold text-stz-dark sm:mb-16 mb-8">
                De ce să ne alegi?
            </h2>
            <ul class="flex flex-col sm:gap-12 gap-8">
                <Index each={MOTIVES} children={renderMotive} />
            </ul>
        </Section>
    );
}

function renderMotive(motive: Accessor<TMotive>) {
    const { title, description } = motive();

    return <Motive title={title} description={description} />;
}
