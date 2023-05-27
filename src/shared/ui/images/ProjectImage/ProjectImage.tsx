import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

const ProjectImage: FC<ImageProps> = props => {
    return <Image {...props} src={props.src} alt={props.alt} />;
};

export default ProjectImage;
