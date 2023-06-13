import {ImageProps} from "next/image";
import {ProjectImage} from "@/src/shared/ui/images";
import styles from "./WalletImage.module.scss";
import walletImage from "@/public/images/content/wallet-image.png";
import {cn} from "@/src/shared/utils";

type Props = Omit<ImageProps, "src" | "alt">;

const WalletImage = ({ ...props }: Props) => {
    return (
        <ProjectImage
            {...props}
            src={walletImage}
            alt="Wallet Image"
            className={cn(styles.wallet_image, props.className)}
        />
    );
}

export default WalletImage;
