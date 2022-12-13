import ContentLoader, { IContentLoaderProps } from "react-content-loader"

export const Skeleton = (props: IContentLoaderProps) => {
    return (
        <ContentLoader
            speed={2}
            width={420}
            height={504}
            viewBox="0 0 420 504"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="103" y="305" rx="3" ry="3" width="276" height="29" />
            <circle cx="236" cy="160" r="126" />
            <rect x="106" y="351" rx="0" ry="0" width="274" height="82" />
            <rect x="230" y="454" rx="0" ry="0" width="152" height="49" />
            <rect x="103" y="461" rx="0" ry="0" width="92" height="34" />
        </ContentLoader>
    )
}