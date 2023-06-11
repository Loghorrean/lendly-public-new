import styles from "./WalletImage.module.scss";
import {ImageProps} from "next/image";
import walletImage from "@/public/images/landing/wallet-image.png";
import {cn} from "@/src/shared/utils";
import {ProjectImage} from "@/src/shared/ui/images";

type Props = Omit<ImageProps, "src" | "alt">

const WalletImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={walletImage}
            alt="Wallet image"
            className={cn(styles.wallet_image, props.className)}
        />
    );
}

export default WalletImage;
