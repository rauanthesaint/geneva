import styles from '@/app/page.module.scss'
import Section from '@/components/section/Section.component'
import Container from '@/components/container/Container.component'
import clsx from 'clsx'
import Image from 'next/image'
import Logo from '@/public/static/img/logo.svg'
import Flowers from '@/public/static/img/fowers.png'
import Hotel from '@/public/static/img/hotel.jpeg'
import Almaty from '@/public/static/img/almaty.jpg'
import HoetlLogo1 from '@/public/static/img/rixos_logo.png'
import HoetlLogo2 from '@/public/static/img/royal_tulip_logo.png'
import Events from '@/public/static/img/events.png'
import Gift from '@/public/static/img/gift.svg'
import Link from 'next/link'
import Menu from '@/public/static/img/menu.png'

import BannerLogo from '@/public/static/img/banner_logo.svg'
import BannerText from '@/public/static/img/banner_start.svg'
import BannerTitle from '@/public/static/img/banner_title.png'
import BannerLine from '@/public/static/img/banner_line.svg'
import BannerDate from '@/public/static/img/banner_date.svg'
import BannerRSVP from '@/public/static/img/kindly_rsvp.svg'
import BannerTie from '@/public/static/img/black_tie.svg'

export default function Page() {
    return (
        <main className={styles.Page}>
            <Section className={clsx(styles.beige, styles.Banner)}>
                <Container className={clsx(styles.centered, styles.Flex)}>
                    <Image
                        src={BannerLogo}
                        alt="Banner Logo"
                        id={styles.banner_logo}
                    />
                    <Image
                        src={BannerText}
                        alt="Banner Start"
                        id={styles.banner_start}
                    />
                    <Image
                        alt="Banner Title"
                        src={BannerTitle}
                        id={styles.banner_title}
                    />
                    <Image
                        src={BannerLine}
                        alt="Banner Line"
                        id={styles.banner_line}
                    />
                    <Image
                        src={BannerDate}
                        alt="Banner Date"
                        id={styles.banner_date}
                    />
                    <Image
                        src={BannerRSVP}
                        alt="Banner Date"
                        id={styles.banner_rsvp}
                    />
                    <Image
                        src={BannerTie}
                        alt="Banner Date"
                        id={styles.banner_tie}
                    />

                    <Image
                        className={styles.FlowersImage}
                        alt="Flowers"
                        src={Flowers}
                    />
                </Container>
            </Section>
            <Section id="1">
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>Accomodation</span>
                    <p>
                        We&nbsp;suggest staying at&nbsp;the Ritz-Carlton Hotel.
                        You will be&nbsp;able to&nbsp;book the hotel using the
                        special rate provided for our guests.
                    </p>
                    <div className={styles.Columns}>
                        <Image
                            className={styles.Image}
                            alt="Hotel"
                            src={Hotel}
                        />
                        <div className={styles.Text}>
                            <p>
                                You can book the hotel by&nbsp;downloading the
                                registration form from this link.
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 8,
                                }}
                            >
                                <a
                                    href={
                                        '/Reservation form_The Ritz-Carlton Almaty_Indigo Enternainment_06-10.06.2024 (1).docx'
                                    }
                                    download={true}
                                    className={clsx(
                                        styles.Button,
                                        styles.Primary
                                    )}
                                >
                                    Reservation Form
                                </a>
                                <a
                                    href={
                                        '/Резервационная форма_The Ritz Carlton Almaty_Indigo Enternainment_06-10.06.2024.docx'
                                    }
                                    download={true}
                                    className={clsx(
                                        styles.Button,
                                        styles.Secondary
                                    )}
                                >
                                    ФОРМА БРОНИРОВАНИЯ
                                </a>
                            </div>
                            <p>
                                Then, after filling out this form, it&nbsp;needs
                                to&nbsp;be&nbsp;sent to&nbsp;the hotel
                                reservation department&rsquo;s email:
                                <Link
                                    style={{ color: '#175a99' }}
                                    href={
                                        'mailto:rc.alarz.reservations@ritzcarlton.com'
                                    }
                                >
                                    rc.alarz.reservations@ritzcarlton.com
                                </Link>
                            </p>
                            <p>
                                A&nbsp;special rate for our guests will
                                be&nbsp;applicable for check-in starting from
                                June 6th and only after filling out the
                                Reservation form.
                            </p>
                            <p>
                                Reservations should be&nbsp;made not later than
                                6th of&nbsp;May, 2024 and are subject
                                to&nbsp;availability.
                            </p>

                            <p>
                                Otherwise, if&nbsp;you prefer to&nbsp;stay
                                elsewhere Almaty has other options for
                                accommodation such as:
                            </p>
                            <div className={styles.FlexRow}>
                                <Image alt="Rixos Hotel" src={HoetlLogo1} />
                                <Image
                                    alt="Royal Tulip Hotel"
                                    src={HoetlLogo2}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section id="2">
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>Timeline of Events</span>
                    <p>
                        The wedding ceremony will begin at&nbsp;17:00. Please
                        gather at&nbsp;the ballroom entrance area. Following the
                        outdoor ceremony, the guests will be&nbsp;welcomed
                        inside for a&nbsp;celebratory dinner, drinks and
                        dancing.
                    </p>
                    <Image
                        style={{ width: '90%', height: 'fit-content' }}
                        alt="Events"
                        src={Events}
                    />
                </Container>
            </Section>

            <Section id="3" className={styles.beige}>
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>Gift Registry</span>
                    <p>
                        Your presence as&nbsp;our guest is&nbsp;the greatest
                        gift.
                    </p>
                    <Image
                        style={{
                            width: 'min(20vw, 96px)',
                            height: 'fit-content',
                        }}
                        alt="Gift"
                        src={Gift}
                    />
                    <p>
                        However, if&nbsp;you would like to&nbsp;give the
                        newlyweds something, you can refer to&nbsp;our gift
                        registry linked below. This way, your gift will
                        be&nbsp;directly mailed to&nbsp;their new home address.
                    </p>
                    <Link
                        href={
                            'https://www.myregistry.com/giftlist/genevaaldiar'
                        }
                        target="_blank"
                        className={clsx(styles.Button, styles.Secondary)}
                    >
                        Gift List
                    </Link>
                    <p>
                        The password to access the registry is <br />
                        <u style={{ textTransform: 'lowercase' }}>
                            genevaaldiar
                        </u>
                    </p>
                    <p>Cash gifts are also welcome</p>
                </Container>
            </Section>

            <Section id="4">
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>
                        Information about Almaty
                    </span>
                    <p>
                        We&nbsp;hope you enjoy your time in&nbsp;our beautiful
                        city.
                    </p>
                    <div className={styles.Columns}>
                        <Image
                            className={styles.Image}
                            alt="Hotel"
                            src={Almaty}
                        />
                        <div className={styles.Text}>
                            <p>
                                If&nbsp;you would like to&nbsp;explore
                                on&nbsp;your own, we&nbsp;suggest these
                                restaurants:
                            </p>
                            <ul>
                                <li>&bull; Ogonek (modern local cuisine)</li>
                                <li>
                                    &bull; Kazakh Auyl (traditional cuisine with
                                    a&nbsp;spin)
                                </li>
                                <li>&bull; ⁠Tor (modern kazakh food)</li>
                                <li>
                                    &bull; ⁠Afisha (modern European comfort
                                    food)
                                </li>
                                <li>&bull; ⁠Spiros (Greek)</li>
                                <li>&bull; ⁠Cafeteria (casual cafe fare)</li>
                                <li>
                                    &bull; ⁠PlatformA (elevated food market
                                    concept with casual and upscale dining
                                    options)
                                </li>
                            </ul>
                            <p>
                                YandexTaxi&nbsp;&mdash; the local Uber service.
                                This app is&nbsp;available in&nbsp;English, and
                                has card and cash payment possible.
                            </p>
                            <p>
                                Tenge&nbsp;&mdash; the local currency. However,
                                you can easily use your own credit or&nbsp;debit
                                card in&nbsp;most places to&nbsp;pay.
                            </p>
                            <p>
                                Language: most staff members speak English,
                                Russian and Kazakh.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section id="5" className={styles.beige}>
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>Getting here</span>
                    <p>
                        Depending on&nbsp;where you are traveling from, there
                        are many different airlines you can take.
                    </p>
                    <p>
                        We&nbsp;suggest looking at&nbsp;the following airlines
                        that frequently fly to&nbsp;Almaty from Europe and
                        elsewhere:
                    </p>
                    <ul>
                        <li>Air Astana</li>
                        <li>Turkish Airlines</li>
                        <li>Qatar Airways</li>
                        <li>Lufthansa</li>
                        <li>Fly Dubai</li>
                    </ul>
                    <p>
                        There are very convenient flights from almost anywhere
                        in&nbsp;the world with connecting flights through
                        Istanbul, Doha, Dubai, and Frankfurt. If&nbsp;you are
                        traveling from eastern Asia, there are also flights
                        through Phuket. Please plan to&nbsp;arrive at&nbsp;least
                        the night before so&nbsp;you have time to&nbsp;adjust
                        to&nbsp;the time difference and get accommodated before
                        celebrations begin on&nbsp;the 8th of&nbsp;June!
                    </p>
                </Container>
            </Section>

            <Section id="6">
                <Container className={styles.Flex}>
                    <span className={styles.Heading}>Wedding menu</span>
                    <p>Dietary preferences</p>
                    <Image className={styles.Image} alt="Hotel" src={Menu} />
                    <p style={{ color: '#aaa' }}>In developing</p>
                </Container>
            </Section>
        </main>
    )
}
