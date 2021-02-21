/* eslint-disable */
import React, { useState } from 'react';
import { Container, Divider, Pagination } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './image.css';

import TopSection from './TopSection';
import Footer from './Footer';
import BumPost from './BumPost';

const App = () => {
  const [page, setPage] = useState(1);

  console.log('page:', page);

  const handlePageChange = (e, { activePage }) => {
    setPage(activePage);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <Container text style={{ margin: '50px 0 100px 0' }}>
      <TopSection />

      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Pagination
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={4}
        />
      </div>

      <Divider />

      {/* == Items in here are on page 1 ==-==-==-==-==-==-==-==-==-==-==-== */}
      {page === 1 ? (
        <>
          <BumPost
            date="7 February 2021"
            instagram="https://www.instagram.com/p/CK-a04_FuUd/"
            image="/bumman/70_Fractal_a.png"
            title="Fractal, 80s style 🍑"
          />

          <BumPost
            date="7 February 2021"
            instagram="https://www.instagram.com/p/CK-a04_FuUd/"
            image="/bumman/70_Fractal_b.png"
            title="Fractal, 80s style 🍑"
          />

          <BumPost
            date="7 February 2021"
            instagram="https://www.instagram.com/p/CK-a04_FuUd/"
            image="/bumman/70_Fractal_c.png"
            title="Fractal, 80s style 🍑"
          />

          <BumPost
            date="7 February 2021"
            instagram="https://www.instagram.com/p/CK-a04_FuUd/"
            image="/bumman/70_Fractal_d.png"
            title="Fractal, 80s style 🍑"
          />

          <BumPost
            date="7 February 2021"
            instagram="https://www.instagram.com/p/CK-a04_FuUd/"
            image="/bumman/70_Fractal_e.png"
            title="Fractal, 80s style 🍑"
          />

          <BumPost
            date="10 December 2020"
            instagram="https://www.instagram.com/p/CImYNX1FRiQ/"
            image="/bumman/69_Meow.jpg"
            title="Meow 🍑"
          />

          <BumPost
            date="13 November 2020"
            instagram="https://www.instagram.com/p/CHhWwMcllBt/"
            image="/bumman/68_Undo some buttons its Friday.jpg"
            title="Undo some buttons, it's Friday 🍑"
          />

          <BumPost
            date="8 November 2020"
            instagram="https://www.instagram.com/p/CHUTQkyle-i/"
            image="/bumman/67_Lets get loose.jpg"
            title="Let's get loose 🍑"
          />

          <BumPost
            date="8 November 2020"
            instagram="https://www.instagram.com/p/CHT6iOuFBsr/"
            image="/bumman/66_Lets do some business.jpg"
            title="Let's do some business 🍑"
          />

          <BumPost
            date="24 October 2020"
            instagram="https://www.instagram.com/p/CGt-S0mlhaR/"
            image="/bumman/65_X-Files.jpg"
            title="X-Files 🍑"
          />

          <BumPost
            date="14 September 2020"
            instagram="https://www.instagram.com/p/CFG52aXFpz9/"
            image="/bumman/64_Ready for ignition.jpg"
            title="Ready for ignition 🍑"
          />

          <BumPost
            date="12 September 2020"
            instagram="https://www.instagram.com/p/CFBy3uglXd8/"
            image="/bumman/63_Archives_scuba.jpg"
            title="From the archives. Kindly sent in from the Fraser Collection. 21st birthday card, circa late 90s 🍑"
          />

          <BumPost
            date="6 September 2020"
            instagram="https://www.instagram.com/p/CExlo1Zlou_/"
            image="/bumman/62_Happy virtual fathers day.jpg"
            title="Happy virtual father's day 🍑"
          />

          <BumPost
            date="22 August 2020"
            instagram="https://www.instagram.com/p/CEL0B-uFh_J/"
            image="/bumman/61_Emission-powered vehicle.jpg"
            title="Emission-powered vehicle 🍑"
          />

          <BumPost
            date="8 August 2020"
            instagram="https://www.instagram.com/p/CDnrAwNlwoE/"
            image="/bumman/60_Night fever.jpg"
            title="Night fever 🍑"
          />

          <BumPost
            date="7 August 2020"
            instagram="https://www.instagram.com/p/CDlJnidFKbU/"
            image="/bumman/59_Rain walk.jpg"
            title="Rain walk 🍑"
          />

          <BumPost
            date="30 July 2020"
            instagram="https://www.instagram.com/p/CDQeVgYFQVZ/"
            image="/bumman/58_Baking.jpg"
            title="Baking 🍑"
          />

          <BumPost
            date="12 June 2020"
            instagram="https://www.instagram.com/p/CBUndY3gDA_/"
            image="/bumman/57_Hey its Friday.png"
            title="Hey it's Friday! 🍑"
          />
        </>
      ) : null}

      {/* == Items in here are on page 2 ==-==-==-==-==-==-==-==-==-==-==-== */}
      {page === 2 ? (
        <>
          <BumPost
            date="31 May 2020"
            instagram="https://www.instagram.com/p/CA2C6lJFT8l/"
            image="/bumman/56_Birthday card.jpg"
            title="Birthday card 🍑"
          />

          <BumPost
            date="24 May 2020"
            instagram="https://www.instagram.com/p/CAkF2VbAHiy/"
            image="/bumman/55_Day trip_live footage.png"
            title="Day trip - live footage 🍑"
          />

          <BumPost
            date="23 May 2020"
            instagram="https://www.instagram.com/p/CAhcxDLgiW8/"
            image="/bumman/54_Day trip.jpg"
            title="Day trip 🍑"
          />

          <BumPost
            date="10 May 2020"
            instagram="https://www.instagram.com/p/B__uQKBgwKp/"
            image="/bumman/53_Happy virtual mothers day.jpg"
            title="Happy virtual mother's day 🍑"
          />

          <BumPost
            date="7 May 2020"
            instagram="https://www.instagram.com/p/B_3ZxjVg6kk/"
            image="/bumman/52_Mankini party.jpg"
            title="Mankini party 🍑"
          />

          <BumPost
            date="7 May 2020"
            instagram="https://www.instagram.com/p/B_3XWsqAY_z/"
            image="/bumman/51_Archives_Birthday card.jpg"
            title="From the archives [2]. Kindly sent in from the Furbank Collection. Circa early 2000s maybe 🍑"
          />

          <BumPost
            date="28th April 2020"
            instagram="https://www.instagram.com/p/B_gaEe0l8Xq/"
            image="/bumman/50_Archives_Christmas card.jpg"
            title="From the archives [1]. Kindly sent in from the Furbank Collection. Circa early 2000s maybe 🍑"
          />

          <BumPost
            date="25th April 2020"
            instagram="https://www.instagram.com/p/B_ZZxqklY7x/"
            image="/bumman/49_Mars landing.jpg"
            title="Mars landing 🍑"
          />

          <BumPost
            date="16th April 2020"
            instagram="https://www.instagram.com/p/B_CNlcHllg6/"
            image="/bumman/48_Modern art vs Einstein.jpg"
            title="Modern art vs Einstein 🍑"
          />

          <BumPost
            date="9th April 2020"
            instagram="https://www.instagram.com/p/B-vYQTdlsAR/"
            image="/bumman/47_Evening jive.jpg"
            title="Evening jive 🍑"
          />

          <BumPost
            date="1st April 2020"
            instagram="https://www.instagram.com/p/B-bfWXZl8g9/"
            image="/bumman/46_Undecided.jpg"
            title="Undecided 🍑"
          />

          <BumPost
            date="26th March 2020"
            instagram="https://www.instagram.com/p/B-MGZQuFgTn/"
            image="/bumman/45_Self-isolation.jpg"
            title="Self-isolation 🍑"
          />

          <BumPost
            date="25th March 2020"
            instagram="https://www.instagram.com/p/B-JF2YlAG0a/"
            image="/bumman/44_Home office.jpg"
            title="Home office 🍑"
          />

          <BumPost
            date="21st March 2020"
            instagram="https://www.instagram.com/p/B9--JZnFpsg/"
            image="/bumman/43_Martini oclock.jpg"
            title="Martini o'clock 🍑"
          />

          <BumPost
            date="20th March 2020"
            instagram="https://www.instagram.com/p/B98ZHXLFGZn/"
            image="/bumman/42_National Gallery.jpg"
            title="National Gallery 🍑"
          />

          <BumPost
            date="19th March 2020"
            instagram="https://www.instagram.com/p/B950dXClcY4/"
            image="/bumman/41_Afternoon tea.jpg"
            title="Afternoon tea 🍑"
          />

          <BumPost
            date="18th March 2020"
            instagram="https://www.instagram.com/p/B920UkuljYS/"
            image="/bumman/40_Stripey pants.jpg"
            title="Stripey pants 🍑"
          />

          <BumPost
            date="11th January 2020"
            instagram="https://www.instagram.com/p/B7KFY4FFZIu/"
            image="/bumman/39_Beer oclock.jpg"
            title="Beer o'clock 🍑"
          />

          <BumPost
            date="10th January 2020"
            instagram="https://www.instagram.com/p/B7HeZIAAQXX/"
            image="/bumman/38_Bee friends.jpg"
            title="Bee friends 🍑"
          />

          <BumPost
            date="8th January 2020"
            instagram="https://www.instagram.com/p/B7COr_0lUEz/"
            image="/bumman/37_Motel pool.jpg"
            title="Motel pool 🍑"
          />
        </>
      ) : null}

      {/* == Items in here are on page 3 ==-==-==-==-==-==-==-==-==-==-==-== */}
      {page === 3 ? (
        <>
          <BumPost
            date="24th December 2019"
            instagram="https://www.instagram.com/p/B6ckTFplhrQ/"
            image="/bumman/36_Happy holidays.jpg"
            title="Happy holidays 🍑"
          />

          <BumPost
            date="22nd November 2019"
            instagram="https://www.instagram.com/p/B5JzvXbAS_f/"
            image="/bumman/35_Jet set.jpg"
            title="Jet set 🍑"
          />

          <BumPost
            date="10th November 2019"
            instagram="https://www.instagram.com/p/B4rQ1kggkLG/"
            image="/bumman/34_Sunday city walk.jpg"
            title="Sunday city walk 🍑"
          />

          <BumPost
            date="7th November 2019"
            instagram="https://www.instagram.com/p/B4iogzbgAtV/"
            image="/bumman/33_Plane ride.jpg"
            title="Plane ride 🍑"
          />

          <BumPost
            date="29th September 2019"
            instagram="https://www.instagram.com/p/B2_Dgj8gE3t/"
            image="/bumman/32_Buggy.jpg"
            title="Buggy 🍑"
          />

          <BumPost
            date="23rd September 2019"
            instagram="https://www.instagram.com/p/B2u0Q3sgqO9/"
            image="/bumman/31_Sunday_pizza.jpg"
            title="Sunday pizza 🍑"
          />

          <BumPost
            date="15th September 2019"
            instagram="https://www.instagram.com/p/B2aj_XLlHwP/"
            image="/bumman/30_Poolside_Cairns.jpg"
            title="Poolside, Cairns 🍑"
          />

          <BumPost
            date="1st September 2019"
            instagram="https://www.instagram.com/p/B13HIF5gZMZ/"
            image="/bumman/29_Skiing.jpg"
            title="Skiing 🍑"
          />

          <BumPost
            date="11th August 2019"
            instagram="https://www.instagram.com/p/B1BGx7NHzd-/"
            image="/bumman/28_Birthday.jpg"
            title="Birthday 🍑"
          />

          <BumPost
            date="11th August 2019"
            instagram="https://www.instagram.com/p/B1A2d_cH2R3/"
            image="/bumman/27_Pool.jpg"
            title="Pool 🍑"
          />

          <BumPost
            date="3rd August 2019"
            instagram="https://www.instagram.com/p/B0sXGOOHeJX/"
            image="/bumman/26_Hiking_Tasmania.jpg"
            title="Hiking, Tasmania 🍑"
          />

          <BumPost
            date="16th July 2019"
            instagram="https://www.instagram.com/p/Bz-EkkSHUXy/"
            image="/bumman/25_Team check-in.jpg"
            title="Team check-in 🍑"
          />

          <BumPost
            date="3rd July 2019"
            instagram="https://www.instagram.com/p/BzcRJsvBCqh/"
            image="/bumman/24_Crossing.jpg"
            title="Crossing 🍑"
          />
          <BumPost
            date="2nd July 2019"
            instagram="https://www.instagram.com/p/BzaNAQKnrPo/"
            image="/bumman/23_9am.jpg"
            title="9am 🍑"
          />
          <BumPost
            date="24th June 2019"
            instagram="https://www.instagram.com/p/BzFclQqnEg6/"
            image="/bumman/22_Open-plan_hot-desking.jpg"
            title="Open-plan, hot-desking 🍑"
          />
          <BumPost
            date="9th February 2019"
            instagram="https://www.instagram.com/p/Btp0tYenxUE/"
            image="/bumman/21_Night walk.jpg"
            title="Night walk 🍑"
          />
          <BumPost
            date="5th February 2019"
            instagram="https://www.instagram.com/p/BtegEWdH_Xn/"
            image="/bumman/20_Day off.jpg"
            title="Day off 🍑"
          />
          <BumPost
            date="4th February 2019"
            instagram="https://www.instagram.com/p/BtcBGrWnrp3/"
            image="/bumman/19_Library.jpg"
            title="Library 🍑"
          />
          <BumPost
            date="2nd February 2019"
            instagram="https://www.instagram.com/p/BtXAYGNHVsn/"
            image="/bumman/18_Cocktail.jpg"
            title="Cocktail 🍑"
          />
          <BumPost
            date="30th January 2019"
            instagram="https://www.instagram.com/p/BtPVYvEnynQ/"
            image="/bumman/17_Blood donor.jpg"
            title="Blood donor 🍑"
          />
        </>
      ) : null}

      {/* == Items in here are on page 4 ==-==-==-==-==-==-==-==-==-==-==-== */}
      {page === 4 ? (
        <>
          <BumPost
            date="29th January 2019"
            instagram="https://www.instagram.com/p/BtM1rfVH6F7/"
            image="/bumman/16_Tennis.jpg"
            title="Tennis 🍑"
          />

          <BumPost
            date="28th January 2019"
            instagram="https://www.instagram.com/p/BtKGZ6NnYA0/"
            image="/bumman/15_Cycling.jpg"
            title="Cycling 🍑"
          />

          <BumPost
            date="28th January 2019"
            instagram="https://www.instagram.com/p/BtJ7Ml7H-JU/"
            image="/bumman/14_Plank.jpg"
            title="Plank 🍑"
          />

          <BumPost
            date="27th January 2019"
            instagram="https://www.instagram.com/p/BtISgWKnh1j/"
            image="/bumman/13_Downward dog.jpg"
            title="Downward dog 🍑"
          />

          <BumPost
            date="27th January 2019"
            instagram="https://www.instagram.com/p/BtHm5lunnUF/"
            image="/bumman/12_Wedding.jpg"
            title="Wedding 🍑"
          />

          <BumPost
            date="25th January 2019"
            instagram="https://www.instagram.com/p/BtCR3nBn2Rz/"
            image="/bumman/11_Heat wave.jpg"
            title="Heat wave 🍑"
          />

          <BumPost
            date="24th January 2019"
            instagram="https://www.instagram.com/p/BtAC7gsHIY3/"
            image="/bumman/10_Hipster.jpg"
            title="Hipster 🍑"
          />

          <BumPost
            date="22nd July 2018"
            instagram="https://www.instagram.com/p/BlhppRmhe7k/"
            image="/bumman/9_Beach.jpg"
            title="Beach 🍑"
          />

          <BumPost
            date="22nd July 2018"
            instagram="https://www.instagram.com/p/BlhP9rghXps/"
            image="/bumman/8_Birthday_architect_sexy lady.jpg"
            title="Birthday 🍑"
          />

          <BumPost
            date="12th July 2018"
            instagram="https://www.instagram.com/p/BlIDAXhhCpv/"
            image="/bumman/7_Travelling.jpg"
            title="Travelling 🍑"
          />

          <BumPost
            date="9th July 2018"
            instagram="https://www.instagram.com/p/BlAU1NohTs_/"
            image="/bumman/6_Digitised for the archives_b.jpg"
            title="Digitised for the archives (b) | Acrylic on wood (circa 1992) | On loan from the J Staines collection 🍑"
          />

          <BumPost
            date="9th July 2018"
            instagram="https://www.instagram.com/p/BlAU1NohTs_/"
            image="/bumman/6_Digitised for the archives_a.jpg"
            title="Digitised for the archives (a) | Acrylic on wood (circa 1992) | On loan from the J Staines collection 🍑"
          />

          <BumPost
            date="30th May 2018"
            instagram="https://www.instagram.com/p/BjZeUUOBEX9/"
            image="/bumman/5_Baby.jpg"
            title="Baby 🍑"
          />

          <BumPost
            date="4th May 2018"
            instagram="https://www.instagram.com/p/BiWJro4lJZ8/"
            image="/bumman/4_Body hugging.jpg"
            title="Body hugging 🍑"
          />

          <BumPost
            date="15th April 2018"
            instagram="https://www.instagram.com/p/Bhld8sOF-Tt/"
            image="/bumman/3_Leggy_blue.jpg"
            title="Leggy 🍑"
          />

          <BumPost
            date="15th April 2018"
            instagram="https://www.instagram.com/p/Bhldy4xFGJO/"
            image="/bumman/2_Running_green.jpg"
            title="Running 🍑"
          />

          <BumPost
            date="15th April 2018"
            instagram="https://www.instagram.com/p/BhlcK4sl0wj/"
            image="/bumman/1_Classic_pink.jpg"
            title="Classic 🍑"
          />
        </>
      ) : null}

      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Pagination
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={4}
        />
      </div>

      <Divider />

      <Footer />
    </Container>
  );
};

export default App;
