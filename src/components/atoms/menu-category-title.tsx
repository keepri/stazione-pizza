import { Accessor, Index, ParentProps, Show, children } from "solid-js";

type Props = ParentProps & {
    icons: ReadonlyArray<string>;
};

export function MenuCategoryTitle(props: Props) {
    const resolved = children(() => props.children);

    return (
        <div class="flex justify-between items-center">
            <h2 class="font-dolmen text-stz-primary text-3xl mb-7">
                {resolved()}
            </h2>
            <Show when={Boolean(props.icons?.length)}>
                <div>
                    <Index each={props.icons} children={renderIcons} />
                </div>
            </Show>
        </div>
    );
}

function renderIcons(icon: Accessor<Props["icons"][number]>) {
    return (
        <span class="px-4">
            <img width={50} height={50} src={icon()} />
        </span>
    );
}
