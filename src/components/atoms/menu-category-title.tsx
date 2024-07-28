import clsx from "clsx";
import { Accessor, Index, Show, children } from "solid-js";

import { TMenuCategory } from "../../routes/menu/menu";

type TProps = {
    children: TMenuCategory["title"];
    icons: TMenuCategory["icons"];
};

export function MenuCategoryTitle(props: TProps) {
    const resolved = children(() => props.children);

    return (
        <div class="flex justify-between items-center mb-7">
            <h2 class="font-dolmen text-stz-primary text-3xl">{resolved()}</h2>
            <Show when={Boolean(props.icons.length)}>
                <div
                    class={clsx(
                        "flex justify-end items-center gap-4 w-40",
                        props.icons.length > 1 && "justify-between",
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

    return (
        <span class="w-20">
            <img class="mx-auto" width={size} height={size} src={icon()} />
        </span>
    );
}
