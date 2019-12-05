import React from 'react';
import styles from './styles.module.css';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import 'animate.css';

import pic1 from '../../images/P1220531.jpg';
import pic2 from '../../images/P7010440.jpg';
import pic3 from '../../images/P1220649.jpg';
import pic4 from '../../images/P7020471.jpg';
import pic5 from '../../images/P7030478.jpg';
import pic6 from '../../images/P7010436.jpg';
import pic7 from '../../images/P1220848.jpg';
import pic8 from '../../images/P1220652.jpg';
import pic9 from '../../images/P1200545.jpg';


const MissionStatement = () => {
    return (
        <ParallaxLayer offset={0} speed={1.5}>
            <Reveal effect="fadeInUp" effectOut="fadeOutUp">
                <div className={styles.intro}>
                    <p className={styles.smallPrint}>
                        #BAYTHAI2019
                    </p>
                    <h1 className={styles.title}>
                        SUMMER MISSIONS | THAILAND
                    </h1>
                </div>
            </Reveal>
            <div className={styles.statementPage}>
                <Fade>
                    <img src={pic1} className={styles.pic1} alt='EV day.' />
                </Fade>
                <Fade>
                    <div className={styles.mission}>
                        <h1 className={styles.missionStatement}>MISSION STATEMENT</h1>
                        <p className={styles.missionText}>
                            TO FULFILL THE GREAT COMMISION THROUGH THE
                            POWER OF THE HOLY SPIRIT BY WINNING PEOPLE TO FAITH
                            IN <b>JESUS CHRIST</b>.
                        </p>
                    </div>
                </Fade>
                <Fade left>
                    <img src={pic2} className={styles.pic2} alt='EV day.' />
                </Fade>
                <Fade>
                    <div className={styles.text2}>
                        <p>
                            "AND LET US NOT GROW WEARY OF DOING GOOD, FOR IN DUE SEASON
                            WE WILL REAP, IF WE DO NOT GIVE UP. SO THEN, AS WE HAVE OPPORUNITY, 
                            LET US DO GOOD TO EVERYONE, AND ESPECIALLY TO THOSE WHO ARE OF THE 
                            HOUSEHOLD OF FAITH."
                        </p>
                        <p className={styles.verse}><b>GALATIANS 6: 9-10</b></p>
                    </div>
                </Fade>
                <Fade right>
                    <img src={pic3} className={styles.pic3} alt='EV day.' />
                </Fade>
                <Fade left>
                    <h1 className={styles.rolesTitle}>
                        SPIRITUAL CLIMATE OF <b>THAILAND</b>
                    </h1>
                </Fade>
                <Fade right>
                    <img src={pic4} className={styles.pic4} alt='EV day.' />
                </Fade>
                <Fade>
                    <img src={pic5} className={styles.pic5} alt='From the top of Rajhabat University' />
                </Fade>
                <Fade right>
                    <div className={styles.spiritualClimate}>
                        <p className={styles.spiritualClimateTop}>
                            THE SPIRITUAL CLIMATE OF THAILAND HAS EXPERIENCED A SUBTLE SHIFT OVER THE PAST 
                            YEARS. ALTHOUGH THAILAND STILL RETAINS ITS REPUTATION FOR BEING A POLITE, 
                            FRIENDLY, AND ACCEPTING ATMOSPHERE, RETURNING MISSION-GOERS NOTICED IT WAS MORE 
                            DIFFICULT TO SHARE THE GOSPEL. THAILAND IS A PREDOMINATELY BUDDHIST NATION WITH 
                            95% OF THE POPULATION IDENTIFYING AS SUCH. DESPITE THIS, THE PERCENTAGE OF 
                            IDENTIFYING CHRISTIANS HAS GROWN FROM .7% IN THE PREVIOUS DECADE TO 1.2% AS OF 
                            2019.
                        </p>
                        <p className={styles.spiritualClimateBottom}>
                            OUR MISSION FIELD CAMPUS OF CHAING MAI RAJHABAT UNIVERSITY (CMRU) BOASTS A MUCH 
                            LARGER CHRISTIAN PERCENTAGE OF 10%. WE PRAY THAT CMRU REMAINS A SOURCE OF 
                            CHRISTIAN REVIVAL AND CATALYST FOR GROWTH IN THE NORTHERN REGION.
                        </p>
                    </div>
                </Fade>
                <Fade left>
                    <h1 className={styles.roles}>
                        OUR <b>ROLES</b> ON CAMPUS
                    </h1>
                </Fade>
                <Fade big>
                    <img src={pic6} className={styles.pic6} alt='EV day.' />
                </Fade>
                <Fade left>
                    <img src={pic7} className={styles.pic7} alt='Worship in the morning.' />
                </Fade>
                <Fade big>
                    <div className={styles.rolesText}>
                        <p className={styles.rolesPara}>
                            OUR TEAM HAD 12 CAMPUS DAYS AT CHIANG MAI RAJABHAT UNIVERSITY (CMRU) 
                            TO FORM RELATIONSHIPS WITH THAI STUDENTS AND INTRODUCE THEM TO THE LOVE 
                            OF CHRIST. MONDAY THROUGH FRIDAY, AFTER MORNING DEVOTIONAL ON THE BOOK 
                            OF JOHN, WE WOULD HEAD OUT TO CAMPUS AND ARRIVE BY 11:30AM TO EAT AT THEIR 
                            CAFETERIA (CANTEEN). FROM 12-4PM, WE WOULD BREAK INTO EVANGELISM GROUPS AND 
                            WORK WITH TCCC (THAILAND CAMPUS CRUSADE FOR CHRIST) KEY STUDENTS TO WALK AROUND 
                            CAMPUS AND MAKE FRIENDS WITH CMDU STUDENTS WITH THE PURPOSE OF EXCHANGING 
                            CULTURES AND GIVING THEM A GLIMPSE OF GOD'S LOVE THROUGH INTENTIONAL 
                            INTERACTIONS WITH THEM.
                        </p>
                        <p className={styles.rolesPara}>
                            AFTER OUR DAY ON CAMPUS, WE WOULD PRACTICE OUR PERFORMANCES FOR EVENTS, SUCH AS 
                            K-POP, SKIT, AND BODY WORSHIP, AND SHARE OUR LIFE STORIES AS A TEAM. AS WE 
                            CONTINUED TO GO ON CAMPUS, WE MADE APPOINTMENTS WITH THE STUDENTS WE'VE MET SO 
                            THAT WE CAN CONTINUE TO GROW OUR RELATIONSHIP WITH THEM, SHARE THE GOSPEL, AND 
                            CONNECT THEM TO TCCC, IN OUR TWO AND A HALF WEEKS OF MINISTRY, WE WORKED 
                            TOGETHER WITH TCCC TO HOST THREE EVENTS.
                        </p>
                        <p className={styles.rolesPara}>
                            OUR FIRST EVENT WAS A SPORTS DAY WHICH SERVED AS AN ICEBREAKER FOR US TO GET TO 
                            KNOW TCCC BETTER. OUR CULTURE NIGHT EVENT WAS OUR FIRST MAIN EVENT FOR THE THAI 
                            FRIENDS WE HAD MADE SO FAR. IT WAS ANOTHER OPPPRUNITY TO SHARE CHRIST AND WHAT HE 
                            HAS DONE FOR US THROUGH TESTIMONIES, THE SKIT AND SHARING THE GOSPEL IN A SMALL 
                            GROUP SETTING. FOR OUR FINAL EVENT, FAREWELL NIGHT, EVEN THOUGH MANY OF THE STUDENTS 
                            WENT HOME FOR A HOLIDAY, GOD WAS STILL FAITHFUL IN BRINGING MANY OPEN HEARTS. WE 
                            EMPHASIZED THE POWER OF PRAYER AND LOVING ONE ANOTHER AS GOD DOES FOR US.
                        </p>
                        <p className={styles.stats}>
                            WE WERE ABLE TO APPROACH 288 STUDENTS,
                        </p>
                        <p className={styles.stats}>
                            HOLD 107 SPIRITUAL CONVERSATIONS,
                        </p>
                        <p className={styles.stats}>    
                            SHARE THE GOSPEL TO 75 STUDENTS,
                        </p>
                        <p className={styles.stats}>
                            AND 18 PEOPLE CAME TO KNOW JESUS
                        </p>
                        <p className={styles.rolesPara}>
                            AS THEIR SAVIOR AND LORD.
                        </p>
                        <p className={styles.rolesPara}>
                            WHEN WE WERENT'T ON CAMPUS, WE HAD TEAM BONDING WITH TCCC BY EXPLORING DIFFERENT AREAS 
                            OF CHIANG MAI, SUCH AS GOING TO DOI SUTHEP AND THE ELEPHANT SANCTUARY, AND WE ATTENDED 
                            LOCAL CHURCES WITH TCCC MEMBERS. THOUGH OUR TIME IN THAILAND WAS SHORT, WE WERE ABLE WERE 
                            ABLE TO ENCOUNTER GOD IN EVERY MOMENT, BIG OR SMALL, AND WERE ABLE TO SEE HIM WORK THROUGH 
                            THE MANY PEOPLE WE MET.
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <img src={pic8} className={styles.pic8} alt='Preschool next to CMRU.' />
                </Fade>
                <Fade>
                    <div className={styles.testimonyHeader}>
                        <h1 className={styles.headerText}>
                            <b>TESTIMONIES</b>
                        </h1>
                        <h5 className={styles.andrew}>
                            ANDREW PARK
                        </h5>
                        <hr className={styles.line}></hr>
                    </div>
                </Fade>
                <Fade>
                    <div className={styles.testimony1}>
                        <div className={styles.halves}>
                            <p>
                                THROUGHOUT MY TRIP TO THAILAND I HAD TRULY BEEN BLESSED BY A 
                                STUDENT NAMED TOR. ONE DAY, MY EVANGELIZING GROUP (INVOLIVING ME, 
                                JOSH KIM, DEREK LEE GSN) MET A GROUP OF STUDENTS BY CHANCE. WE HAD 
                                AN APPOINTMENT TO MEET UP WITH A STUDENT WHO WE HAD TALKED TO EARLIER 
                                BUT HE DIDN'T SHOW UP TO MEET US. WE WERE PRETTY DEFEATED BUT THEN SAW 
                                THIS GROUP OF FOUR GUYS AND APPROACHED THEM AS ONE LAST GROUP TO TALK TO 
                                BEFORE WE HAD TO LEAVE CAMPUS THAT DAY. THEY SPOKE ENGLISH PRETTY 
                                WELL BUT FOR THE MOST PART DIDN'T SEEM INTERESTED: EXCEPT TOR.
                            </p>
                            <p>
                                WE MADE PLANS TO MEET UP WITH THE GROUP AND THE ONLY ONE WHO SHOWED UP 
                                WAS TOR. WE HAD A GOOD CONVERSATION WITH HIM REGARDING WHAT RELIGION MOST 
                                THAI PEOPLE PRACTICED. HE TOLD US THAT MOST PEOPLE ARE BUDDHIST AND EXPLAINED 
                                A LOT ABOUT BUDDHISM. THEN WE TOLD HIM ABOUT CHRISTIANITY AND OUR FAITH 
                                BUT HE DIDN'T SEEM TOO INTERESTED AS HE SAID HE DIDN'T BELIEVE IN ANY 
                                RELIGION; BUT GOD WASN'T DONE WORKING IN HIS LIFE.
                            </p>
                            <p>
                                AS WE CONTINUED TO MEET UP WITH TOR THROUGHOUT THE WEEK, WE GOT TO LEARN 
                                MORE ABOUT HIS BACKGROUND AND HAD DEEPER SPIRITUAL CONVERSATIONS. WE THEN FOUND 
                                OUT THAT HE WAS INTERESTED IN VISTING A CHURCH SO WE ASKED HIM IF HE WANTED TO 
                                JOIN US AT CHURCH AND HE ACCEPTED.
                            </p>
                        </div>
                        <div className={styles.halves}>
                            <p>
                                THOUGH HE HAD STILL NOT ACCEPTED CHRIST, HE TOLD US THAT HE HAD REALLY ENJOYED 
                                HIS TIME AS WELL AS THE MESSAGE FROM THE SERMON AND WANTED TO JOIN AGAIN THE 
                                FOLLOWING WEEK. ALONG WITH THAT HE CAME OUT TO EVERY EVENT WE HOSTED AND WE WERE 
                                EVEN ABLE TO GET HIM A THAI BIBLE. HE WAS OVERJOYED WHEN WE HANDED HIM THE 
                                BIBLE TO HIM AND ASKED US IF HE COULD POST IN ON SOCIAL MEDIA.
                            </p>
                            <p>
                                THAT WAS A SUPER ENCOURAGING MOMENT AND IT TRULY SHOWED US HIS 
                                DEVELOPING INTEREST IN CHRISTIANITY. THE MORE WE HUNG OUT WITH HIM, THE MORE 
                                WE GREW A HEART FOR HIM AND SAW SO MUCH POTENTIAL. EVENTUALLY, THE FOLLOWING SUNDAY CAME 
                                AROUNDAND THAT WAS THE HIGHLIGHT OF MY TRUP. WE WERE SITTING IN THE MIDDLE OF CHURCH AND 
                                DURING SERVICE TOR TURNS TO ME AND SAYS "ANDREW, I THINK I AM FINALLY READY TO ACCEPT CHRIST." 
                                I CANNOT EXPLAIN WHAT WAS RUNNING THROUGH MY HEAD DURING THAT MOMENT. I TOLD HIM WE COULD WALK 
                                THROUGHA PRAYER AS SOON AS THE SERVICE ENDED, BE HE WAS SO EAGER TO RECEIVE CHRIST INTO 
                                HIS LIFE THAT HE URGED ME TO DO IT RIGHT THEN AND THERE.
                            </p>
                            <p>
                                AS SOON AS WE HAD GOTTEN THROUGH THE PRAYER, TEARS FILLED BOTH OUR EYES AND HE SAID HE WANTED TO 
                                TELL HIS MOM IMMEDIATELY. WE HAD BEEN POURING OUT SO MUCH LOVE TO HIS STUDENT 
                                THROUGHOUT OUR TRIP AND HE FINALLY CAME AROUND AFTER SO MUCH PRAYER AND PATIENCE. OUR 
                                TESTIMONY OF TOR IS ONE THAT WE WILL NEVER FORGET AND HAS BROUGH BOTH ME AND JOSH TO 
                                CONVICTION TO COME BACK NEXT YEAR AND POUR OUT EVEN MORE INTO THIS PRECIOUS SOUL.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div className={styles.testimonyHeader2}>
                        <h5 className={styles.kevin}>
                            KEVIN TRAN
                        </h5>
                        <hr className={styles.line}></hr>
                    </div>
                </Fade>
                <Fade>
                    <div className={styles.testimony2}>
                        <div className={styles.halves}>
                            <p>
                                I WOULD DESCRIBE MY MISSION TRIP TO THAILAND LAST YEAR AS DIFFICULT, UNDERWHELMING, AND 
                                CONFUSING. DIFFUCLT BECAUSE OF MY INABILITY TO FIND A DISCIPLE. UNDERWHELMED WITH HOW I SAW 
                                MYSELF EXPANDING GOD'S KINGDOM. CONFUSED OF WHY GOD CALLED ME TO GO ON MISSIONS IN THE FIRST 
                                PLACE. AND AFTER MONTHS OF PROCESSING AND REFLECTING I JUST DIDN'T HAVE PEACE IN MY HEART WITH 
                                HOW I LEFT THAILAND. I TOOK THIS UNEASINESS AS GOD'S CALLING TO GO BACK TO THAILAND THIS YEAR AND 
                                BE USED TO FINISH THE WORK HE INSTILLED IN ME TO FINISH. WITH ONLY COMPLETE TRUST 
                                AND SURRENDER TO GOD'S PLAN I CHOSE TO ACCEPT GOD'S CALLING TO GO ON MISSIONS TO THAILAND AGAIN 
                                DESPITE HOW DIFFICULT IT WAS LAST YEAR.
                            </p>
                            <p>
                                AND GOD TRULY DOES WORK IN MYSTERIOUS WAYS. WITHIN THE FIRST WEEK OF 
                                CAMPUS WITNESS, I MET A STUDENT NAMED TORM, AND YOU COULD SAY HE WAS ONE OF THE "BAD STUDENTS" WHO 
                                INDULGED IN SMOKING, SEX, AND DRUNKING. WE HAD A VERY SHALLOW TALK, AND EXCHANGED CONTACT 
                                INFORMATION, AND WHEN I MESSAGED HIM, HE RESPONDED WITH NO INTEREST IN MEETING UP AGAIN.
                            </p>
                            <p>
                                IT WASN'T UNTIL THE SECOND WEEK OF CAMPUS WITNESSING DID MY EVANGELISM TEAM RANDOMLY RUN INTO HIM AGAIN. 
                                WE SHARED MORE OF WHO WE ARE AS CHRISTIANS AND OUR PURPOSE FOR BEING IN THAILAND. AFTER SHARING WHAT MISSIONS 
                                WAS, TORM RESPONDED WITH A SUPRISING AMOUNT OF ENTHUSIASM AND INTEREST IN HEARING WHAT WE HAD TO SAY ABOUT 
                                THE GOSPEL. SO I SHARED THE 4 SPIRITUAL LAWS WITH HIM AND GOD REALLY REVEALED HOW MUCH 
                                I LOVED AND DESIRED TORM TO KNOW HIM. HE WAS REALLY TOUCHED WITH HOW GOD SENT ME TO MEET AND SHARE HIS 
                                LOVE FROM ACROSS THE WORLD WITH HIM AND JUST THROUGH THIS BRIEF EXPOSURE TO HIS GLORY, TORM'S HEART 
                                WAS TRANSFORMED BY THE LORD.
                            </p>
                        </div>
                        <div className={styles.halves}>
                            <p>
                                ONLY THROUGH GOD'S PERSISTENCE AND GRACIOUSNESS, TORM ENDED UP RECEIVING CHRIST AND BECOMING MY 
                                DISCIPLE. REMEMBERING THE CORE PURPOSE OF OUR MISSIONS TRIP, HOWEVER, TO GROW THE TCCC COMMUNITY, I 
                                INTRODUCED TORM TO ANOTHER KEY THAI STUDENT, JO, TO CONTINUE DOING WEEKLY FOLLOW-UPS IN ORDER FOR TORM 
                                TO CONTINUE GROWING IN HIS FAITH.
                            </p>
                            <p>
                                GOD'S BLESSINGS DIDN'T STOP THERE HOWEVER. SEVERAL TIMES ON THIS MISSIONS TRIP GOD CONVICTED MY HEART TO SHOW 
                                BRIAN SENA, ANOTHER BROTHER ON OUR MISSION TEAM, MORE OF HIS PATIENCE, AFFIRMATION, AND 
                                EMPATHY. A FEW DAYS AFTER TORM ACCEPTED TO BE MY DISCIPLE, BRIAN ASKED ME TO BE HIS SOONJANG 
                                BACK AT HOME IN THE STATES. GOD TRULY DOES WORK IN MYSTERIOUS WAYS IN THAT NOT ONLY WAS I ABLE TO MAKE AND PASS 
                                ON A DISCIPLE IN THAILAND, I WAS ABLE TO RECEIVE NOTHER DISCIPLE BACK HOME.
                            </p>
                            <p>
                                SO IF I COULD DESCRIBE HOW THIS YEAR'S MISSIONS TRIP TO THAILAND WAS, I WOULD DESCRIBE IT AS 
                                VICTORIOUS, FILLED WITH CONFIDENCE AND HONOR. VICTORIOUS IN BEING ABLE TO RECEIVE NOT JUST ONE SOONWON, BUT TWO. 
                                CONFIDENT IN MYSELF TO BE USED IN EXPANDING HIS KINGDOM WITH A HEART THAT IS TRULY EQUIPPED AND REFINED 
                                TO RESEMBLE HIS. HONORED TO HAVE BEEN HAND-PICKED BY GOD TO EXPERIENCE THIS LIFE THAT GLORIFIES GOD'S SCANDULOUS GRACE. 
                                ALL GLORY REALLY DOES GO TO GOD FOREVER AND EVER AND MY PRAYER REQUEST WOULD GO OUT TO ALL MY SOONWONS: THAT THEY 
                                WOULD HAVE PATIENCE AND PERSEVERANCE.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <img src={pic9} className={styles.pic9} alt='Temple visit on Saturady!' />
                </Fade>
                <Fade left>
                <h1 className={styles.reflectionHeader}>
                    <b>REFLECTIONS</b>
                </h1>
                </Fade>
                <div className={styles.reflections}>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>ASHLEY HONG</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                THOUGH OUR TEAM STRUGGLED WITH PHYSICAL AND SPIRITUAL BATTLES, GOD'S
                                SOVERIGNTY ALWAYS PREVAILED CONTROLLING OVER EVERYTHING THAT HAPPENS, 
                                KNOWING THAT ALL THESE HARDSHIPS ARE PART OF HIS PERFECT PLAN.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>ELISABETH PARK</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                ONE ATTRIBUTE OF GOD THAT STOOD OUT TO ME WAS FAITHFULNESS THROUGH THE TRIALS 
                                OF FAITHFULLY LOVING MY TEAM AS MISSION'S UMMA AND THE BLESSINGS OF SEEING 
                                HOW FAITHFUL GOD IS IN THE LIVES OF THAI STUDENTS.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>DAVID KIM</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                JESUS WAS ALWAYS PRESENT IN OUR MISSIONS, THROUGH OUR STRENGTHS AND WEAKNESSES, 
                                AND HE WILL BE THERE FOR THE PEOPLE WE MET AS WELL.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>BRIAN SENA</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD'S LOVE WAS REVEALED TO ME THROUGH MISSION TEAM MEMBERS WHO, DESPITE HEARING 
                                MY INSECURITIES AND SEEING MY FLAWS, CONTINUED TO CARE FOR ME UNCONDITIONALLY AS 
                                CHRIST WOULD.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>KEVIN TRAN</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD NEVER CEASES TO AMAZE ME! TO BEAR WITNESS TO SO MANY GOD MOMENTS THROUGH SHARING 
                                THE GOSPEL, MY TESTIMONY, AND LIVING LIFE WITH THESE THAI STUDENTS, I'M REMINDED THAT 
                                IN ORDER TO FULLY EMBRACE GOD'S LOVE AND PLAN FOR ME, I MUST REALLY PUT GOD'S SOVERIGNTY 
                                AT THE THRONE OF MY LIFE.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>AUSTIN YOON</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD IS COMPASSIONATE. I'VE LEARNED THAT GOD WAITS AND GIVES AN OPEN INVITATION FOR A 
                                RELATIONSHIP WITH HIM FOR ALL STUDENTS FROM OUTCASTS TO THE MOST POPULAR AND EVERYONE 
                                IN BETWEEN.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>WINGGO TSE</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                I'VE BEEN REMINDED AGAIN AND AGAIN THAT CHRIST'S LOVE IS BOUNDLESS AND TRANSCENDS BARRIERS. 
                                GOD HAS ABUNDANTLY SHOWN ME GLIMPSES OF HIMSELF THROUGH MY PRAYERS AND RELATIONSHIPS WITH 
                                THOSE I'VE SHARED MY HEART TO. I'M TRULY THANKFUL TO WITNESS THE FAMILY OF GOD UNITED 
                                THROUGH HIS MESSAGE OF RECONCILATION GIVEN TO US THROUGH GRACE.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>DEREK GSN</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                I THINK ONE ATTRIBUTE I LEARNED IS THAT GOD IS FULFILLING THE GREAT COMMISION ALREADY THROUGH 
                                HIS PEOPLE. IT WAS A GREAT ENCOURAGEMENT TO HEAR THAT TCCC WAS SENDING OUT STUDENT MISSIONARIES 
                                TO OTHER COUNTIES. AND THIS SERVED AS AN INDIATOR THAT GOD IS WORKING GLOBALLY TO FULFILL THE 
                                GREAT COMMISSION ALREADY.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>ANDREW PARK</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD IS PATIENT. EVEN WHEN WE RUSH THINGS AND TAKE CIRCUMSTANCES INTO OUR OWN HANDS, HE WILL ALWAYS 
                                WAIT FOR US TO RETURN TO HIM TO SEEK HIS WISDOM.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>JOSH KIM</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                AN ATTRIBUTE OF GOD THAT I'VE SEEN THROUGHOUT THIS MISSIONS TRIP IS THAT THROUGH PRAYER HE REALLY 
                                PROVIDES. WITHOUT HIM, NOTHING WOULD'VE BEEN POSSIBLE.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>KEISHA QUIRMIT</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                LAST YEAR I CAME TO THAILAND FOR MY FIRST SUMMER MISSIONS AND MADE REALLY GREAT FRIENDS WITH THAI 
                                STUDENTS. I FELT CONVICTED TO COME BACK THIS YEAR TO CONTINUE GROWING THESE FRIENDSHIPS AND I REALLY 
                                SAW HOW GOD GREW THESE SEEDS OF HIS LOVE AFTER JUST A YEAR. I LEARNED HOW TO GROW A BIGGER HEART FOR 
                                HIS PEOPLE AND TO PATIENTLY LOVE THEM.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>KARA LEE</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD IS SO OVERWHELMINGLY AWESOME. GETTING TO BEFRIEND SO MANY THAI STUDENTS AND HAVING OPPORTUNITIES 
                                TO SHARE THE GOSPEL, SO MANY WERE SHOCKED AND AMAZED AT SALVATION AND THE CHARACTER OF JESUS! THE 
                                GOSPEL REALLY IS THE BEST NEWS AND SALVATION REALLY IS THE GREATEST GIFT WE HAVE BEEN GIVEN.
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>CALVIN KIM</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD'S LOVE IS CONSTANT. FOR ME, THIS WAS UNDERSTANDING THAT THERE ARE NO BARRIERS WHEN IT COMES TO GOD 
                                (EX. LANGUAGE BARRIER/CULTURAL BARRIER). WE'RE ALL BROTHERS AND SISTERS IN CHRIST, CHILDREN OF GOD.
                            </p>
                        </div>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>ELI GSN</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                GOD IS FAITHFUL. HE WILL FINISH THE GOOD WORK HE HAS STARTED IN EACH OF OUR LIVES, IN CMRU, THE GOSPEL 
                                SEEDS PLANTED IN THAILAND.<br></br>PHILIPPIANS 1:3-6 
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={styles.reflection}>
                            <h2 className={styles.reflectionAuthor}>
                                <b>ZOE CHEN</b>
                            </h2>
                            <p className={styles.reflectionBody}>
                                I REALLY SAW GOD'S UNCONDITIONAL LOVE FOR THE THAI STUDENTS AND HIS UNENDING FORGIVENESS AND POWER 
                                OF HEALING FOR MYSELF.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
            <Reveal effect="fadeInDown" effectOut="fadeInUp">
                <div className={styles.outtro}>
                    <h1 className={styles.thai}>
                        ขอขคุณ
                        </h1>
                    <h5 className={styles.eng}>
                        THANK YOU
                    </h5>
                </div>
            </Reveal>
        </ParallaxLayer>
    );
}

export default MissionStatement;