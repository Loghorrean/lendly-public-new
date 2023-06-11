import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import MobileMenuIcon from "@/src/shared/ui/svg/MobileMenuIcon";
import styles from "./MobileMenuButton.module.scss";
import {Button} from "@/src/shared/ui/buttons";

const MobileMenuButton = () => {
    return (
        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
            <Button className={styles.mobile_menu_button}>
                <MobileMenuIcon />
            </Button>
        </PrimaryButton>
    );
}

export default MobileMenuButton;
