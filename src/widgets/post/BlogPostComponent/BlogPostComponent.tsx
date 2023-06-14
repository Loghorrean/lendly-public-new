"use client";

import styles from "./BlogPostComponent.module.scss";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import {Container} from "@/src/shared/ui/layout";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import postAuthor from "@/public/images/post/post-author.png";
import {ProjectImage} from "@/src/shared/ui/images";
import {ProjectLink} from "@/src/shared/ui/links";
import postPicture1 from "@/public/images/post/post-picture-1.png";
import postPicture2 from "@/public/images/post/post-picture-2.png";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const BlogPostComponent = () => {
    return (
        <Container>
            <div className={styles.blog_post}>
                <ProjectLink href="/blog" className={styles.blog_post__back}>
                    <ArrowLeft />
                </ProjectLink>
                <div className={styles.blog_post__inner}>
                    <header className={styles.blog_post__header}>
                        <div className={styles.blog_post__date}>
                            05 декабря 2021 года
                        </div>
                        <ul className={styles.blog_post__tags}>
                            <li className={styles.blog_post__tag}>
                                инвестиции
                            </li>
                            <li className={styles.blog_post__tag}>
                                новости
                            </li>
                        </ul>
                    </header>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.blog_post__title}>
                        На Lendly выдан один из крупнейших краудзаймов в этом году
                    </Heading>
                    <div className={styles.blog_post__author}>
                        <ProjectImage src={postAuthor} alt="Post author" />
                        <div className={styles.blog_post__author_name}>
                            <span>Александр Волгин</span>
                            <span className={styles.blog_post__author_title}>CEO Lendly</span>
                        </div>
                    </div>
                    <div className={styles.blog_post__content}>
                        <header>
                            <ProjectImage src={postPicture1} alt="Post picture 1" />
                            <h2>
                                Средняя доходность в 25% годовых — рутина краудлендингового инвестора.
                                Но, как известно, выше доходность — выше риск. О подводных камнях таких
                                инвестиций рассказывает Александр Волгин, CEO и сооснователь Lendly.ru.
                            </h2>
                        </header>
                        <section>
                            <div>
                                <h3>Что такое краудлендинг</h3>
                                <p>
                                    Краудлендинг — это инструмент кредитования физическими и юридическими
                                    лицами бизнес-проектов, то есть это механизм коллективного инвестирования
                                    по договорам займа. В отличие от краудфандинга, где инвесторы не ставят
                                    себе цель заработать, краудлендинг больше похож на классическое кредитование.
                                    Только вместо банков кредиторами выступают частные лица.Рынок краудфандинга
                                    (куда входит и краудлендинг) в США и Канаде оценивается в $73,9 млрд,
                                    а европейский — в более чем $22 млрд. Российский рынок выглядит
                                    скромно — МСП-банк и Ассоциация операторов инвестиционных платформ
                                    прогнозируют, что в 2021 году его объем достигнет 11 млрд ₽ — это
                                    в 1,5 раза больше, чем годом ранее. В последующие два года он будет
                                    удваиваться и в 2023 году составит ₽40 млрд.
                                </p>
                                <p>
                                    При этом основным заемщиком является сегмент малого и среднего бизнеса.
                                    Средняя сумма выданного займа составляет примерно ₽1 млн. В краудлендинге
                                    инвесторов привлекает высокая доходность, в несколько раз превышающая
                                    ставки по депозитам. На фоне низких банковских ставок все больше людей
                                    ищут способы если не дополнительного заработка, то хотя бы сохранения
                                    сбережений. Поэтому и интерес к инвестиционным инструментам будет
                                    только возрастать.
                                </p>
                            </div>
                            <div>
                                <h3>Кто и зачем берет в долг на краудлендинговых площадках</h3>
                                <p>
                                    В России действует более 30 краудлендинговых площадок с различными
                                    бизнес-моделями и условиями предоставления займов. В основном это
                                    площадки, на которых бизнес может найти средства под исполнение госконтрактов
                                    или пополнение оборотных средств без обеспечения. Есть факторинговые площадки,
                                    финансирующие под обеспечение дебиторской задолженности, или площадки, где
                                    можно инвестировать исключительно под залог недвижимости, в том числе
                                    на ее покупку или строительство.
                                </p>
                                <p>
                                    В качестве заемщиков на краудлендинговых платформах выступают представители
                                    малого бизнеса, которым по каким-либо причинам сложно получить
                                    кредит в банке. Например, слишком короткий срок существования бизнеса,
                                    скромные финансовые показатели или маленькие суммы контрактов — все это
                                    неинтересно банкам. Даже для владельца коммерческой недвижимости, несмотря
                                    на наличие залога, может быть недоступен банковский кредит при отсутствии
                                    официального денежного потока.
                                </p>
                                <p>
                                    Из-за этого займы на краудлендинговой платформе, как правило, дороже,
                                    чем банковские кредиты, и обходятся заемщику от 15% до 30% годовых.
                                    При этом стоит помнить, что на рынке краудлендинга все риски невозврата
                                    ложатся на инвестора. Если ваш заемщик внезапно прогорит, вам не поможет
                                    ни ЦБ, ни условное Агентство по страхованию вкладов (АСВ). Единственный
                                    способ застраховать себя от потерь — диверсифицировать инвестиции
                                    по разным площадкам, заемщикам и внимательно рассматривать
                                    проект при принятии решения об инвестициях.
                                </p>
                            </div>
                            <div>
                                <h3>Риски краудлендинга</h3>
                                <ol>
                                    <li>
                                        <h4>1. Отсутствие унифицированной системы оценки заемщика</h4>
                                        <p>
                                            Первое, что нужно помнить, — вся ответственность лежит на инвесторе.
                                            Площадка сводит заемщика и кредитора, информирует инвесторов,
                                            но не дает никаких рекомендаций и гарантий. У краудлендинговых
                                            платформ нет унифицированной системы оценки заемщика и нет единой
                                            системы рейтинга — каждая оценивает их по-своему и присваивает
                                            рейтинг по собственной методике, детали которой, как правило,
                                            не раскрываются. У инвестора возникает вынужденная необходимость
                                            доверять конкретной платформе, ее опыту, риск-менеджменту,
                                            порядочности и так далее. При этом в случае дефолта сама площадка
                                            не несет никаких потерь, кроме репутационных.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>2. Непрозрачность бизнеса</h4>
                                        <p>
                                            У заемщика на разных площадках могут быть разные рейтинги, хотя
                                            площадки, как и банки, в своей оценке заемщиков используют
                                            одни и те же источники информации (отчетность предприятия,
                                            выписки по счетам, данные судебных приставов, арбитражных
                                            судов и судов общей юрисдикции, информация от бюро кредитных
                                            историй, с сайтов госзакупок и так далее). Значительная часть
                                            российского малого бизнеса находится в серой зоне и официальная
                                            отчетность далеко не отражает реальное положение.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>3. Асимметрия информации</h4>
                                        <p>
                                            Платформы определяют объем необходимой к раскрытию информации
                                            по своему усмотрению, профильный закон содержит лишь минимальный
                                            перечень требований. Возникает дилемма: с одной стороны, платформе
                                            нужно предоставить максимально полную информацию инвестору,
                                            с другой — не отпугнуть заемщика. Часто бизнес сам не хочет
                                            раскрывать более подробную информацию о состоянии своих дел
                                            и давать чувствительную для себя информацию для публикации.
                                        </p>
                                        <div>
                                            <ProjectImage src={postPicture2} alt="Post picture 2" />
                                            <span>
                                                В краудлендинге инвесторов ждут высокая доходность
                                                и соответствующие риски
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>4. Другие риски</h4>
                                        <ul>
                                            <li>
                                                <p>
                                                    <strong>потеря данных платформой</strong>, так как пока нет
                                                    требований об операционной надежности для платформ на законодательном
                                                    уровне и минимальных требований к софту;
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>прекращение деятельности площадки.</strong> прекращение
                                                    деятельности площадки. В случае дефолта или просто ухода
                                                    с рынка остается открытым вопрос о том, кто будет
                                                    осуществлять администрирование платежей. В законе
                                                    не прописано единого механизма действий инвесторов,
                                                    регулятора и администрации платформы в случае прекращения
                                                    деятельности, хотя все данные об операциях инвесторов
                                                    и передаются в банк, в котором открыт номинальный
                                                    счет платформы;
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>процесс взыскания долга.</strong> На данный момент
                                                    большинство платформ берет на себя процесс взыскания при
                                                    наступлении дефолта заемщика, но были примеры, когда инвесторам
                                                    приходилось самостоятельно заниматься процессом судебного
                                                    взыскания. Механизм взыскания и его тарификация регулируется
                                                    исключительно внутренними документами каждой платформы, требования
                                                    к нему никак не отражены в профильном законодательстве,
                                                    у некоторых процесс совсем не регламентируется или регламент не
                                                    соблюдается. Потенциальному инвестору на это стоит обращать
                                                    особое внимание до начала инвестирования.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <h3>Риски краудлендинга</h3>
                                <ol style={{ listStyleType: "decimal", gap: "0.75rem" }}>
                                    <li>
                                        <p>
                                            <strong>потеря данных платформой</strong>, так как пока нет
                                            требований об операционной надежности для платформ на законодательном
                                            уровне и минимальных требований к софту;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>прекращение деятельности площадки.</strong> прекращение
                                            деятельности площадки. В случае дефолта или просто ухода
                                            с рынка остается открытым вопрос о том, кто будет
                                            осуществлять администрирование платежей. В законе
                                            не прописано единого механизма действий инвесторов,
                                            регулятора и администрации платформы в случае прекращения
                                            деятельности, хотя все данные об операциях инвесторов
                                            и передаются в банк, в котором открыт номинальный
                                            счет платформы;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>процесс взыскания долга.</strong> На данный момент
                                            большинство платформ берет на себя процесс взыскания при
                                            наступлении дефолта заемщика, но были примеры, когда инвесторам
                                            приходилось самостоятельно заниматься процессом судебного
                                            взыскания. Механизм взыскания и его тарификация регулируется
                                            исключительно внутренними документами каждой платформы, требования
                                            к нему никак не отражены в профильном законодательстве,
                                            у некоторых процесс совсем не регламентируется или регламент не
                                            соблюдается. Потенциальному инвестору на это стоит обращать
                                            особое внимание до начала инвестирования.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </section>
                    </div>
                    <div className={styles.blog_post__conclusion}>
                        <Heading headingType={HEADING_TYPE.H3} className={styles.blog_post__conclusion_heading}>
                            Начните инвестировать в малый и средний бизнес
                        </Heading>
                        <p className={styles.blog_post__conclusion_text}>
                            Увеличивайте свой капитал, инвестируя в бизнес, который прошел тщательный отбор: автоматический
                            и ручной скоринг Лендли. Выбирайте подходящую стратегию и получайте до 25,7% годовых.
                        </p>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow>
                            <ProjectLink href="/auth/register" className={styles.blog_post__conclusion_link}>
                                Стать инвестором <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                            </ProjectLink>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default BlogPostComponent;