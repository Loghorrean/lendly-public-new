import { ProjectImage } from "@/src/shared/ui/images";
import mainLogoImage from "@/public/logo/main-logo.png";
import { FC } from "react";
import { ImageProps } from "next/image";

const LogoImage: FC<Omit<ImageProps, "src" | "alt">> = ({ ...props }) => {
    return <ProjectImage {...props} src={mainLogoImage} alt="Main logo" />;
};

export default LogoImage;
