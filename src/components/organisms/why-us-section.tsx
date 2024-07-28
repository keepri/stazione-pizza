import { Accessor, Index } from "solid-js";

import { MOTIVES } from "../../data/motives";
import { Section } from "../atoms/section";
import { Motive, TMotive } from "../molecules/motive";

export function WhyUsSection() {
    return (
        <Section>
            <h2 class="text-7xl font-extrabold text-stz-dark mb-16">
                De ce să ne alegi?
            </h2>
            <ul class="flex flex-col gap-12">
                <Index each={MOTIVES} children={renderMotive} />
            </ul>
        </Section>
    );
}

function renderMotive(motive: Accessor<TMotive>) {
    const { title, description } = motive();

    return <Motive title={title} description={description} />;
}
