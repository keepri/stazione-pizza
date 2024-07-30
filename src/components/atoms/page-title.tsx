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
        <div class="container flex justify-between items-center sm:py-14 py-8">
            <h1
                class={clsx(
                    "md:text-8xl text-6xl font-extrabold text-stz-dark sm:whitespace-nowrap",
                    isRight && "order-2",
                    isLeft && "order-1",
                )}
            >
                {resolved()}
            </h1>
            <div
                class={clsx(
                    "w-full h-16 bg-stz-primary",
                    isRight &&
                        "order-1 sm:-translate-x-[132px] -translate-x-16",
                    isLeft && "order-2 sm:translate-x-[132px] translate-x-16",
                )}
            />
        </div>
    );
}
