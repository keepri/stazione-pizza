import { ParentProps } from "solid-js";

export function RootLayout(props: ParentProps) {
    return <main>{props.children}</main>;
}
