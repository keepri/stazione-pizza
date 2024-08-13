import clsx from "clsx";
import { Accessor, Index, Show, children } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

import { TMenuCategory } from "../../types/menu";
import {
    MENU_DOUBLE_ICON_WIDTH,
    MENU_SINGLE_ICON_WIDTH,
} from "../../utils/constants";

const ICON_SIZE = 60;

type TProps = {
    children: TMenuCategory["title"];
    icons: TMenuCategory["icons"];
    class?: JSX.HTMLAttributes<HTMLDivElement>["class"];
};
type TIcon = NonNullable<TProps["icons"]>[number];

export function MenuCategoryTitle(props: TProps) {
    const resolved = children(() => props.children);

    const numberOfIcons = props.icons?.length ?? 0;

    return (
        <div class={clsx(props.class, "flex items-center justify-between")}>
            <h2 class="font-dolmen text-3xl text-stz-primary sm:text-4xl">
                {resolved()}
            </h2>
            <Show when={Boolean(numberOfIcons)}>
                <div
                    class={clsx(
                        "flex items-center justify-end",
                        numberOfIcons > 1 && "justify-around",
                        numberOfIcons === 2
                            ? `w-${MENU_DOUBLE_ICON_WIDTH}`
                            : `w-${MENU_SINGLE_ICON_WIDTH}`,
                    )}
                >
                    <Index each={props.icons} children={renderIcons} />
                </div>
            </Show>
        </div>
    );
}

function renderIcons(icon: Accessor<TIcon>) {
    const Icon = icon();

    if (typeof Icon === "string") {
        return (
            <div class="w-20">
                <img
                    class="mx-auto"
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={Icon}
                />
            </div>
        );
    }

    return (
        <div class="w-20">
            <Icon class="mx-auto" width={ICON_SIZE} height={ICON_SIZE} />
        </div>
    );
}
