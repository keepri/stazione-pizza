import { Index, ParentProps, Show, children } from "solid-js";

export type MenuCategoryTitle = ParentProps & {
    icons?: ReadonlyArray<string>;
};

type Props = MenuCategoryTitle;

export function MenuCategoryTitle(props: Props) {
    const resolved = children(() => props.children);

    return (
        <div class="flex justify-between items-center">
            <h2 class="font-dolmen text-stz-primary text-3xl mb-7">
                {resolved()}
            </h2>
            <Show when={Boolean(props.icons?.length)}>
                <div>
                    <Index each={props.icons}>
                        {function renderIcons(icon) {
                            return (
                                <span class="px-4">
                                    <img width={50} height={50} src={icon()} />
                                </span>
                            );
                        }}
                    </Index>
                </div>
            </Show>
        </div>
    );
}
