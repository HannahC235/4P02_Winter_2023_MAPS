import './default/styles/map.css';
import './default/styles/grid.css';
import './default/styles/bootstrap.css';
import './default/styles/print.css';
import './default/styles/queries.css';
import './default/styles/screen.css';

const Header = () => {
    return (
        <header id="header">
            <div class="wrapper">
                <div id="logo">
                    <a href="/"
                    ><img
                            src="shared/skins/default/images/logo.svg"
                            alt="Niagara-on-the-Lake Museum"
                        /></a>
                </div>

                <nav id="navigation">
                    <ul id="menu">
                        <li class="has_submenu">
                            <a href="/about"><span>About</span></a>
                            <ul class="closed_menu">
                                <li class="about_us">
                                    <a href="https://notlmuseum.ca/about">About Us</a>
                                </li>
                                <li class="our_team">
                                    <a href="https://notlmuseum.ca/our-team">Our Team</a>
                                </li>
                                <li class="job_opportunities">
                                    <a href="https://notlmuseum.ca/job-opportunities"
                                    >Job Opportunities</a
                                    >
                                </li>
                                <li class="rentals__amp__private_events">
                                    <a href="https://notlmuseum.ca/rentals-private-events"
                                    >Rentals &amp; Private Events</a
                                    >
                                </li>
                                <li class="renovation_expansion">
                                    <a href="https://notlmuseum.ca/capital-campaign"
                                    >Renovation/Expansion</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="has_submenu">
                            <a href="https://notlmuseum.ca/visit"><span>Location</span></a>
                            <ul class="closed_menu">
                                <li class="visit">
                                    <a href="https://notlmuseum.ca/visit">Museum Info</a>
                                </li>
                                <li class="map"><a href="index.html">Interactive Map</a></li>
                            </ul>
                        </li>

                        <li class="shop">
                            <a href="https://notlmuseumshop.square.site/s/shop" target="_blank"
                            ><span>Shop</span></a
                            >
                        </li>
                        <li class="research">
                            <a href="https://notlmuseum.ca/research"><span>Research</span></a>
                        </li>
                        <li class="members">
                            <a href="https://notlmuseum.ca/members"><span>Members</span></a>
                        </li>
                        <li class="has_submenu">
                            <a href="https://notlmuseum.ca/whats-on"><span>What's On</span></a>
                            <ul class="closed_menu">
                                <li class="calendar">
                                    <a href="https://notlmuseum.ca/whats-on">Calendar</a>
                                </li>
                                <li class="event_listing">
                                    <a href="https://notlmuseum.ca/whats-on/upcoming-events"
                                    >Event Listing</a
                                    >
                                </li>
                                <li class="walking_tours">
                                    <a href="https://notlmuseum.ca/walking-tours">Walking Tours</a>
                                </li>
                                <li class="education">
                                    <a href="https://notlmuseum.ca/education">Education</a>
                                </li>
                                <li class="program_recordings">
                                    <a
                                        href="https://www.youtube.com/user/NOTLMuseum/playlists"
                                        target="_blank"
                                    >Program Recordings</a
                                    >
                                </li>
                                <li class="the_notl_poppy_project">
                                    <a href="https://notlmuseum.ca/the-notl-poppy-project"
                                    >The NOTL Poppy Project</a
                                    >
                                </li>
                                <li class="renovation_expansion">
                                    <a href="https://notlmuseum.ca/capital-campaign"
                                    >Renovation/Expansion</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="blog">
                            <a href="https://notlmuseum.ca/blog"><span>Blog</span></a>
                        </li>
                        <li class="contact">
                            <a href="https://notlmuseum.ca/contact"><span>Contact</span></a>
                        </li>
                        <li class="has_submenu">
                            <a href="https://notlmuseum.ca/donate"><span>Donate</span></a>
                            <ul class="closed_menu">
                                <li class="capital_campaign">
                                    <a href="https://notlmuseum.ca/capital-campaign"
                                    >Capital Campaign</a
                                    >
                                </li>
                                <li class="donate">
                                    <a href="https://notlmuseum.ca/donate">Donate</a>
                                </li>
                                <li class="sponsorship">
                                    <a href="https://notlmuseum.ca/sponsorship">Sponsorship</a>
                                </li>
                                <li class="collections">
                                    <a href="https://notlmuseum.ca/collections">Collections</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="header-top-buttons">
                    <div class="btn-group">
                        <a
                            href="https://notlmuseum.ca/newsletter-sign-up"
                            class="btn alternate"
                        >Newsletter Sign Up</a
                        ><span class="btn alternate">|</span
                        ><a
                            href="https://www.canadahelps.org/en/charities/niagara-historical-society/"
                            class="btn alternate"
                            target="_blank"
                        >Donate</a>
                    </div>

                    <div id="menu-button-container">
                        <button class="menu-trigger">
                            <span></span><span></span><span></span>Open Menu
                        </button>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </header>
    )
}

export default Header