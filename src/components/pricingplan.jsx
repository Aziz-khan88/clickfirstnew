import styles from "@/styles/components/pricnigplan.module.scss"
import { ArrowPriceIcon } from "@/src/app/app-constants"

const PricingPlan = ({ data }) => {
    return (
        <div className={styles.priceContainer}>

            <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                    <h5>Starter Plan</h5>
                    <p>Get started with the basics and build your brand.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}>
                                {/* <span>$700</span> */}
                                ${data.starter}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Total 15 Posts Per Month</li>
                            <li><span>- 10 Graphic Social Posts</span></li>
                            <li><span>- 05 Videos/Reels</span></li>
                            <li><span>- Stories</span></li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Facebook</li>
                            <li><div><ArrowPriceIcon /></div>Instagram</li>
                            <li><div><ArrowPriceIcon /></div>TikTok / LinkedIn</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Facebook & Instagram Paid Ads</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Campaigns Per Month</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Ad sets Per Month</li>
                            <li><div><ArrowPriceIcon /></div>Detailed Campaign Monitoring & Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Social Media Copywriter</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Graphic Designer</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Video Editor</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Ads Expert</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Project Manager</li>
                        </ul>
                        <h6>Social Media Management</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Monthly Social Posts Scheduling</li>
                            <li><div><ArrowPriceIcon /></div>Social Community Management (Inbox Messages + Comment Responses)</li>
                            <li><div><ArrowPriceIcon /></div>Social Page Optimization (Cover Photo, About Section, Display Picture and Interlinking)</li>
                            <li><div><ArrowPriceIcon /></div>Meta Business Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>Meta Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>Meta Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>Monthly Statistical Reporting</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Enquire Now
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.priceBox} ${styles.active}`}>
                <div className={styles.priceHeader}>
                    <h5>Pro Plan</h5>
                    <p>Maximize your reach with our most popular plan.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}> ${data.pro}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Total 25 Posts Per Month</li>
                            <li><span>- 18 Graphic Social Posts</span></li>
                            <li><span>- 07 Videos/Reels</span></li>
                            <li><span>- Stories</span></li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Facebook</li>
                            <li><div><ArrowPriceIcon /></div>Instagram</li>
                            <li><div><ArrowPriceIcon /></div>YouTube</li>
                            <li><div><ArrowPriceIcon /></div>Twitter (X)</li>
                            <li><div><ArrowPriceIcon /></div>TikTok / LinkedIn</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Facebook, Instagram, & TikTok / LinkedIn Paid Ads</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Campaigns Per Month</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Ad sets Per Month</li>
                            <li><div><ArrowPriceIcon /></div>Detailed Campaign Monitoring & Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>02 Dedicated Social Media Copywriters</li>
                            <li><div><ArrowPriceIcon /></div>02 Dedicated Graphic Designers</li>
                            <li><div><ArrowPriceIcon /></div>02 Dedicated Video Editors</li>
                            <li><div><ArrowPriceIcon /></div>02 Dedicated Ads Experts</li>
                            <li><div><ArrowPriceIcon /></div>01 Message/Chat Expert</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Project Manager</li>
                        </ul>
                        <h6>Social Media Management</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Monthly Social Posts Scheduling</li>
                            <li><div><ArrowPriceIcon /></div>Social Community Management (Inbox Messages + Comment Responses)</li>
                            <li><div><ArrowPriceIcon /></div>Social Page Optimization (Cover Photo, About Section, Display Picture and Interlinking)</li>
                            <li><div><ArrowPriceIcon /></div>Meta Business Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>Meta Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>Meta Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>TikTok / LinkedIn Business Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>TikTok / LinkedIn Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>TikTok / LinkedIn Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>Monthly Statistical Reporting</li>
                            <li><div><ArrowPriceIcon /></div>Weekly Ads/Campaign Report</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Enquire Now
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.priceBox}>
                <div className={styles.priceHeader}>
                    <h5>Elite Plan</h5>
                    <p>Unlock premium features for ultimate growth.</p>
                </div>
                <div className={styles.priceBody}>
                    <div className={styles.priceNumber}>
                        <div className={styles.Amount}>
                            <div className={styles.Price}> ${data.elite}/month</div>
                            <div className={styles.Time}>(When Billed {data.valid})</div>
                        </div>
                    </div>
                    <div className={styles.pricePoints}>
                        <h6>Social Media Posts</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Total 35 Posts Per Month</li>
                            <li><span>- 23 Graphic Social Posts</span></li>
                            <li><span>- 12 Videos/Reels</span></li>
                            <li><span>- Stories</span></li>
                            <li><span>- Highlights</span></li>
                        </ul>
                        <h6>Social Platforms Supported</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Facebook</li>
                            <li><div><ArrowPriceIcon /></div>Instagram</li>
                            <li><div><ArrowPriceIcon /></div>Twitter (X)</li>
                            <li><div><ArrowPriceIcon /></div>LinkedIn</li>
                            <li><div><ArrowPriceIcon /></div>TikTok</li>
                            <li><div><ArrowPriceIcon /></div>Pinterest</li>
                            <li><div><ArrowPriceIcon /></div>Snapchat</li>
                        </ul>
                        <h6>Social Ads Management </h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>All Social Ad Platforms</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Campaigns Per Month</li>
                            <li><div><ArrowPriceIcon /></div>All Ad Objectives Supported</li>
                            <li><div><ArrowPriceIcon /></div>Unlimited Ad sets Per Month</li>
                            <li><div><ArrowPriceIcon /></div>Detailed Campaign Monitoring</li>
                            <li><div><ArrowPriceIcon /></div>Daily Campaign Optimization</li>
                        </ul>
                        <h6>Total Designated Team Members</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>03 Dedicated Social Media Copywriters</li>
                            <li><div><ArrowPriceIcon /></div>03 Dedicated Graphic Designers</li>
                            <li><div><ArrowPriceIcon /></div>03 Dedicated Video Editors</li>
                            <li><div><ArrowPriceIcon /></div>03 Dedicated Ads Experts</li>
                            <li><div><ArrowPriceIcon /></div>02 Message/Chat Experts</li>
                            <li><div><ArrowPriceIcon /></div>01 Dedicated Project Manager</li>
                        </ul>

                        <h6>Social Media Management</h6>
                        <ul>
                            <li><div><ArrowPriceIcon /></div>Monthly Social Posts Scheduling</li>
                            <li><div><ArrowPriceIcon /></div>Social Community Management (Inbox Messages + Comment Responses)</li>
                            <li><div><ArrowPriceIcon /></div>Social Page Optimization (Cover Photo, About Section, Display Picture and Interlinking)</li>
                            <li><div><ArrowPriceIcon /></div>Meta Business Manager Setup </li>
                            <li><div><ArrowPriceIcon /></div>Meta Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>Meta Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>LinkedIn Business Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>LinkedIn Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>LinkedIn Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>TikTok Business Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>TikTok Ads Manager Setup</li>
                            <li><div><ArrowPriceIcon /></div>TikTok Pixel Integration</li>
                            <li><div><ArrowPriceIcon /></div>Monthly Statistical Reporting</li>
                            <li><div><ArrowPriceIcon /></div>Weekly Ads/Campaign Report</li>
                        </ul>
                    </div>
                    <div className={styles.priceButton}>
                        <div className={styles.contactBtn}>
                            Enquire Now
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PricingPlan