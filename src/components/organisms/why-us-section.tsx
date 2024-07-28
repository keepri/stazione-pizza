import { Index } from "solid-js";

import { MOTIVES } from "../../data/motives";
import { Motive } from "../atoms/motive";
import { Section } from "../atoms/section";

export function WhyUsSection() {
    return (
        <Section>
            <h2 class="text-7xl font-extrabold text-stz-dark mb-16">
                De ce să ne alegi?
            </h2>
            <ul class="flex flex-col gap-7">
                <Index each={MOTIVES}>
                    {function renderMotive(motive) {
                        const { title, description } = motive();

                        return (
                            <Motive title={title} description={description} />
                        );
                    }}
                </Index>
            </ul>
        </Section>
    );
}
