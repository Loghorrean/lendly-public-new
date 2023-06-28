import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./AvailableEstateSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import CommonListIconElement from "@/src/shared/ui/blocks/CommonListIconElement";
import HouseIcon from "@/src/shared/ui/svg/for-borrowers/HouseIcon";
import PictureIcon from "@/src/shared/ui/svg/for-borrowers/PictureIcon";

const AvailableEstateSection = () => {
    return (
        <CommonBlock as="section" smaller className={styles.available_estate_section}>
            <Container>
                <div className={styles.available_estate_section__container}>
                    <div className={styles.available_estate_section__heading_container}>
                        <SecondaryHeading>
                            <Heading headingType={HEADING_TYPE.H2} className={styles.available_estate_section__heading}>
                                <span>Какая недвижимость</span>
                                <span>подходит для залога?</span>
                            </Heading>
                        </SecondaryHeading>
                    </div>
                    <ul>
                        <CommonListIconElement icon={<HouseIcon />} heading="Тип недвижимости">
                            Объекты, которые подходят для аренды или уже сданы в аренду: коммерческая недвижимость,
                            квартиры, апартаменты, таунхаусы и земельные участки под коммерческую застройку
                        </CommonListIconElement>
                        <CommonListIconElement icon={<PictureIcon />} heading="Локация">
                            Города с населением от 500 тысяч человек
                        </CommonListIconElement>
                    </ul>
                </div>
            </Container>
        </CommonBlock>
    );
}

export default AvailableEstateSection;
