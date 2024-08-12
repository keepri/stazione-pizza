import { clsx } from "clsx";

import FacebookSvg from "../../assets/icons/socials/facebook.svg";
import InstagramSvg from "../../assets/icons/socials/instagram.svg";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../../data/company-info";
import { Link } from "./link";

export type TSocialLink = "instagram" | "facebook";
type TProps = {
    type: TSocialLink;
    class?: string;
};

export function SocialLink(props: TProps) {
    const size = 20;
    const className = clsx(
        props.class,
        "flex items-center gap-2 text-lg hover:underline",
    );

    switch (props.type) {
        case "instagram":
            return (
                <Link class={className} href={INSTAGRAM_LINK} target="_blank">
                    <InstagramSvg width={size} height={size} fill="#401211" />
                    Instagram
                </Link>
            );

        case "facebook":
            return (
                <Link class={className} href={FACEBOOK_LINK} target="_blank">
                    <FacebookSvg width={size} height={size} fill="#401211" />
                    Facebook
                </Link>
            );

        default:
            return;
    }
}
