import React, {ForwardedRef} from "react";
import Image, { ImageProps } from "next/image";

const ProjectImage = (props: ImageProps, ref: ForwardedRef<HTMLImageElement>) => {
    return <Image {...props} src={props.src} alt={props.alt} ref={ref} />;
};

export default React.forwardRef(ProjectImage);
