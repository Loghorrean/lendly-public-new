import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./UnavailableEstateSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import CommonListIconElement from "@/src/shared/ui/blocks/CommonListIconElement";
import HouseIcon from "@/src/shared/ui/svg/for-borrowers/HouseIcon";
import PictureIcon from "@/src/shared/ui/svg/for-borrowers/PictureIcon";
import SafeIcon from "@/src/shared/ui/svg/for-borrowers/SafeIcon";
import EncumbranceIcon from "@/src/shared/ui/svg/for-borrowers/EncumbranceIcon";
import RisksIcon from "@/src/shared/ui/svg/for-borrowers/RisksIcon";
import StateIcon from "@/src/shared/ui/svg/for-borrowers/StateIcon";

const UnavailableEstateSection = () => {
    return (
        <CommonBlock as="section" className={styles.unavailable_estate_section}>
            <Container>
                <div className={styles.unavailable_estate_section__container}>
                    <div className={styles.unavailable_estate_section__heading_container}>
                        <SecondaryHeading>
                            <Heading headingType={HEADING_TYPE.H2} className={styles.unavailable_estate_section__heading}>
                                <span>Какая недвижимость</span>
                                <span>не подходит для залога?</span>
                            </Heading>
                        </SecondaryHeading>
                    </div>
                    <ul>
                        <CommonListIconElement icon={<SafeIcon />} heading="Неправильно зарегистрированные">
                            С нарушением действующего законодательства
                        </CommonListIconElement>
                        <CommonListIconElement icon={<EncumbranceIcon />} heading="С обременениями">
                            Арестами, запретами и ограничениями на регистрацию. Исключение — зарегистрированные
                            договоры аренды
                        </CommonListIconElement>
                        <CommonListIconElement icon={<RisksIcon />} heading="С юридическими рисками">
                            Если на объект претендуют третьи лица и сделку можно оспорить
                        </CommonListIconElement>
                        <CommonListIconElement icon={<StateIcon />} heading="В плохом состоянии">
                            Ветхие и неликвидные объекты
                        </CommonListIconElement>
                    </ul>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default UnavailableEstateSection;
