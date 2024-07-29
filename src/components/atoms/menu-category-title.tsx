import clsx from "clsx";
import { Accessor, Index, Show, children } from "solid-js";

import { TMenuCategory } from "../../routes/menu/menu";

type TProps = {
    children: TMenuCategory["title"];
    icons: TMenuCategory["icons"];
};

const WIDTH = 20;

export function MenuCategoryTitle(props: TProps) {
    const resolved = children(() => props.children);

    const numberOfIcons = props.icons.length;

    return (
        <div class="flex justify-between items-center mb-7">
            <h2 class="font-dolmen text-stz-primary text-3xl">{resolved()}</h2>
            <Show when={Boolean(props.icons.length)}>
                <div
                    class={clsx(
                        "flex justify-end items-center gap-4",
                        props.icons.length > 1 && "justify-between",
                        `w-${WIDTH * numberOfIcons}`,
                    )}
                >
                    <Index each={props.icons} children={renderIcons} />
                </div>
            </Show>
        </div>
    );
}

function renderIcons(icon: Accessor<TProps["icons"][number]>) {
    const size = 60;
    const Icon = icon();

    if (typeof Icon === "string") {
        return (
            <span class={`w-${WIDTH}`}>
                <img class="mx-auto" width={size} height={size} src={Icon} />
            </span>
        );
    }

    return (
        <span class={`w-${WIDTH}`}>
            <Icon class="mx-auto" width={size} height={size} />
        </span>
    );
}
