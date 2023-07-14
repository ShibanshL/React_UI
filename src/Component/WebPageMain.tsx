import "./WebPageMain.css";
import svg1 from "../assets/multor-benefit1-icon.svg";
import Darrow from "../assets/Chevron.svg";

const data = [
  {
    id: 1,
    txt: "Highlight the benefits of signing up for an appointment, online class, or video consultation.",
  },
  {
    id: 2,
    txt: "For example, fitness instructors might describe how their routines make people healthier *and* happier.",
  },
  {
    id: 3,
    txt: "Remind visitors how easy it is to claim your offer and start enjoying the benefits.",
  },
];

const cardData = [
  {
    id: 1,
    cardTxt:
      "Talk about some of the details of your offer with a focus on the value people get back.",
  },
  {
    id: 2,
    cardTxt:
      "Is there a pain point that your service resolves? Tell visitors about it here.",
  },
  {
    id: 3,
    cardTxt:
      "Alternatively, you could use this section to address some frequently asked questions.",
  },
];

const options = ["One", "Two", "Three", "Four", "Five"];

function WebPageMain() {
  return (
    <>
      <div className="WebPageMain">
        <div className="StickyBar">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            alt=""
          />
          <button>Login</button>
        </div>
        <div className="Page1">
          <div className="TextPart">
            <h1>Describe the value of booking an appointment</h1>
            <p>
              No need to get clever. Tell people exactly what you're offering,
              then use this space to communicate your key value proposition.
            </p>
            <button>Know More</button>
          </div>
          <div className="ImagePart"></div>
        </div>
        <div className="Page2">
          <div className="Points">
            {data.map((e: any) => {
              return (
                <>
                  <div className="Pointers">
                    <img src={svg1} />
                    <div>
                      <h2>Benefit {e.id}</h2>
                      <h3>{e.txt}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="Register_Form">
            <div className="formCard">
              <h2>Schedule an Appointment</h2>
              <input type="text" placeholder="Firstname*" />
              <input type="text" placeholder="Lastname*" />
              <input type="text" placeholder="Email*" />
              <input type="text" placeholder="Phonenumber*" />
              <div className="SelectContainer">
                <select name="from" id="">
                  <option>Type of appointment</option>
                  {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
                <div className="selectIcon">
                  <img src={Darrow} alt="" />
                </div>
              </div>

              <button>Book now</button>
            </div>
          </div>
        </div>
        <div className="Page3">
          <div className="somethingHere">
            <h1>Show visitors what they're signing up for</h1>
            <p>
              Include a video or photo from one of your sessions to help people
              understand your service {`(or just to hype ‘em up)`}.
            </p>
          </div>
        </div>
        <div className="Page4">
          <div className="topComments">
            <div className="Comments">
              <h2>
                Share a real testimonial that hits some of your benefits (but
                isn't too sales-y).
              </h2>
              <div className="commentIcon">
                <img
                  src="https://th.bing.com/th/id/OIP.e-MVDL8JGuGb8RxZlPEOaAHaE8?pid=ImgDet&rs=1"
                  alt=""
                />
                <div>
                  <h2>Samantha Niel</h2>
                  <p>Housten</p>
                </div>
              </div>
            </div>

            <div className="Comments">
              <h2>
                Include someone talking about how easy it was to sign up and
                participate.
              </h2>
              <div className="commentIcon">
                <img
                  src="https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg"
                  alt=""
                />
                <div>
                  <h2>Nicole Miller</h2>
                  <p>San Fransisco</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomCards">
            {cardData.map((e: any) => {
              return (
                <>
                  <div className="DataCards">
                    <div className="imgContainer">
                      <img
                        src="https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <h2>FEATURE {e.id}</h2>
                      <p>{e.cardTxt}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="Page5">
          <div className="lastLinks">
            <div className="lastImgContainer">
              <img
                src="https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg"
                alt=""
              />
            </div>

            <div>
              <h3>Some more information about your business</h3>
              <p>
                Share a little about yourself as a business owner, or maybe
                describe what makes your service unique. Give visitors one more
                reason to care about your offer and want to work with you.
              </p>
            </div>
          </div>
        </div>
        <div className="footers">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            alt=""
          />
          <h2>© 2020 Insert Name Here. All rights reserved</h2>
        </div>
      </div>
    </>
  );
}

export default WebPageMain;
