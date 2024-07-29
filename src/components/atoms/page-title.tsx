import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

type TProps = ParentProps & {
    side?: "left" | "right";
};

export function PageTitle(props: TProps) {
    props.side ??= "left";

    const resolved = children(() => props.children);

    const isLeft = props.side === "left";
    const isRight = props.side === "right";

    return (
        <div class="flex justify-between items-center max-lg:py-8 py-14">
            <h1
                class={clsx(
                    "md:text-8xl text-6xl font-extrabold text-stz-dark md:px-32 sm:px-20 px-6 sm:whitespace-nowrap",
                    isRight && "order-2",
                    isLeft && "order-1",
                )}
            >
                {resolved()}
            </h1>
            <span
                class={clsx(
                    "w-full h-16 bg-stz-primary",
                    isRight && "order-1",
                    isLeft && "order-2",
                )}
            />
        </div>
    );
}
