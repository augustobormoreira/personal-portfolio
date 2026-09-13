export default function ExternalLink({
    href, linkName
}: {
    href: string,
    linkName: string,
}) {
    const isInternalOrMail = href?.startsWith("mailto:") || href?.startsWith("#");

    return <a
    href={href}
    target={isInternalOrMail? undefined : "_blank"}
    rel={isInternalOrMail? undefined : "noopener noreferrer"}>
        {linkName}
    </a>
}